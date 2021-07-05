import React, { useState, useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Slider from 'react-slick';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItem from '../product-box/ProductBox1';
import CartContext from '../../../helpers/cart/index'
import { Container, Row, Col, Media } from 'reactstrap';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import PostLoader from '../PostLoader';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import emptySearch from '../../../public/assets/images/empty-search.jpg';
import AutoFitImage from 'react-image-autofit-frame';
import FilterContext from '../../../helpers/filter/FilterContext';
import { useRouter } from 'next/router';

// const GET_PRODUCTS = gql`
//     query  products($type:String!,$indexFrom:Int! ,$limit:Int!,$color:String!,$brand:[String!]! ,$priceMax:Int!,$priceMin:Int!,$keyword:String!,$country:String!,$panel:String!,$promoflag:String!) {
//         products (type: $type ,indexFrom:$indexFrom ,limit:$limit ,color:$color ,brand:$brand  ,priceMax:$priceMax,priceMin:$priceMin,keyword:$keyword,country:$country,panel:$panel,promoflag:$promoflag){
//         total(keyword:$keyword,type:$type,promoflag:$promoflag){
//             total
//         }
//         hasMore(limit:$limit,indexFrom:$indexFrom,keyword:$keyword,type:$type,promoflag:$promoflag){
//             seqid
//         }
//         items(limit:$limit,indexFrom:$indexFrom,keyword:$keyword,type:$type,promoflag:$promoflag){
//             seqid
//             sku
//             title
//             description
//             bullepoints
//             brandid
//             categoryid
//             isvisible
//             isactive
//             warehouseid
//             metatagdescription
//             seokeywords
//             weight
//             height
//             width
//             length
//             fromcurrency
//             asin
//       images
//       {
//             productid
//             mainimageurl
//             additionalimage1
//             additionalimage2
//             additionalimage3
//             additionalimage4
//             additionalimage5
//       }
//       variants(country:$country,panel:$panel)
//       {
//             variantid
//             sku
//             productid
//             color
//             size
//             processor
//             graphics
//             discount
//             price 
//             daystoship
//             pwfee
//             purchasetax
//             conversionrate
//             frieghtrate
//             duty
//             taxes
//             fees
//             margin
//             quantity
//             domesticfreight
//       }
//         }

//         }
//     }
// `;

const SpecialProducts = ({ type, fluid, designClass, cartClass,noSlider,innerClass,subtitle,titleClass, heading, productSlider, noTitle, title, inner, line, hrClass, backImage }) => {
    const [activeTab, setActiveTab] = useState(type);
    const context = useContext(CartContext);
    const wishListContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    const quantity = context.quantity;
     
    const symbol = curContext.state.symbol;
    const IsRight = curContext.state.IsRight;
    const country = curContext.state.country;
    const panel = curContext.state.panel;
    const featureProducts = curContext.state.featureProducts;
    const newProducts = curContext.state.newProducts;
    const specialproducts = curContext.state.specialproducts;
    const filterContext = useContext(FilterContext);
    const router = useRouter();
    

    const loaderStyle={
        margin: "auto",
        width: "60%",
 
        padding: "10px",
    }
    const linkStyle ={
        fontSize:12,
        cursor: 'pointer',
        objectFit: "cover",
        width: "100%",
        height: "100%",
        border:"1px #acacac solid" 
        
    }

    const lableStyle={
        backgroundColor:"red",
        fontSize:"15px",
        color:"white",
        marginRight: "43px",
        marginBottom: "29px"
    }

    const getURL = (data) => {
        filterContext.setselectedKeyword("");
        filterContext.setSelectedCategory("");
        filterContext.setSelectedPromaflag(data.category);
        router.push(`/shop/six_grid?&brand=&color=&size=&minPrice=&maxPrice=&promoflag=${data.category}`)
    }
    // var { loading, data } = useQuery(GET_PRODUCTS, {
    //     variables: {
    //         type: "",
    //         priceMax: 10,
    //         priceMin: 1,
    //         color: "red",
    //         brand: "max",
    //         indexFrom: 0,
    //         limit: 8,
    //         keyword:"",
    //         country:country,
    //         panel:panel,
    //         promoflag:"highlight2"

    //     }
    // });
 

    
    
    return (
        <div>
            <section className={designClass}>
                <Container fluid={fluid} >
                    {
                        noTitle ?
                            ''
                            :
                            <div className={title}>
                                <h6>{heading}</h6>
                                {/* exclusive products */}
                                <h4 className={inner}>special products</h4>
                                {
                                    line ?
                                        <div className="line"></div>
                                        :
                                        hrClass ?
                                            <hr role="tournament6"></hr>
                                            : ''
                                }
                            </div>
                    }

                    <Tabs className="theme-tab">
                        <TabList className="tabs tab-title">
                            <Tab className={activeTab == type ? 'active' : ''}  key={type} onClick={() => setActiveTab(type)}>NEW ARRIVAL</Tab>
                            <Tab className={activeTab == 'FEATURED' ? 'active' : ''} key="FEATURED" onClick={() => setActiveTab('FEATURED')}>FEATURED </Tab>
                            <Tab className={activeTab == 'SPECIAL' ? 'active' : ''} key="SPECIAL" onClick={() => setActiveTab('SPECIAL')}>SPECIAL</Tab>
                        </TabList>

                        <TabPanel key={type} >
                            <Row>
                                {(!newProducts || newProducts.length === 0 ) ?
                                    (newProducts &&  newProducts.length === 0) ?
                                        <Col xs="12">
                                            <div>
                                                <div className="col-sm-12 empty-cart-cls text-center">
                                                    <Media src={emptySearch} className="img-fluid mb-4 mx-auto" alt="" />
                                                    <h3><strong>Your Cart is Empty</strong></h3>
                                                    <h4>Explore more shortlist some items.</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        :
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                    <div className="row mx-0 margin-default">
                                            <div className="col-xl-12 col-lg-12 col-12">
                                            <div className="typography_section"> 
                                                <div className="typography-box"> 
                                                    <div  className="custom-load typo-content loader-typo" >
                                                        
                                                         <div className="pre-loader"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                    :

                            <div className={designClass}>
                            {noSlider ?
                            <Container>
                                <Row>
                                    <Col>
                                        {newProducts && newProducts.length>0 ?
                                        <Slider {...productSlider} className="product-m no-arrow">
                                                {newProducts && newProducts.slice(0, 10).map((collection, index) =>
                                                    <div style={linkStyle} className="front" key={index} >
                                                        <AutoFitImage frameWidth="200px" imgSize="contain" frameHeight="160px" imgSrc={collection.imguRL}/>
                                                        <center style={lableStyle}><a style={{color:"white"}} href="#" onClick={() => getURL(collection)} > {collection.keyWorld} </a></center> 
                                                    </div>)}
                                        </Slider>
                                        :
                                        <div className="row mx-0 margin-default">
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        </div>
                                        }
                                    </Col>
                                </Row>
                            </Container>
                    :
                    <>
                        {title ? <div className="title1 title-gradient  section-t-space">
                            <h4>{subtitle}</h4>
                            <h2 className="title-inner1">{title}</h2>
                            <hr role="tournament6" />
                        </div> : ''}
                        <Container>
                            <Row className="margin-default">
                                {(!data || !data.products || !data.products.items || !data.products.items.length === 0 || !loading) ?
                                    
                                    <div className="top-banner-wrapper" style={loaderStyle}> 
                                    <div className="row mx-0 margin-default">
                                            <div className="col-xl-12 col-lg-12 col-12">
                                            <div className="typography_section"> 
                                                <div className="typography-box"> 
                                                    <div  className="custom-load typo-content loader-typo" >
                                                        
                                                         <div className="pre-loader"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                    :
                                    data && data.products.items.slice(0, 8).map((product, index) =>
                                        <Col xl="3" sm="6" key={index}>
                                            <div>
                                                <ProductItems product={product} backImage={backImage}
                                                    addCompare={() => comapreList.addToCompare(product)}
                                                    addWishlist={() => contextWishlist.addToWish(product)}
                                                    title={title}
                                                    cartClass={cartClass}
                                                    addCart={() => context.addToCart(product, quantity)} key={index} />
                                            </div>
                                        </Col>
                                    )
                                    
                                }
                            </Row>
                        </Container>
                    </>
                }

            </div>

                                    
                                     
                                   
                                     }
                            </Row>

                        </TabPanel>
                        <TabPanel key="FEATURED">
                        <Row>
                                {(!featureProducts || featureProducts.length === 0 ) ?
                                    (featureProducts &&  featureProducts.length === 0) ?
                                        <Col xs="12">
                                            <div>
                                                <div className="col-sm-12 empty-cart-cls text-center">
                                                    <Media src={emptySearch} className="img-fluid mb-4 mx-auto" alt="" />
                                                    <h3><strong>Your Cart is Empty</strong></h3>
                                                    <h4>Explore more shortlist some items.</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        :
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                    <div className="row mx-0 margin-default">
                                            <div className="col-xl-12 col-lg-12 col-12">
                                            <div className="typography_section"> 
                                                <div className="typography-box"> 
                                                    <div  className="custom-load typo-content loader-typo" >
                                                        
                                                         <div className="pre-loader"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                    :

                            <div className={designClass}>
                            {noSlider ?
                            <Container>
                                <Row>
                                    <Col>
                                        {featureProducts && featureProducts.length>0 ?
                                        <Slider {...productSlider} className="product-m no-arrow">
                                                {featureProducts && featureProducts.slice(0, 10).map((collection, index) =>
                                                    <div style={linkStyle} className="front" key={index} >
                                                        <AutoFitImage frameWidth="200px" imgSize="contain" frameHeight="160px" imgSrc={collection.imguRL}/>
                                                        <center style={lableStyle}><a style={{color:"white"}} href="#" onClick={() => getURL(collection)} > {collection.keyWorld} </a></center> 
                                                    </div>)}
                                        </Slider>
                                        :
                                        <div className="row mx-0 margin-default">
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        </div>
                                        }
                                    </Col>
                                </Row>
                            </Container>
                    :
                    <>
                        {title ? <div className="title1 title-gradient  section-t-space">
                            <h4>{subtitle}</h4>
                            <h2 className="title-inner1">{title}</h2>
                            <hr role="tournament6" />
                        </div> : ''}
                        <Container>
                            <Row className="margin-default">
                                {(!data || !data.products || !data.products.items || !data.products.items.length === 0 || !loading) ?
                                    
                                    <div className="top-banner-wrapper" style={loaderStyle}> 
                                    <div className="row mx-0 margin-default">
                                            <div className="col-xl-12 col-lg-12 col-12">
                                            <div className="typography_section"> 
                                                <div className="typography-box"> 
                                                    <div  className="custom-load typo-content loader-typo" >
                                                        
                                                         <div className="pre-loader"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                    :
                                    data && data.products.items.slice(0, 8).map((product, index) =>
                                        <Col xl="3" sm="6" key={index}>
                                            <div>
                                                <ProductItems product={product} backImage={backImage}
                                                    addCompare={() => comapreList.addToCompare(product)}
                                                    addWishlist={() => contextWishlist.addToWish(product)}
                                                    title={title}
                                                    cartClass={cartClass}
                                                    addCart={() => context.addToCart(product, quantity)} key={index} />
                                            </div>
                                        </Col>
                                    )
                                    
                                }
                            </Row>
                        </Container>
                    </>
                }

            </div>

                                    
                                     
                                   
                                     }
                            </Row>

                        </TabPanel>
                        <TabPanel key="SPECIAL">
                        <Row>
                                {(!specialproducts || specialproducts.length === 0 ) ?
                                    (specialproducts &&  specialproducts.length === 0) ?
                                        <Col xs="12">
                                            <div>
                                                <div className="col-sm-12 empty-cart-cls text-center">
                                                    <Media src={emptySearch} className="img-fluid mb-4 mx-auto" alt="" />
                                                    <h3><strong>Your Cart is Empty</strong></h3>
                                                    <h4>Explore more shortlist some items.</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        :
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                    <div className="row mx-0 margin-default">
                                            <div className="col-xl-12 col-lg-12 col-12">
                                            <div className="typography_section"> 
                                                <div className="typography-box"> 
                                                    <div  className="custom-load typo-content loader-typo" >
                                                        
                                                         <div className="pre-loader"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                    :

                            <div className={designClass}>
                            {noSlider ?
                            <Container>
                                <Row>
                                    <Col>
                                        {`specialproducts` && specialproducts.length>0 ?
                                        <Slider {...productSlider} className="product-m no-arrow">
                                                {specialproducts && specialproducts.slice(0, 10).map((collection, index) =>
                                                    <div style={linkStyle} className="front" key={index} >
                                                        <AutoFitImage frameWidth="200px" imgSize="contain" frameHeight="160px" imgSrc={collection.imguRL}/>
                                                        <center style={lableStyle}><a style={{color:"white"}} href="#" onClick={() => getURL(collection)} > {collection.keyWorld} </a></center> 
                                                    </div>)}
                                        </Slider>
                                        :
                                        <div className="row mx-0 margin-default">
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                        <div className="top-banner-wrapper" style={loaderStyle}> 
                                            <div className="row mx-0 margin-default">
                                                    <div className="col-xl-12 col-lg-12 col-12">
                                                    <div className="typography_section"> 
                                                        <div className="typography-box"> 
                                                            <div  className="custom-load typo-content loader-typo" >
                                                                
                                                                <div className="pre-loader"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                        </div>
                                        </div>
                                        }
                                    </Col>
                                </Row>
                            </Container>
                    :
                    <>
                        {title ? <div className="title1 title-gradient  section-t-space">
                            <h4>{subtitle}</h4>
                            <h2 className="title-inner1">{title}</h2>
                            <hr role="tournament6" />
                        </div> : ''}
                        <Container>
                            <Row className="margin-default">
                                {(!data || !data.products || !data.products.items || !data.products.items.length === 0 || !loading) ?
                                    
                                    <div className="top-banner-wrapper" style={loaderStyle}> 
                                    <div className="row mx-0 margin-default">
                                            <div className="col-xl-12 col-lg-12 col-12">
                                            <div className="typography_section"> 
                                                <div className="typography-box"> 
                                                    <div  className="custom-load typo-content loader-typo" >
                                                        
                                                         <div className="pre-loader"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                    :
                                    data && data.products.items.slice(0, 8).map((product, index) =>
                                        <Col xl="3" sm="6" key={index}>
                                            <div>
                                                <ProductItems product={product} backImage={backImage}
                                                    addCompare={() => comapreList.addToCompare(product)}
                                                    addWishlist={() => contextWishlist.addToWish(product)}
                                                    title={title}
                                                    cartClass={cartClass}
                                                    addCart={() => context.addToCart(product, quantity)} key={index} />
                                            </div>
                                        </Col>
                                    )
                                    
                                }
                            </Row>
                        </Container>
                    </>
                }

            </div>

                                    
                                     
                                   
                                     }
                            </Row>

                        </TabPanel>
                    </Tabs>
                </Container>
            </section>
        </div>
    )
}

export default SpecialProducts;