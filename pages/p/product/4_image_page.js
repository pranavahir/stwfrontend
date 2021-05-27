import React, { useState, useContext } from 'react';
import imageOne from '../../../public/assets/images/fashion/pro/001.jpg';
import imageTwo from '../../../public/assets/images/fashion/pro/002.jpg';
import imageThree from '../../../public/assets/images/fashion/pro/003.jpg';
import imageFour from '../../../public/assets/images/fashion/pro/004.jpg';
import DetailsWithPrice from '../common/detail-price';
import { Col, Container, Row } from 'reactstrap';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import FilterContext from '../../../helpers/filter/FilterContext';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

const GET_SINGLE_PRODUCTS = gql`
    query product ($asin:String!) {
        product (asin:$asin) { seqid
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
            brandname
            categoryvalue
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
         specifications
      {
           seqid
            productid
            upc
            mpn
            partnumber
            isbn
            screendisplaysize
            maxscreenresolution
            processor
            ram
            memoryspeed
            harddrive
            graphiccoprocessor
            chipsetbrand
            carddescription
            wirelesstype
            numberofusb2port
            numberofusb3port
            avgbatterylife
            series
            operatingsystem
            processorbrand
            processorcount
            computermemorytype
            flashmemorysize
            hardriveinterface
            harddriverotationalspeed
            batteries
            itemdimension
            productdimension
            opticalzoom
            publisher
            size

       }
      variants
      {
            variantid
            sku
            productid
            color
            size
            processor
            graphics
            discount
            conversionrate
                frieghtrate
                duty
                taxes
                fees
                margin
            price 
      }

        }
    }
`;

const FourImagePage = () => {

    const context = useContext(FilterContext);
    const addToCart = context.addToCart;
    const [state, setState] = useState({ nav1: null, nav2: null });

    var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
        variables: {
            asin: "1"
        },
    });


    const addToCartUnsafe = (product) => {
        toast.success("Item Added to Compare");
        dispatch({ type: 'ADD_TO_COMPARE', payload: product })
    }
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const { nav1, nav2 } = state;

    return (
        <section>
            <div className="collection-wrapper ratio_asos">
                <Container>
                    <Row>
                        <Col lg="6">
                            <Row className="product_image_4">
                                <Col xs="6">
                                    <div>
                                        <img src={imageOne} alt=""
                                            className="img-fluid blur-up lazyload bg-img" />
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div>
                                        <img src={imageTwo} alt=""
                                            className="img-fluid blur-up lazyload bg-img " />
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div>
                                        <img src={imageThree} alt=""
                                            className="img-fluid blur-up lazyload bg-img" />
                                    </div>
                                </Col>
                                <Col xs="6">
                                    <div>
                                        <img src={imageFour} alt=""
                                            className="img-fluid blur-up lazyload bg-img" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        {
                            data  ?
                                <Col lg="6" className="rtl-text">
                                    <DetailsWithPrice symbol={symbol} item={data.product} navOne={nav1} addToCartClicked={addToCart} BuynowClicked={addToCartUnsafe} />
                                </Col>
                                : 'false'
                        }

                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default FourImagePage;

