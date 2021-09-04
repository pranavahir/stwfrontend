import Head from 'next/head';
import React from 'react';
import Banner from './layouts/Fashion/Components/Banner'
import CollectionBanner from './layouts/Fashion/Components/Collection-Banner';
import TopCollection from '../components/common/Collections/Collection3';
import Parallax from './layouts/Fashion/Components/Parallax';
import SpecialProducts from '../components/common/Collections/TabCollection1';
import ServiceLayout from '../components/common/Service/service1';
import Blog from '../components/common/Blog/blog1';
import Instagram from '../components/common/instagram/instagram1';
import LogoBlock from '../components/common/logo-block';
import FooterOne from '../components/footers/footer-one';
import HeaderOne from '../components/headers/header-one';
import { withApollo } from '../helpers/apollo/apollo';
import { Product4 } from '../services/script';
import Paragraph from '../components/common/Paragraph';
import Helmet from 'react-helmet';
import favicon from '../public/assets/images/favicon/1.png'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {useContext} from 'react';
import ModalComponent from '../components/common/Modal';
import { CurrencyContext } from '../helpers/Currency/CurrencyContext';

const Fashion = () => {
const router = useRouter();


  useEffect(()=>{
 
  
    },[])
    const url = window.location;
    var domain = window.location.hostname;
    var path = window.location.pathname
    const curContext = useContext(CurrencyContext);
    const country = curContext.state.country;
    const metadesc = country +"'s best online store for Mobiles, Fashion, Electronics, Home, Kitchen, Grocery, Sporting goods, Health, Wellness Care and more only at Shop The World! Find the largest collection of products at the lowest prices &amp; fast shipping worldwide.";
    const metatitle =  'Online Shopping Site in ' + country + ' for Mobiles, Electronics, Fashion, Home, Kitchen, Health, Wellness, Beauty &amp; More'; 
    if(domain == "localhost" || domain == "shoptheworld.store" || domain == "www.shoptheworld.store" || domain == "wwww.shoptheworld.store" || domain == "shoptheworldonline.com" || domain == "www.shoptheworldonline.com" || domain == "test.digitechniq.in"){
          fetch('https://extreme-ip-lookup.com/json/')
        .then( res => res.json())
        .then(response => {
         console.log("Country is : ", response);
         console.log(response.countryCode);

        if(response.countryCode == "IN")
        {
          // sessionStorage.setItem('geoLocation', "/in");
          // window.location.replace("https://www.shoptheworld.in"); 
          
        }
        else if(response.countryCode == "AE")
        {
          // sessionStorage.setItem('geoLocation', "/ae");
          // window.location.replace("https://www.shoptheworld.ae");
        }
        else if(response.countryCode == "US")
        {
          sessionStorage.setItem('geoLocation', "");
        }
        else
        {
          sessionStorage.setItem('geoLocation', "");
        }
      })
      .catch((data, status) => {
        console.log('Request failed:', data);
      });
    }
    else
    {
      sessionStorage.setItem('geoLocation', "");
    }
   
  return (
    <>
      <Head>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
        <link data-react-helmet="true" href={favicon?favicon:''} sizes="32x32" type="png" rel="icon"/>
        <title> {metatitle}</title>
        <meta name="description" content={metadesc}/>
        <meta property="og:title" content={metatitle}/>
        <meta property="og:url" content={url.href}/>
        <meta property="og:description" content={metadesc}/>
        <meta property="og:image" content="https://shoptheworld.store/assets/images/icon/logo.png"/>    
        </Head>
      {/* <ModalComponent /> */}
      <HeaderOne logoName={'logo.png'} topClass="top-header" />
      <Banner /> 
      <CollectionBanner />
      <Paragraph title="title1 section-t-space" inner="title-inner1" hrClass={false} />
      <TopCollection  noTitle="null" backImage={true} type="fashion" title="Explore Our Top Collection" subtitle="special offer"  productSlider={Product4} designClass="ratio_asos" noSlider="false" cartClass="cart-info cart-wrap" />
      <Parallax />
      <SpecialProducts type="fashion" backImage={true} productSlider={Product4} line={true} title="title1" inner="title-inner1"  designClass="ratio_asos" noSlider="false" cartClass="cart-info cart-wrap" /> 
      <ServiceLayout sectionClass="border-section small-section" />
    
      <Blog type="Electronics" title="title1" inner="title-inner1" />
      {/* <Instagram type="fashion"/> */}
      <div className="section-b-space">
      <LogoBlock />
      </div>

   

      <FooterOne logoName={'logo.png'} />
    </>
  )
}

export default withApollo(Fashion);