import React, { useState, useEffect, useRef, useContext } from 'react';
import ProductTab from '../common/product-tab';
import Service from '../common/service'
import NewProduct from '../../shop/common/newProduct';
import Slider from 'react-slick';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ImageZoom from '../common/image-zoom';
import DetailsWithPrice from '../common/detail-price';

import Filter from '../common/filter';
import { Container, Row, Col, Media } from 'reactstrap';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

const GET_SINGLE_PRODUCTS = gql`
    query product ($id:Int!) {
        product (id:$id) {
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
            price 
            conversionrate
            frieghtrate
            duty
            taxes
            fees
            margin
      }
      }
    }
`;

const LeftSidebarPage = ({ pathId }) => {

    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
        variables: {
            id: parseInt(pathId)
        }
    });

    const [state, setState] = useState({ nav1: null, nav2: null });
    const slider1 = useRef();
    const slider2 = useRef();

    var products = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true
    };
    var productsnav = {
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        focusOnSelect: true
    };

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        }); 
    }, [data]);

    const { nav1, nav2 } = state;

    const filterClick = () => {
        document.getElementById("filter").style.left = "-15px";
    }

    const changeColorVar = (img_id) => {
        slider2.current.slickGoTo(img_id)
    }

    return (
        <section className="">
            <div className="collection-wrapper">
                <Container>
                    <Row>
                        <Col sm="3" className="collection-filter">
                            <Filter />
                            <Service />
                            {/* <!-- side-bar single product slider start --> */}
                            <NewProduct />
                            {/* <!-- side-bar single product slider end --> */}
                        </Col>
                        <Col lg="9" sm="12" xs="12" >
                            <Container fluid={true}>
                                <Row>
                                    <Col cl="12">
                                        <div className="filter-main-btn mb-2">
                                            <span onClick={filterClick} className="filter-btn" >
                                                <i className="fa fa-filter" aria-hidden="true"></i> filter</span>
                                        </div>
                                    </Col>
                                </Row>
                                {(!data || !data.product || data.product.length === 0 || loading) ?
                                    'loading'
                                    :
                                    <Row>
                                        <Col lg="6" className="product-thumbnail">
                                        <Slider {...products} asNavFor={nav2} ref={slider => (slider1.current = slider)} className="product-slick">
{/*                                     
                                        <Media src={`${data.product.images[0].mainimageurl}`}   className="img-fluid image_zoom_cls-0" />
                                                {data.product.variants.length > 0 ?
                                                    data.product.images.map((vari, index) =>
                                                        <div key={index}>
                                                            <ImageZoom image={vari} />
                                                        </div>
                                                    ) :
                                                    data.product.images.map((vari, index) =>
                                                        <div key={index}>
                                                            <ImageZoom image={vari} />
                                                        </div>
                                                    )
                                                } */}
                                                {data.product.images[0].mainimageurl?
                                                    <div>
                                                          <Media src={`${data.product.images[0].mainimageurl}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                                    {data.product.images[0].additionalimage1?
                                                    <div>
                                                          <Media src={`${data.product.images[0].additionalimage1}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                                    {data.product.images[0].additionalimage2?
                                                    <div>
                                                          <Media src={`${data.product.images[0].additionalimage2}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                                    {data.product.images[0].additionalimage3?
                                                    <div>
                                                          <Media src={`${data.product.images[0].additionalimage3}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                                    {data.product.images[0].additionalimage4?
                                                    <div>
                                                          <Media src={`${data.product.images[0].additionalimage4}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                                    {data.product.images[0].additionalimage5?
                                                    <div>
                                                          <Media src={`${data.product.images[0].additionalimage5}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                            </Slider>
                                            <Slider className="slider-nav"
                                                {...productsnav}
                                                asNavFor={nav1}
                                                ref={slider => (slider2.current = slider)}
                                            >

                                                {data.product.images[0].mainimageurl?
                                                    <div>
                                                          <Media src={`${data.product.images[0].mainimageurl}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                                    {data.product.images[0].additionalimage1?
                                                    <div>
                                                          <Media src={`${data.product.images[0].additionalimage1}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                                    {data.product.images[0].additionalimage2?
                                                    <div>
                                                          <Media src={`${data.product.images[0].additionalimage2}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                                    {data.product.images[0].additionalimage3?
                                                    <div>
                                                          <Media src={`${data.product.images[0].additionalimage3}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                                    {data.product.images[0].additionalimage4?
                                                    <div>
                                                          <Media src={`${data.product.images[0].additionalimage4}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}
                                                    {data.product.images[0].additionalimage5?
                                                    <div>
                                                          <Media src={`${data.product.images[0].additionalimage5}`}   className="img-fluid" />
                                                  </div>
                                                    :
                                                    ''}


                                          
                                          
                                                {/* {data.product.variants ?
                                                    data.product.images.map((vari, index) =>
                                                        <div key={index}>
                                                            <Media src={`${vari.src}`} key={index} alt={vari.alt} className="img-fluid" />
                                                        </div>
                                                    ) 
                                                    :
                                                    ''} */}
                                            </Slider>
                                        </Col>
                                        <Col lg="6" className="rtl-text">
                                            <DetailsWithPrice symbol={symbol} item={data.product} changeColorVar={changeColorVar} navOne={state.nav1}  />
                                        </Col>
                                    </Row>
                                }

                            </Container>
                            <ProductTab selectedItem={data} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default LeftSidebarPage;