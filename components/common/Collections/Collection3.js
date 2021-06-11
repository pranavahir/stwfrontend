import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ProductItems from '../product-box/ProductBox1';
import { Row, Col, Container, Media } from 'reactstrap';
import CartContext from '../../../helpers/cart';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import PostLoader from '../PostLoader';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import search from '../../../public/assets/images/empty-search.jpg'
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

const GET_PRODUCTS = gql`
    query  products($type:String!,$indexFrom:Int! ,$limit:Int!,$color:String!,$brand:[String!]! ,$priceMax:Int!,$priceMin:Int!,$keyword:String!,$country:String!,$panel:String!,$promoflag:[String!]) {
        products (type: $type ,indexFrom:$indexFrom ,limit:$limit ,color:$color ,brand:$brand  ,priceMax:$priceMax,priceMin:$priceMin,keyword:$keyword,country:$country,panel:$panel,promoflag:$promoflag){
  total(keyword:$keyword,type:$type){
            total
        }
        hasMore(limit:$limit,indexFrom:$indexFrom,keyword:$keyword,type:$type){
            seqid
        }
        items(limit:$limit,indexFrom:$indexFrom,keyword:$keyword,type:$type){
            seqid
            sku
            title
            description
            bullepoints
            brandid
            categoryid
            isvisible
            isactive
            warehouseid
            metatagdescription
            seokeywords
            weight
            height
            width
            length
      
            fromcurrency
            asin
      images{
            productid
            mainimageurl
            additionalimage1
            additionalimage2
            additionalimage3
            additionalimage4
            additionalimage5
      }
      variants(country:$country,panel:$panel)
      {
            variantid
            sku
            productid
            color
            size
            processor
            graphics
            discount
            price 
            daystoship
            pwfee
            purchasetax
            conversionrate
            frieghtrate
            duty
            taxes
            fees
            margin
      }
        }

        }
    }
`;

const TopCollection = ({ type, title, subtitle, designClass, noSlider, cartClass, productSlider, titleClass, noTitle, innerClass, inner, backImage }) => {

    const context = useContext(CartContext)
    const contextWishlist = useContext(WishlistContext);
    const comapreList = useContext(CompareContext);
    const quantity = context.quantity;
    const [delayProduct,setDelayProduct] = useState(true)

    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const IsRight = curContext.state.IsRight;
    const country = curContext.state.country;
    const panel = curContext.state.panel;

    // var { loading, data } =  useQuery(GET_PRODUCTS, {
    //     variables: {
    //         type: type,
    //         indexFrom: 0,
    //         limit: 8
    //     }
    // });
    
    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: "",
            priceMax: 10,
            priceMin: 1,
            color: "red",
            brand: "max",
            indexFrom: 0,
            limit: 8,
            keyword:"",
            country:country,
            panel:panel,
            promoflag:['iphone','samsung','oneplus','google']
        }
    });
    useEffect(() => {
        if (data === undefined) {
            noSlider === false;
        } else {
            noSlider === true;
        }
        
        setTimeout(() => {
                (false)  
        }, 5000);

    }, [delayProduct])
    return (
        <>
            <section className={designClass}>
                {noSlider ?
                    <Container>
                        <Row>
                            <Col>
                                {
                                    noTitle === "null" ?
                                        ""
                                        :
                                        <div className={innerClass}>
                                            {subtitle ? <h4>{subtitle}</h4> : ''}
                                            <h2 className={inner}>{title}</h2>
                                            {titleClass ?
                                                <hr role="tournament6" />
                                                :
                                                <div className="line"></div>
                                            }
                                        </div>
                                }

                                {data && data.products.total.total>0 ?
                                                                
                                <Slider {...productSlider} className="product-m no-arrow">
                                    
                                        
                                        {data && data.products.items.map((product, i) =>
                                            <div key={i}>
                                                <ProductItems product={product}
                                                    title={title}
                                                    addWishlist={() => contextWishlist.addToWish(product)}
                                                    addCart={() => context.addToCart(product, quantity)}
                                                    addCompare={() => comapreList.addToCompare(product)}
                                                    cartClass={cartClass} backImage={backImage} />
                                            </div>
                                            )}
                                </Slider>

                                :
                                <div className="row mx-0 margin-default">
                                <div className="col-xl-3 col-lg-4 col-6">

                                    <PostLoader />
                                </div>
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <PostLoader />
                                </div>
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <PostLoader />
                                </div>
                                <div className="col-xl-3 col-lg-4 col-6">
                                    <PostLoader />
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
                                    
                                    
                                    <div className="row margin-default">
                                        <div className="col-xl-3 col-lg-4 col-6">
                                            <PostLoader />
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                            <PostLoader />
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                            <PostLoader />
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-6">
                                            <PostLoader />
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

            </section>
        </>
    )
}


export default TopCollection;