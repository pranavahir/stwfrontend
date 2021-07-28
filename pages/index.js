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
 

const Fashion = () => {
const router = useRouter();


  useEffect(()=>{
    // setTimeout(()=>{
    //   router.push("/page/privacy_policy")
    // },30)
    var domain = window.location.hostname;
    
    if(domain == "shoptheworlds.com" || domain == "shoptheworldonline.com" || domain == "test.digitechniq.in"){
          fetch('https://extreme-ip-lookup.com/json/')
        .then( res => res.json())
        .then(response => {
        //  console.log("Country is : ", response);

        console.log(response.countryCode);
        if(response.countryCode == "IN")
        {
          sessionStorage.setItem('geoLocation', "/in");
          router.push("/in/")
        }
        else if(response.countryCode == "AE")
        {
          sessionStorage.setItem('geoLocation', "/ae");
          router.push("/ae/")
        }
        else if(response.countryCode == "US")
        {
          sessionStorage.setItem('geoLocation', "/us");
          router.push("/us/")
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



  },[])


  return (
    <>
      <Helmet>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
        <link data-react-helmet="true" href={favicon?favicon:''} sizes="32x32" type="png" rel="icon"/>
             </Helmet>
      {/* <ModalComponent /> */}
      <HeaderOne logoName={'logo.png'} topClass="top-header" />
      <Banner /> 
      <CollectionBanner />
      <Paragraph title="title1 section-t-space" inner="title-inner1" hrClass={false} />
      <TopCollection noTitle="null" backImage={true} type="fashion" title="Explore Our Top Collection" subtitle="special offer"  productSlider={Product4} designClass="ratio_asos" noSlider="false" cartClass="cart-info cart-wrap" />
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