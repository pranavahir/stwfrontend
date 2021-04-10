const {ApolloServer , gql} = require('apollo-server');

const typeDefs = gql`
    type Product {
        id: Int!
        title: String
        description: String
        type: _CategoryType
        brand: String
        collection: [String]
        category: String
        price: String
        sale: String
        discount: String
        picture:Int
        stock: Int
        new: String
        tags: [String]
        variants: [Variants]
        images:[Images]
        sortBy: _SortBy
      }

      type ProductMasterDetails {
          id:Int
          Seqid:Int
          name: String
          departmentid:Int
          categoryid:Int
          brandid:Int
          linkid: String
          refid: String
          isvisible:Int
          description: String
          descriptionshort: String
          releasedate: String
          keywords: String
          title: String
          isactive:Int
          taxcode: String
          metatagdescription: String
          supplierid: String
          showwithoutstock: String
          adwordsremarketingcode: String
          lomadeecampaigncode: String
          score:Int
          CreatedBy:Int
          CreatedAt:Int
          price:String
          type:String
          collection:String
          brand:String
          stock:Int
          new:String
          sale:String
          discount:String
          images:[Images]
          tags: [String]
          variants: [Variants]
        }

      type ProductDetails {
        id: ID!
        name: String!
        description: String!
        img_url: String!
        price: String!
        rating: String!
        createdAt: Int
        updatedAt: Int
        user_id: ID!
      }

 
      type Images {
        imageid: Int
        id: Int
        alt: String
        src: String
    }

    type Variants {
      variant_id:String
      id:String
      sku:String
      size:String
      color:String
      image_id:Int
     }

     type Currency {
      currency : String
      name : String
      symbol : String
      value : Int
    }
    
    type Instagram {
      type:String
      img:String
    }

    type Brand {
      brand:[String]
    }

    type Color {
      colors:[String]
    }

    type Size {
      size : [String]
    }

    enum _SortBy {
      HighToLow,
      LowToHigh,
      Newest,
      AscOrder,
      DescOrder,
    }

    enum _CategoryType {
      electronics,
      vegetables,
      furniture,
      jewellery,
      fashion,
      beauty,
      flower,
      tools,
      watch,
      metro,
      shoes,
      bags,
      kids,
      game,
      gym,
      pets,
      portfolio,
      goggles,
      videoslider,
      marijuana,
      nursery,
      christmas,
      marketplace,
      light,
      all
      
    }

    type ProductResponse {
      items(limit:Int,indexFrom:Int):[ProductMasterDetails],
      total:_Total,
      hasMore(limit:Int,indexFrom:Int):_hasMore
    }

    type _Total {
      total:Int,
    }

    type _hasMore {
      id:Int,
    }
    

    type Blog {
      type:String,
      img:String,
      link:String,
      title:String,
      desc:String,
      date:String,
      shortDesc:String,
      longDesc:String
    }
    
    
     type Query {
        product(id: Int!): ProductMasterDetails!
        products( indexFrom:Int , limit:Int ,type:String ,text :String ,brand: [String!],size:[String!] , color:String ,sortBy:_SortBy ,priceMin:Int ,priceMax:Int ): ProductResponse!
        productByType(type:String):[Product]
        productByCategory(category:String):[Product]
        instagram(type:String):[Instagram]
        blog(type:String):[Blog]
        getBrands(type:String):Brand!
        getColors(type:String):Color!
        getSize(type:String):Size!
        newProducts(type:String):[Product]
        getProducts(limit:Int):[Product]
        getCurrency:[Currency]
        productsById(id: Int!): [ProductMasterDetails]!
        
      }
  
    # type Mutation {
    #     createUser(name: String, email: String, password: String): User
    #     createRecipe(
    #       userId: Int
    #       title: String
    #       ingredients: String
    #       direction: String
    #     ): Recipe
    # }
`;



module.exports = typeDefs