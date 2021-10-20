import React, { useContext, useState, useRef ,useEffect} from 'react';
import { Container, Row, Col ,Media} from 'reactstrap';
import DetailsWithPrice from '../common/detail-price';
import Slider from 'react-slick';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import CartContext from '../../../helpers/cart';
import ImageZoom from '../common/image-zoom';
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

const LeftImagePage = () => {

    const context = useContext(CartContext);
    const addToCart = context.addToCart;
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const IsRight = curContext.state.IsRight;
    let leftSymbol=null;
    let rightSymbol = null;
    if(IsRight ==true)
    {
        rightSymbol = symbol;
    }
    else
    {
        leftSymbol = symbol;
    }
    const [state, setState] = useState({ nav1: null, nav2: null });
    const slider1 = useRef();
    const slider2 = useRef();
    var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
        variables: {
            asin: "1"
        }
    });
    var products = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true,
        infinite: false
    };
    var productsnav = {
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        vertical:true,
        focusOnSelect: true,
        infinite: false
    };

    useEffect(() => {
        setState({
            nav1: slider1.current,
            nav2: slider2.current
        });
    }, [data]);

    const changeColorVar = (img_id) => {
        slider2.current.slickGoTo(img_id)
    }

    const { nav1, nav2 } = state;

    return (
        <section>
            <div className="collection-wrapper">
                <Container>
                    {(!data || !data.product || data.product.length === 0 || loading) ?
                        'loading'
                        :
                        <Row className="leftImage">
                            <Col lg="1" sm="2" xs="12" >
                                <Row>
                                    <Slider className="slider-nav"
                                        {...productsnav}
                                        asNavFor={nav1}
                                        ref={slider => (slider2.current = slider)}
                                    >
                                        {data.product.variants ?
                                            data.product.images.map((vari, index) =>
                                                <div key={index}>
                                                    <Media src={`${vari.src}`} key={index} alt={vari.alt} className="img-fluid" />
                                                </div>
                                            ) :
                                            ''}
                                    </Slider>
                                </Row>
                            </Col>
                            <Col lg="5" sm="10" xs="12" className="order-up">
                                <Slider {...products} asNavFor={nav2} ref={slider => (slider1.current = slider)} className="product-right-slick">
                                    {data.product.variants ?
                                        data.product.images.map((vari, index) =>
                                            <div key={index}>
                                                <ImageZoom image={vari} />
                                            </div>
                                        ) :
                                        data.product.images.map((vari, index) =>
                                            <div key={index}>
                                                <ImageZoom image={vari} />
                                            </div>
                                        )}
                                </Slider>
                            </Col>
                            <Col lg="6" className="rtl-text">
                                <DetailsWithPrice symbol={symbol} item={data.product} changeColorVar={changeColorVar} navOne={state.nav1} addToCartClicked={addToCart} />
                            </Col>
                        </Row>
                    }
                </Container>
            </div>
        </section >
    )
}

export default LeftImagePage;