// import connection from '../db/connection';

const knex = require('knex')('development');
const configuration = require('../knexfile');

let config;

if (process.env.NODE_ENV === 'test') config = configuration.test;
if (process.env.NODE_ENV === 'development') config = configuration.development;
if (process.env.NODE_ENV === 'production') config = configuration.production;

const connection = knex(config);

  findProductsById:(id) => {
    if (id) {
      const products = "test";
      //  connection('product').where((builder) =>
      //   builder.whereIn('id', id)
      // );
      return products;
    }
    return;
  }
  
// listProducts( sort, category) {
//   if (sort && category) {
//     // Sort + Category
//     const sortParsed = JSON.parse(JSON.stringify(sort[0]));
//     const { field, order } = sortParsed;

//     const products = connection('product')
//       .join(
//         'product_category',
//         'product.id',
//         '=',
//         'product_category.product_id'
//       )
//       .join('category', 'category.id', '=', 'product_category.category_id')
//       .where('category.name', category)
//       .select('product.*')
//       .orderBy(field, order);

//     return products;
//   } else if (sort) {
//     // Sort
//     const sortParsed = JSON.parse(JSON.stringify(sort[0]));
//     const { field, order } = sortParsed;

//     const products = connection('product').orderBy(field, order);
//     return products;
//   } else if (category) {
//     // Category
//     const products = connection('product')
//       .join(
//         'product_category',
//         'product.id',
//         '=',
//         'product_category.product_id'
//       )
//       .join('category', 'category.id', '=', 'product_category.category_id')
//       .where('category.name', category)
//       .select('product.*');

//     return products;
//   }
//   // Default
//   const products = connection('product');
//   return products;
// }


//   listProductsCTE( sort, category, offset , limit ){
//     if (sort && category) {
//       // Sort + Category
//       const sortParsed = JSON.parse(JSON.stringify(sort[0]));
//       const { field, order } = sortParsed;
  
//       GetConnection


//       const products = connection('product')
//         .join(
//           'product_category',
//           'product.id',
//           '=',
//           'product_category.product_id'
//         )
//         .join('category', 'category.id', '=', 'product_category.category_id')
//         .where('category.name', category)
//         // .where('product.id','>', offset)
//         .select('product.*')
//         .orderBy(field, order)
//         .limit(limit)
//         .offset(offset);
  
//       return products;
//     } else if (sort) {
//       // Sort
//       const sortParsed = JSON.parse(JSON.stringify(sort[0]));
//       const { field, order } = sortParsed;
//       const products =  connection('product')
//       .orderBy(field, order)
//       // .after('cursor')
//       .where('product.id','>', offset)
//       .limit(limit);
//       return products;
//     } else if (category) {
//       // Category
//       const products =  connection('product')
//         .join(
//           'product_category',
//           'product.id',
//           '=',
//           'product_category.product_id'
//         )
//         .join('category', 'category.id', '=', 'product_category.category_id')
//         .where('category.name', category)
//         .select('product.*', 'OFFSET ', offset,'LIMIT ',limit)
  
//       return products;
//     }
//     // Default
//     const products =  connection('product');
//     return products;
//   }

 


// export async function listProductsCount({category}) {
//    if (category) {
//     // Category
//     const Count = await connection('product')
//       .join(
//         'product_category',
//         'product.id',
//         '=',
//         'product_category.product_id'
//       )
//       .join('category', 'category.id', '=', 'product_category.category_id')
//       .where('category.name', 'mac')
//       .select('product.id');
//       console.log(Count)
//       return Count;
//   }
//   // Default
//   const products = await connection('product');
//   console.log(productsCount)
//   return products;
// }

// export async function findProduct({ id }) {
//   const product = await connection('product').whereRaw('id = ?', [id]).first();

//   return product;
// }



// export async function CreateProduct(input) {
//   const newProduct = {
//     name: input.name,
//     description: input.description,
//     img_url: input.img_url,
//     price: parseFloat(input.price),
//     rating: parseFloat(input.rating),
//     created_at: Date.now(),
//     updated_at: Date.now(),
//     user_id: '1',
//   };

//   const trx = await connection.transaction();
//   try {
//     const insertedProductId = await trx('product').insert(newProduct);
//     const product_id = insertedProductId[0];

//     await trx('product_category').insert({
//       product_id,
//       category_id: input.category_id,
//     });

//     await trx.commit();

//     const createdProduct = await findProduct({ id: product_id });

//     return createdProduct;
//   } catch (error) {
//     await trx.rollback();

//     throw new Error('Server side error to create a new product');
//   }
// }

// export async function DeleteProduct({ id }) {
//   await connection('product').whereRaw('id = ?', [id]).del();

//   return true;
// }

// export async function UpdateProduct(id, input) {
//   const newProduct = {
//     name: input.name,
//     description: input.description,
//     img_url: input.img_url,
//     price: parseFloat(input.price),
//     rating: parseFloat(input.rating),
//     updated_at: Date.now(),
//   };
//   const updatedProduct = await connection('product')
//     .whereRaw('id = ?', [id])
//     .update(newProduct);

//   const product = await findProduct({ id: updatedProduct });

//   return product;
// }
