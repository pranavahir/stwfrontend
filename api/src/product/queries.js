import { gql } from '@apollo/client';

export const GET_DRAWER_STATE = gql`
  query isDrawerOpen {
    isDrawerOpen @client
  }
`;

export const SORT_PRODUCT_SECTION = gql`
  query sortProductSection {
    sortProductSection @client
  }
`;

export const CART = gql`
  query cart {
    cart @client {
      products
      cartCount
    }
  }
`;

export const WISHLIST = gql`
  query wishlist {
    wishlist @client {
      products
      wishlistCount
    }
  }
`;

export const CART_COUNT = gql`
  query cart {
    cart @client {
      cartCount
    }
  }
`;

export const WISHLIST_COUNT = gql`
  query wishlist {
    wishlist @client {
      wishlistCount
    }
  }
`;

export const VIEWER = gql`
  query ViewerQuery {
    viewer {
      id
      name
      email
    }
  }
`;

export const PRODUCTS = gql`
  query ProductsQuery($field: String!, $order: String!, $category: String) {
    products(sort: { field: $field, order: $order }, category: $category) {
      id
      name
      description
      img_url
      price
      rating
    }
  }
`;


export const PRODUCTSCTE = gql`
query productsCTEQuery($field: String!, $order: String!, $category: String, $offset:Int, $limit:Int) {
  productsCTE(sort: { field: $field, order: $order }, category: $category,offset:$offset, limit:$limit) {
    id
    name
    description
    img_url
    price
    rating
  }
}
`;




export const PRODUCTSCOUNT = gql`
  query ProductsCountQuery($category: String) {
    ProductsCount(category: $category) {
      count:price
    }
  }
`;


export const PRODUCTS_BY_IDS = gql`
  query productsByIds($id: [ID]!) {
    productsById(id: $id) {
      id
      name
      description
      img_url
      price
      rating
    }
  }
`;

export const PRODUCTS_BY_IDS_PRICE = gql`
  query productsByIds($id: [ID]!) {
    productsById(id: $id) {
      count
    }
  }
`;

export const CATEGORIES = gql`
  query CategoriesQuery {
    categories {
      id
      name
      label
      md_icon
    }
  }
`;
