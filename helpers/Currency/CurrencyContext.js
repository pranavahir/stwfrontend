import React, { createContext, useState,useEffect } from "react";
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { AlertTriangle } from "react-feather";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
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
  
  // useEffect(()=>{
  //   // setTimeout(()=>{
  //   //   router.push("/page/privacy_policy")
  //   // },30)
  //   var domain = window.location.hostname;
  //   console.log(domain);
  //   if(domain == "localhost" || domain == "shoptheworld.store" || domain == "shoptheworldonline.com" || domain == "test.digitechniq.in"){
  //         fetch('https://extreme-ip-lookup.com/json/')
  //       .then( res => res.json())
  //       .then(response => {
  //       //  console.log("Country is : ", response);

  //       alert(response.countryCode);
  //       if(response.countryCode == "IN")
  //       {
  //         sessionStorage.setItem('geoLocation', "/in");
         
  //       }
  //       else if(response.countryCode == "AE")
  //       {
  //         sessionStorage.setItem('geoLocation', "/ae");
          
  //       }
  //       else if(response.countryCode == "US")
  //       {
  //         sessionStorage.setItem('geoLocation', "/us");
         
  //       }
  //       else
  //       {
  //         sessionStorage.setItem('geoLocation', "");
  //       }
  //     })
  //     .catch((data, status) => {
  //       console.log('Request failed:', data);
  //     });
  //   }
  //   else
  //   {
  //     sessionStorage.setItem('geoLocation', "");
  //   }

    

  // },[])

 
  // const getData = () => {
  //   var { loading, data } = useQuery(GET_MiscinfoByDomain, {
  //     variables: {
  //      domain:"shoptheworld.ae" 
  //   } 
  //   });

  //   return data;
  // }
  const router = useRouter();
 

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
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
        categoryUrl:"/c/Phone",
        category:["phone"],
        keyWorld:"More phone >>",
      
  
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
        categoryUrl:"/c/Laptop",
        category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
        categoryUrl:"/c/Tablet",
        category:"apple",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
        categoryUrl:"/c/Phone",
        category:["phone"],
        keyWorld:"More phone >>",
        
  
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
        categoryUrl:"/c/Laptop",
        category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
        categoryUrl:"/c/Tablet",
        category:"apple",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },

      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    newProducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
        categoryUrl:"projector",
        category:"projector",
        keyWorld:"More Projectors >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
        categoryUrl:"smartwatch",
        category:"smartwatch",
        keyWorld:"More Smartwatches >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
        categoryUrl:"camera",
        category:"camera",
        keyWorld:"More Camera's >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
        categoryUrl:"homenkitchen",
        category:"homenkitchen",
        keyWorld:"More Home & kitchen >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
        categoryUrl:"homenkitchen",
        category:"homenkitchen",
        keyWorld:"More Home & kitchen >>"
      }  

      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    featureProducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
        categoryUrl:"speaker",
        category:"speaker",
        keyWorld:"More Speakers >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
        categoryUrl:"gagdet",
        category:"gagdet",
        keyWorld:"More Gagdets >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
        categoryUrl:"printer",
        category:"printer",
        keyWorld:"More Printers >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
        categoryUrl:"monitor",
        category:"monitor",
        keyWorld:"More Monitors >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
        categoryUrl:"networking",
        category:"networking",
        keyWorld:"More Networking >>"
      },
      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    specialproducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics>>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazonzon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazonzon Basics >>"
      } 
      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
    domain: "test.digitechniq.in\in",
    fullDomain: "www.test.digitechniq.in\in",
    emailid: "care@shoptheworldonline.com",
    facebookacct: null,
    googleacct: null,
    gstortax: "GST",
    topCollections:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
        categoryUrl:"/c/Phone",
        category:["phone"],
        keyWorld:"More phone >>",
        
  
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
        categoryUrl:"/c/Laptop",
        category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
        categoryUrl:"/c/Tablet",
        category:"apple",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
        categoryUrl:"/c/Phone",
        category:["phone"],
        keyWorld:"More phone >>",
        
  
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
        categoryUrl:"/c/Laptop",
        category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
        categoryUrl:"/c/Tablet",
        category:"apple",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
    ],
    newProducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
        categoryUrl:"projector",
        category:"projector",
        keyWorld:"More Projectors >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
        categoryUrl:"smartwatch",
        category:"smartwatch",
        keyWorld:"More Smartwatches >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
        categoryUrl:"camera",
        category:"camera",
        keyWorld:"More Camera's >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
        categoryUrl:"homenkitchen",
        category:"homenkitchen",
        keyWorld:"More Home & kitchen >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
        categoryUrl:"homenkitchen",
        category:"homenkitchen",
        keyWorld:"More Home & kitchen >>"
      }  

      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    featureProducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
        categoryUrl:"speaker",
        category:"speaker",
        keyWorld:"More Speakers >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
        categoryUrl:"gagdet",
        category:"gagdet",
        keyWorld:"More Gagdets >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
        categoryUrl:"printer",
        category:"printer",
        keyWorld:"More Printers >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
        categoryUrl:"monitor",
        category:"monitor",
        keyWorld:"More Monitors >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
        categoryUrl:"networking",
        category:"networking",
        keyWorld:"More Networking >>"
      },
      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    specialproducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics>>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazonzon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazonzon Basics >>"
      } 
      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
    domain: "test.digitechniq.in",
    fullDomain: "www.test.digitechniq.in",
    emailid: "care@shoptheworldonline.com",
    facebookacct: null,
    googleacct: null,
    gstortax: "GST",
    topCollections:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
        categoryUrl:"/c/Phone",
        category:["phone"],
        keyWorld:"More phone >>",
        
  
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
        categoryUrl:"/c/Laptop",
        category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
        categoryUrl:"/c/Tablet",
        category:"apple",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
        categoryUrl:"/c/Phone",
        category:["phone"],
        keyWorld:"More phone >>",
        
  
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
        categoryUrl:"/c/Laptop",
        category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
        categoryUrl:"/c/Tablet",
        category:"apple",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
    ],
    newProducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
        categoryUrl:"projector",
        category:"projector",
        keyWorld:"More Projectors >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
        categoryUrl:"smartwatch",
        category:"smartwatch",
        keyWorld:"More Smartwatches >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
        categoryUrl:"camera",
        category:"camera",
        keyWorld:"More Camera's >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
        categoryUrl:"homenkitchen",
        category:"homenkitchen",
        keyWorld:"More Home & kitchen >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
        categoryUrl:"homenkitchen",
        category:"homenkitchen",
        keyWorld:"More Home & kitchen >>"
      }  

      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    featureProducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
        categoryUrl:"speaker",
        category:"speaker",
        keyWorld:"More Speakers >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
        categoryUrl:"gagdet",
        category:"gagdet",
        keyWorld:"More Gagdets >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
        categoryUrl:"printer",
        category:"printer",
        keyWorld:"More Printers >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
        categoryUrl:"monitor",
        category:"monitor",
        keyWorld:"More Monitors >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
        categoryUrl:"networking",
        category:"networking",
        keyWorld:"More Networking >>"
      },
      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    specialproducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics>>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazonzon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazonzon Basics >>"
      } 
      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
    domain: "shoptheworldonline.in",
    fullDomain: "www.shoptheworldonline.in",
    emailid: "care@shoptheworldonline.com",
    facebookacct: null,
    googleacct: null,
    gstortax: "GST",
    topCollections:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
        categoryUrl:"/c/Phone",
        category:["iphone","oneplus","samsung"],
        keyWorld:"More phone >>",
        
  
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
        categoryUrl:"/c/Laptop",
        category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
        categoryUrl:"/c/Tablet",
        category:"apple",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
        categoryUrl:"/c/Phone",
        category:["iphone","oneplus","samsung"],
        keyWorld:"More phone >>",
        
  
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
        categoryUrl:"/c/Laptop",
        category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
        categoryUrl:"/c/Tablet",
        category:"apple",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
    ],
    newProducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
        categoryUrl:"projector",
        category:"projector",
        keyWorld:"More Projectors >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
        categoryUrl:"smartwatch",
        category:"smartwatch",
        keyWorld:"More Smartwatches >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
        categoryUrl:"camera",
        category:"camera",
        keyWorld:"More Camera's >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
        categoryUrl:"homenkitchen",
        category:"homenkitchen",
        keyWorld:"More Home & kitchen >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
        categoryUrl:"homenkitchen",
        category:"homenkitchen",
        keyWorld:"More Home & kitchen >>"
      }  

      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    featureProducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
        categoryUrl:"speaker",
        category:"speaker",
        keyWorld:"More Speakers >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
        categoryUrl:"gagdet",
        category:"gagdet",
        keyWorld:"More Gagdets >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
        categoryUrl:"printer",
        category:"printer",
        keyWorld:"More Printers >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
        categoryUrl:"monitor",
        category:"monitor",
        keyWorld:"More Monitors >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
        categoryUrl:"networking",
        category:"networking",
        keyWorld:"More Networking >>"
      },
      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    specialproducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics>>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazonzon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazonzon Basics >>"
      } 
      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
    domain: "shoptheworld.store",
    fullDomain: "www.shoptheworld.store",
    emailid: "care@shoptheworldonline.com",
    facebookacct: null,
    googleacct: null,
    gstortax: "GST",
    topCollections:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
        categoryUrl:"/c/Phone",
        category:["phone"],
        keyWorld:"More phone >>",
        
  
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
        categoryUrl:"/c/Laptop",
        category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
        categoryUrl:"/c/Tablet",
        category:"apple",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
        categoryUrl:"/c/Phone",
        category:["phone"],
        keyWorld:"More phone >>",
        
  
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
        categoryUrl:"/c/Laptop",
        category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
        keyWorld:"More Laptops >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
        categoryUrl:"/c/Tablet",
        category:"apple",
        keyWorld:"More Tablet >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
        categoryUrl:"/c/HeadPhone",
        category:"HeadPhone",
        keyWorld:"More HeadPhone >>"
      },
    ],
    newProducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
        categoryUrl:"projector",
        category:"projector",
        keyWorld:"More Projectors >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
        categoryUrl:"smartwatch",
        category:"smartwatch",
        keyWorld:"More Smartwatches >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
        categoryUrl:"camera",
        category:"camera",
        keyWorld:"More Camera's >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
        categoryUrl:"homenkitchen",
        category:"homenkitchen",
        keyWorld:"More Home & kitchen >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
        categoryUrl:"homenkitchen",
        category:"homenkitchen",
        keyWorld:"More Home & kitchen >>"
      }  

      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    featureProducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
        categoryUrl:"speaker",
        category:"speaker",
        keyWorld:"More Speakers >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
        categoryUrl:"gagdet",
        category:"gagdet",
        keyWorld:"More Gagdets >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
        categoryUrl:"printer",
        category:"printer",
        keyWorld:"More Printers >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
        categoryUrl:"monitor",
        category:"monitor",
        keyWorld:"More Monitors >>"
      },
      {
        imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
        categoryUrl:"networking",
        category:"networking",
        keyWorld:"More Networking >>"
      },
      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
    ],
    specialproducts:[
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazon Basics>>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazonzon Basics >>"
      },
      {
        imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
        categoryUrl:"amazonbasics",
        category:"amazonbasics",
        keyWorld:"More Amazonzon Basics >>"
      } 
      // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
  currency: 'USD',
  currencyCode:'USD',
  symbol: '$', 
  value:1, 
  IsRight : false,
  country:"USA",
  panel:"STW USA",
  address: "B207, Synthophine Ind estate , Near WEH, Goregoan East, Mumbai 400063 INDIA",
  addressOne: "19640 griffin road southwest ranches florida 33332 USA",
  addressTwo: "103 Office no 21 Opal Towers Business Bay Dubai UAE",
  domain: "shoptheworldonline.com",
  fullDomain:"www.shoptheworldonline.com",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  topCollections:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  gstortax: "Tax",
  instagramacct: null,
  //paymentforbusiness: "razorpay",
  paymentnonbusiness: "stripe",
  phone: "+91 9820168421",
  twitteracct: null,
  CurrencyConvertionRate:0.013
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
  gakey:"UA-185043489-1",
  gtmkey:"GTM-5SJS8JL",
  topCollections:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
  domain: "test.digitechniq.in\ae",
  fullDomain: "www.test.digitechniq.in\ae",
  emailid: "care@shoptheworldonline.com",
  facebookacct: null,
  googleacct: null,
  gakey:"UA-185043489-1",
  gtmkey:"GTM-5SJS8JL",
  topCollections:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"headphone",
      keyWorld:"More HeadPhone >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/morephones.jpg",
      categoryUrl:"/c/Phone",
      category:["phone"],
      keyWorld:"More phone >>",
      

    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg",
      categoryUrl:"/c/Laptop",
      category:["hplaptop","laptop","microsoft","delllaptop","microsoftphone"],
      keyWorld:"More Laptops >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/tablets.jpg",
      categoryUrl:"/c/Tablet",
      category:"tablet",
      keyWorld:"More Tablet >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/eotcn/headphones.jpg",
      categoryUrl:"/c/HeadPhone",
      category:"HeadPhone",
      keyWorld:"More HeadPhone >>"
    },
  ],
  newProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/projectors.jpg",
      categoryUrl:"projector",
      category:"projector",
      keyWorld:"More Projectors >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/smartwatches.jpg",
      categoryUrl:"smartwatch",
      category:"smartwatch",
      keyWorld:"More Smartwatches >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/cameras.jpg",
      categoryUrl:"camera",
      category:"camera",
      keyWorld:"More Camera's >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/homeandkitchen.jpg",
      categoryUrl:"homenkitchen",
      category:"homenkitchen",
      keyWorld:"More Home & kitchen >>"
    }  

    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  featureProducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/speakers.jpg",
      categoryUrl:"speaker",
      category:"speaker",
      keyWorld:"More Speakers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/gadgets.jpg",
      categoryUrl:"gagdet",
      category:"gadget",
      keyWorld:"More Gadgets >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/printers.jpg",
      categoryUrl:"printer",
      category:"printer",
      keyWorld:"More Printers >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/monitors.jpg",
      categoryUrl:"monitor",
      category:"monitor",
      keyWorld:"More Monitors >>"
    },
    {
      imguRL:"https://images-na.ssl-images-amazon.com/images/I/915LKjLE%2BvL._SL1500_.jpg",
      categoryUrl:"networking",
      category:"networking",
      keyWorld:"More Networking >>"
    },
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
  ],
  specialproducts:[
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic4.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazon Basics>>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/SWTbasic3.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    },
    {
      imguRL:"http://shoptheworldimage.digitechniq.in/AB/STWbasic2.jpg",
      categoryUrl:"amazonbasics",
      category:"amazonbasics",
      keyWorld:"More Amazonzon Basics >>"
    } 
    // http://shoptheworldimage.digitechniq.in/eotcn/laptops.jpg
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
var  url  = window.location.href;
var tempGeoLocation = "";
console.log(url);
 
// if(url.search("/ae/") > 0)
// {
//   sessionStorage.setItem('geoLocation',"/ae")
//   tempGeoLocation="/ae";
// }
// else if(url.search("/in/") > 0 || url.search("/in") > 0 )
// {
//   sessionStorage.setItem('geoLocation',"/in")
//   tempGeoLocation="/in";

// }
// else if(url.search("/us/") > 0)
// {
//   sessionStorage.setItem('geoLocation',"")
//   tempGeoLocation="";
// }
// else
// {
//   sessionStorage.setItem('geoLocation',"")
//   tempGeoLocation="";
// }

// console.log(url.search("/ae/"));
// console.log(url.search("/in/"));


const [geoLocation, setgeoLocation] = useState(
  sessionStorage.getItem('geoLocation')
);

// const [selectedCurr, selectedCurrency] = useState("");
    if(domain == "localhost" ||  domain == "shoptheworld.store" ||  domain == "www.shoptheworld.store" || domain == "shoptheworldonline.com"  || domain == "www.shoptheworldonline.com" || domain == "test.digitechniq.in" || domain == "www.test.digitechniq.in" ){
      
      
      if(url.search("/ae") < 0 && url.search("/in") < 0 && url.search("/us") < 0 )
      {

        fetch('https://extreme-ip-lookup.com/json/')
        .then( res => res.json())
        .then(response => {
         
          
        var path = window.location.pathname;

        var IGF =  sessionStorage.getItem('isGeoLocationFixed');

        if(IGF!=true && IGF!="true")
        {

          if(response.countryCode == "IN")
          {
            
             // sessionStorage.setItem('geoLocation', "/in");
             // router.push(`/in${path}`)
              domainChange("https://www.shoptheworld.in",response.countryCode);
              // window.location.replace("https://www.shoptheworld.in");
          }
          else if(response.countryCode == "AE")
          { 
            sessionStorage.setItem('geoLocation', "/ae");
            setgeoLocation("/ae")
            tempGeoLocation= "/ae";
            // router.push(`/ae${path}`) 
            domainChange("https://www.shoptheworld.ae","UAE");
            // window.location.replace("https://www.shoptheworld.ae");
          }
          else if(response.countryCode == "US")
          {
            sessionStorage.setItem('geoLocation', "");
            tempGeoLocation= "";
          }
          else
          {
            sessionStorage.setItem('geoLocation', "");
            tempGeoLocation= "";
          }
  

        }


      })
      }
      else
      {
        if(url.search("/in"))
        {
          // setgeoLocation("/in");
          sessionStorage.setItem('geoLocation', "/in");
          tempGeoLocation="/in";
        }
        else if(url.search("/ae"))
        {
          // setgeoLocation("/ae");
          sessionStorage.setItem('geoLocation', "/ae");
          tempGeoLocation="/ae";
        }
        else
        {
          // setgeoLocation("")
          console.log("test"+geoLocation);
          sessionStorage.setItem('geoLocation', "");
          tempGeoLocation="";
        }
      }
    }
    else
    {
      console.log("test"+geoLocation);
      sessionStorage.setItem('geoLocation', "");
      tempGeoLocation="";
    }



    // const [geoLocation, setgeoLocation] = useState(
    //   sessionStorage.getItem('geoLocation')
    // );



if(tempGeoLocation == "" || tempGeoLocation == null || tempGeoLocation == undefined)
{
  if(domain == "shoptheworld.store" ||  domain == "www.shoptheworld.store" || domain == "shoptheworldonline.com" ||  domain == "www.shoptheworldonline.com" ||  domain == "localhost" )
  {
    var subDomain = "shoptheworldonline.com";

    for(var i=0;i<ListConfig.length;i++)
    {
      if(ListConfig[i].domain == subDomain || ListConfig[i].fullDomain == subDomain)
      {
          selectedConfig =  ListConfig[i];
          console.log(selectedConfig);
      }
    }
  }
  else
  {
    for(var i=0;i<ListConfig.length;i++)
    {
      if(ListConfig[i].domain == domain || ListConfig[i].fullDomain == domain)
      {
          selectedConfig =  ListConfig[i];
          console.log(selectedConfig);
 
      }
    }
  }

}
else
{
  var subDir = null;
  if(tempGeoLocation == "/in")
  {
    subDir="shoptheworld.in";
  }
  else if(tempGeoLocation == "/ae")
  {
    subDir="shoptheworld.ae";
  }
  else if(tempGeoLocation == "/us")
  {
    subDir="shoptheworldonline.com";
  }
  else
  {
    subDir="shoptheworldonline.com";
  }

  
  for(var i=0;i<ListConfig.length;i++)
  {
    if(ListConfig[i].domain == subDir || ListConfig[i].fullDomain == subDir)
    {
        selectedConfig =  ListConfig[i];
        console.log(selectedConfig);
      }
  }
  
}



const continueTo=()=>{
  sessionStorage.setItem('isGeoLocationFixed', true);
  setgeoLocation("")
  tempGeoLocation= "";
}

const moveTo=(country)=>{


  sessionStorage.setItem('isGeoLocationFixed', true);
  if(country == "IN")
  {
    setgeoLocation("/in")
    tempGeoLocation= "/in";
    window.location.replace("https://www.shoptheworld.in");
  }
  else if(country == "AE")
  {
    setgeoLocation("/ae")
    tempGeoLocation= "/ae";
    window.location.replace("https://www.shoptheworld.ae");
  }


}

const domainChange =(domain,country)=>{

var IGF =  sessionStorage.getItem('isGeoLocationFixed');

if(IGF!=true && IGF!="true")
{

  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='custom-ui'>
          <h3>Shop in Indian Rupees (INR)?</h3>
          <h5>You're shopping for items shipping to India. Currencies are available.</h5>
          <h5>switch to INR ?</h5>
          <button  onClick={() => {
              continueTo();
              onClose();
            }}>
          No, Thanks</button>
          <button
            onClick={() => {
              moveTo(country);
              onClose();
            }}
          >
            Change Currency!
          </button>
        </div>
      );
    }
  });


//   Shop in Indian Rupees (INR)?

// You're shopping for items shipping to India. Additional languages and currencies are available.

// Translations and currency conversions are provided for your

// convenience only. Learn more

  // confirmAlert({
  //   title: 'Shop the world',
  //   message: 'Hi, are you continue with shoptheworldonline.com',
  //   buttons: [
  //     {
  //       label: 'Yes',
  //       onClick: () => {
  //         sessionStorage.setItem('isGeoLocationFixed', true);
  //         setgeoLocation("")
  //         tempGeoLocation= "";
  //       }
  //     },
  //     {
  //       label: 'No',
  //       onClick: () => {
  //         sessionStorage.setItem('isGeoLocationFixed', true);
  //         if(country == "IN")
  //         {
  //           setgeoLocation("/in")
  //           tempGeoLocation= "/in";
  //           window.location.replace("https://www.shoptheworld.in");
  //         }
  //         else if(country == "AE")
  //         {
  //           setgeoLocation("/ae")
  //           tempGeoLocation= "/ae";
            
  //           window.location.replace("https://www.shoptheworld.ae");
  //         }

  //       }
  //     }
  //   ]
  // });
}
}



// selectedCurrency(selectedConfig);

// console.log(selectedConfig);

const [selectedCurr, selectedCurrency] = useState(selectedConfig);
 
  const currencyContext = {
    selectedCurr,
    selectedCurrency,
    selectedConfig
  };

  const {value} = props

  return (
      <Context.Provider value={{
          state:selectedConfig,
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
