import React, { createContext, useState,useEffect } from "react";
import gql from 'graphql-tag';
// import { useQuery } from '@apollo/react-hooks';
// const GET_MiscinfoByDomain = gql`
// query  MiscinfoByDomain($domain:String!){
//   MiscinfoByDomain(domain: $domain) {
//    country
//    phone
//    address
//    emailid
//    currencysymbol
//    currencyinletter
//    facebookacct
//    instagramacct
//    twitteracct
//    googleacct
//    panel
//    isright
//    gstortax
//    paymentforbusiness
//    paymentnonbusiness
//    domain
//   }
// }
// `;
export const Context = createContext({});

export const Provider = props => {
  
  
 
  // const getData = () => {
  //   var { loading, data } = useQuery(GET_MiscinfoByDomain, {
  //     variables: {
  //      domain:"shoptheworld.ae" 
  //   } 
  //   });

  //   return data;
  // }

 

var ListConfig=[
  {

    domain: "localhost",
    fullDomain: "localhost",
   
  //   currency: 'AED',
  // currencyCode:'aed',
  // symbol: 'د.إ', 
  // value:1, 
  // IsRight : true,
  // country:"UAE",
  // panel:"STW UAE",
  // address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  // addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  // addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  // // domain: "shoptheworld.ae",
  // // fullDomain: "www.shoptheworld.ae",
  // emailid: "care@shoptheworldonline.com",
  // facebookacct: null,
  // googleacct: null,
  // gstortax: "VAT",
  // instagramacct: null,
  // paymentforbusiness: "stripe",
  // paymentnonbusiness: "stripe",
  // phone: "+971 554885120",
  // twitteracct: null,
  // CurrencyConvertionRate:3.67

    currency: 'INR',
    currencyCode:'inr',
    symbol: '₹', 
    value:1, 
    IsRight : false,
    country:"India",
    panel:"STW India",
    address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
    addressOne: "19640 griffin road southwest ranches florida 33332 USA",
    addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
    emailid: "care@shoptheworldonline.com",
    topCollections:[
      {
        imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
        categoryUrl:"/c/Phone",
        category:"Phone",
        keyWorld:"More phone >>",
        

      },
      {
        imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
        categoryUrl:"/c/Laptop",
        category:"Laptop",
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
        categoryUrl:"/c/Tablet",
        category:"Tablet",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
        categoryUrl:"/c/Phone",
        category:"Phone",
        keyWorld:"More phone >>",
        

      },
      {
        imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
        categoryUrl:"/c/Laptop",
        category:"Laptop",
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
        categoryUrl:"/c/Tablet",
        category:"Tablet",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
    ],
    newProducts:[
      {
        imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      }  

      // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
    ],
    featureProducts:[
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
    ],
    specialproducts:[
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:"More >>"
      } 
      // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
    ],
    facebookacct: null,
    googleacct: null,
    gstortax: "GST",
    instagramacct: null,
    paymentforbusiness: "stripe",
    paymentnonbusiness: "stripe",
    phone: "+91 9820168421",
    twitteracct: null,
    CurrencyConvertionRate:73.23
  },
  {
    currency: 'INR',
    currencyCode:'inr',
    symbol: '₹', 
    value:1, 
    IsRight : false,
    country:"India",
    panel:"STW India",
    address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
    addressOne: "19640 griffin road southwest ranches florida 33332 USA",
    addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
    domain: "shoptheworlds.com",
    fullDomain: "www.shoptheworlds.com",
    emailid: "care@shoptheworldonline.com",
    facebookacct: null,
    googleacct: null,
    gstortax: "GST",
    topCollections:[
      {
        imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
        categoryUrl:"/c/Phone",
        category:"Phone",
        keyWorld:"More phone >>",
        

      },
      {
        imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
        categoryUrl:"/c/Laptop",
        category:"Laptop",
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
        categoryUrl:"/c/Tablet",
        category:"Tablet",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
        categoryUrl:"/c/Phone",
        category:"Phone",
        keyWorld:"More phone >>",
        

      },
      {
        imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
        categoryUrl:"/c/Laptop",
        category:"Laptop",
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
        categoryUrl:"/c/Tablet",
        category:"Tablet",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
    ],
    newProducts:[
      {
        imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      }  

      // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
    ],
    featureProducts:[
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
    ],
    specialproducts:[
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
        categoryUrl:"",
        category:"",
        keyWorld:""
      } 
      // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
    ],
    instagramacct: null,
    paymentforbusiness: "stripe",
    paymentnonbusiness: "stripe",
    phone: "+91 9820168421",
    twitteracct: null,
    CurrencyConvertionRate:73.23
  },
  {
  currency: 'INR',
  currencyCode:'inr',
  symbol: '₹', 
  value:1, 
  IsRight : false,
  country:"India",
  panel:"STW India",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.in",
  fullDomain:"www.shoptheworld.in",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:["iphone","oneplus","samsung"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"apple",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:["iphone","oneplus","samsung"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"apple",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    }  

    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  featureProducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  specialproducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:"More Tablet >>"
    } 
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  gstortax: "GST",
  instagramacct: null,
  paymentforbusiness: "razorpay",
  paymentnonbusiness: "stripe",
  phone: "+91 9820168421",
  twitteracct: null,
  CurrencyConvertionRate:73.23
},
{
  currency: 'AED',
  currencyCode:'aed',
  symbol: 'د.إ', 
  value:1, 
  IsRight : true,
  country:"UAE",
  panel:"STW UAE",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.ae",
  fullDomain: "www.shoptheworld.ae",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    }  

    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  featureProducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  specialproducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    } 
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  gstortax: "VAT",
  instagramacct: null,
  paymentforbusiness: "stripe",
  paymentnonbusiness: "stripe",
  phone: "+971 554885120",
  twitteracct: null,
  CurrencyConvertionRate:3.67
},
{
  currency: 'SGD',
  currencyCode:'sgd',
  symbol: '$', 
  value:1, 
  IsRight : true,
  country:"Singapore",
  panel:"STW Singapore",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.sg",
  fullDomain: "www.shoptheworld.sg",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    }  

    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  featureProducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  specialproducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    } 
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  gstortax: "VAT",
  instagramacct: null,
  paymentforbusiness: "stripe",
  paymentnonbusiness: "stripe",
  phone: "+65 94871296",
  twitteracct: null,
  CurrencyConvertionRate:1.33
},
{
  currency: 'SAR',
  currencyCode:'sar',
  symbol: 'SAR', 
  value:1, 
  IsRight : true,
  country:"KSA",
  panel:"STW KSA",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.sa.com",
  fullDomain: "www.shoptheworld.sa.com",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    }  

    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  featureProducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  specialproducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    } 
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  gstortax: "VAT",
  instagramacct: null,
  paymentforbusiness: "stripe",
  paymentnonbusiness: "stripe",
  phone: "+966 505556099",
  twitteracct: null,
  CurrencyConvertionRate:3.75
},
{
  currency: 'GBP',
  currencyCode:'gbp',
  symbol: '£', 
  value:1, 
  IsRight : true,
  country:"GBR",
  panel:"STW GBR",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.uk",
  fullDomain: "www.shoptheworld.uk",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    }  

    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  featureProducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  specialproducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    } 
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  gstortax: "VAT",
  instagramacct: null,
  paymentforbusiness: "stripe",
  paymentnonbusiness: "stripe",
  phone: "+91 9820168421",
  twitteracct: null,
  CurrencyConvertionRate:0.71
},
{
  currency: 'MXN',
  currencyCode:'MXN',
  symbol: '$', 
  value:1, 
  IsRight : true,
  country:"Mexico",
  panel:"STW Mexico",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.mx",
  fullDomain: "www.shoptheworld.mx",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    }  

    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  featureProducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  specialproducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    } 
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  gstortax: "VAT",
  instagramacct: null,
  paymentforbusiness: "stripe",
  paymentnonbusiness: "stripe",
  phone: "+91 9820168421",
  twitteracct: null,
  CurrencyConvertionRate:19.87
},
{
  currency: 'BRL',
  currencyCode:'BRL',
  symbol: 'R$', 
  value:1, 
  IsRight : true,
  country:"Brazil",
  panel:"STW Brazil",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.com.br",
  fullDomain: "www.shoptheworld.com.br",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    }  

    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  featureProducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  specialproducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    } 
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  gstortax: "VAT",
  instagramacct: null,
  paymentforbusiness: "stripe",
  paymentnonbusiness: "stripe",
  phone: "+91 9820168421",
  twitteracct: null,
  CurrencyConvertionRate:5.12
},
{
  currency: 'Euro',
  currencyCode:'EUR',
  symbol: '€', 
  value:1, 
  IsRight : true,
  country:"EU",
  panel:"STW EU",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.eu",
  fullDomain: "www.shoptheworld.eu",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  gstortax: "VAT",
  instagramacct: null,
  paymentforbusiness: "stripe",
  paymentnonbusiness: "stripe",
  phone: "+91 9820168421",
  twitteracct: null,
  CurrencyConvertionRate:0.83
},
{
  currency: 'Qatari Rial',
  currencyCode:'qar',
  symbol: 'QAR', 
  value:1, 
  IsRight : true,
  country:"Qatar",
  panel:"STW Qatar",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.qa",
  fullDomain: "www.shoptheworld.qa",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    }  

    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  featureProducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  specialproducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    } 
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  gstortax: "VAT",
  instagramacct: null,
  paymentforbusiness: "stripe",
  paymentnonbusiness: "stripe",
  phone: "+91 9820168421",
  twitteracct: null,
  CurrencyConvertionRate:3.64
},
{
  currency: 'Kenyan shilling',
  currencyCode:'KES',
  symbol: 'KES', 
  value:1, 
  IsRight : true,
  country:"Qatar",
  panel:"STW Qatar",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.ke",
  fullDomain: "www.shoptheworld.ke",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    }  

    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  featureProducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  specialproducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    } 
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  gstortax: "VAT",
  instagramacct: null,
  paymentforbusiness: "stripe",
  paymentnonbusiness: "stripe",
  phone: "+91 9820168421",
  twitteracct: null,
  CurrencyConvertionRate:108.24
},
{
  currency: 'Canadian Dollar',
  currencyCode:'CAD',
  symbol: 'CA$', 
  value:1, 
  IsRight : true,
  country:"Canada",
  panel:"STW Canada",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworld.ca",
  fullDomain: "www.shoptheworld.ca",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/417PwBC+iEL.jpg",
      categoryUrl:"/c/Phone",
      category:"Phone",
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"https://m.media-amazon.com/images/I/413fkA2hhSS.jpg",
      categoryUrl:"/c/Laptop",
      category:"Laptop",
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51XeMvBLlGL.jpg",
      categoryUrl:"/c/Tablet",
      category:"Tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31rxH44lpoL.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"https://m.media-amazon.com/images/I/51fl8l0G78L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/51wZU-kW22L.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/41ghh3XjOLL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://m.media-amazon.com/images/I/31Ide2xeMgL.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71hEefMZtcL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    }  

    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  featureProducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71p7xwt7bgL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71JDCbasgaL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/81H1Grsm4XL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  specialproducts:[
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71-QiEqDpZL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/810VOlH6cGL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/71sjjcwJ6cL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/61KdzsxowuL._SL1500_.jpg",
      categoryUrl:"",
      category:"",
      keyWorld:""
    } 
    // https://m.media-amazon.com/images/I/413fkA2hhSS.jpg
  ],
  gstortax: "VAT",
  instagramacct: null,
  paymentforbusiness: "stripe",
  paymentnonbusiness: "stripe",
  phone: "+91 9820168421",
  twitteracct: null,
  CurrencyConvertionRate:1.22
}

]

var selectedConfig=null;
var domain = window.location.hostname;

console.log(domain);
for(var i=0;i<ListConfig.length;i++)
{
  if(ListConfig[i].domain == domain || ListConfig[i].fullDomain == domain)
  {
    selectedConfig =  ListConfig[i];
  }
}
console.log(selectedConfig);
const [selectedCurr, selectedCurrency] = useState(selectedConfig);
 
  const currencyContext = {
    selectedCurr,
    selectedCurrency
  };

  const {value} = props

  return (
      <Context.Provider value={{
          state:selectedCurr,
          currencyContext:currencyContext
        }}>
        {props.children}
      </Context.Provider>
    );
  
};

export const { Consumer } = Context;

export {
  Context as CurrencyContext,
  Provider as CurrencyContextProvider,
} from "./CurrencyContext";
