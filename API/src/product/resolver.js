const products = require('./data');
const loadCurrency = require('../currency/data')
const InstagramData = require('../instagram/data')
const BlogData = require('../Blogs/data');
const findProductsById = require('../../lib/product')
const _ = require('lodash')
const ProductResponse = require('./schema')
const Fuse = require('fuse.js');
const knex = require('knex');
const EventEmitter = require('events');

let config= {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '12345',
    database: 'postgres',
  },
  acquireConnectionTimeout: 30000
};


let productionconfig = {
  client: 'pg',
  connection: {
    host: '162.0.210.5',
    user: 'shopthew_admin',
    password: 'tecmac@2021!',
    database: 'shopthew_stwecommerce',
  },
  acquireConnectionTimeout: 30000
}




const resolvers = {



  ProductMasterDetails: {

    images: ({ id }, args, context, info) =>{
        var imageList = null;
          try {
            const connection = knex(config);
            objProduct = connection('images')
            .where('imageid',id);
            
          } catch (error) {
            throw new Error('It is not possible list products '+ error);
          } finally{
      
          }
          return objProduct
      },

      variants: ({ id }, args, context, info) =>{
        var imageList = null;
          try {
            const connection = knex(config);
            objProduct = connection('variants')
            .where('variantId',id);
            
          } catch (error) {
            throw new Error('It is not possible list products '+ error);
          } finally{
      
          }
          return objProduct
      },

  },

   ProductResponse:{

    items: (root, args, context, info) => {
      var objProduct = null;
      try {

        const connection = knex(config);
        objProduct = connection('productmaster')
        .limit(args.limit)
        .offset(args.indexFrom);

 
      } catch (error) {
        throw new Error('It is not possible list products '+ error);
      } finally{
 
      }
      return objProduct
    },

    total: (root, args, context, info) => {
      var objProduct = null;
      try {
 
        const connection = knex(config);
        objProduct = connection('productmaster')
        .count('id as total')
        .first();
      } catch (error) {
        throw new Error('It is not possible list products '+ error);
      } finally{
        // connection.destroy();
      }
      return objProduct
    },

    hasMore: (root, args, context, info) => {
      var objProduct = null;
      var newOffset =(args.indexFrom + args.limit);
      try {
   

        

        const connection = knex(config);
        objProduct = connection('productmaster')
        .select('id')
        .first()
        .offset(newOffset);
      } catch (error) {
        throw new Error('It is not possible list products '+ error);
      } finally{
       
      }
      
      return objProduct
    },

  },




  
  Query: {
    products: (root, args, context, info) => {
      var objProduct = null;
      try {

    
        const connection = knex(config);
        objProduct = connection('products')
        .limit(args.limit)
        .offset(args.indexFrom);

      } catch (error) {
        throw new Error('It is not possible list products '+ error);
      }
      finally{
        
      }
      return objProduct
    },

    // product: (root, args, context, info) => products.find(e => e.id === args.id),


    product: (root, args, context, info) =>{
      var objProduct = null;
        try {
          const connection = knex(config);
          objProduct = connection('products')
          .first()
          .where('"Seqid"',args.id);
        } catch (error) {
          throw new Error('It is not possible list products '+ error);
        } finally{
          // connection.destroy();
        }
        return objProduct
    },



    productByType: (root, args, context, info) => products.filter(e => e.type === args.type),
    productByCategory: (root, args, context, info) => {
      console.log("args", args);
      return products.filter(e => e.category === args.category)
    },

    instagram: (root, args, context, info) => InstagramData.filter(e => e.type === args.type),
    blog: (root, args, context, info) => BlogData.filter(e => e.type === args.type),

    getBrands: (root, args, context, info) => {
      const data = products.filter(item => item.type === args.type);
      const brands = [...new Set(data.map(item => item.brand))]
      return { brand: brands };
    },
    getColors: (root, args, context, info) => {
      const color = []
      const data = products.filter(item => item.type === 'fashion' || item.type === args.type)
      data.filter((product) => {
        product.variants.filter((variant) => {
          if (variant.color) {
            const index = color.indexOf(variant.color)
            if (index === -1) color.push(variant.color)
          }
        })
      })
      return { colors: color };
    },
    getSize: (root, args, context, info) => {
      const sizes = []
      const data = products.filter(item => item.type === 'fashion' || item.type === args.type)
      data.filter((product) => {
        product.variants.filter((variant) => {
          if (variant.size) {
            const index = sizes.indexOf(variant.size)
            if (index === -1) sizes.push(variant.size)
          }
        })
      })
      return { size: sizes };
    },
    newProducts: (root, args, context, info) => {
      return products.filter(item => {
        var cond = Boolean;
        if (args.type)
          cond = (item.type === args.type && item.new === true)
        else
          cond = (item.new === true)

        return cond;
      })
    },
    getProducts: (root, args, context, info) => {
      const indexFrom = 0;
      return products.splice(indexFrom, indexFrom + args.limit);

    },
    getCurrency: () => {
      return loadCurrency;
    }
  },

  Product: {
    id: parent => parent.id,
    title: parent => parent.title,
  }
};

module.exports = resolvers