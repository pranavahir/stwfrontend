import Head from 'next/head';
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
import Helmet from 'react-helmet';

const GET_SINGLE_PRODUCTS = gql`
    query product ($asin:String!,$type:String!,$country:String!,$panel:String!) {
        product (asin:$asin,type:$type) { seqid
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
            daystoship
            pwfee
            purchasetax
            conversionrate
                frieghtrate
                duty
                taxes
                fees
                margin
            price 
            quantity
            domesticfreight
      }

        }
    }
`;

const LeftSidebarPage = ({ pathId, type }) => {

    var asinData = "";
    if(type == "url")
    {
        asinData = pathId;
    }
    else
    {
        if(pathId.search("-")==-1){
            asinData =  pathId
            console.log(pathId);
        }
        else
        asinData =  pathId.slice(0,pathId.search("-"));
    }

    const asin = asinData;
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const IsRight = curContext.state.IsRight;
    const country = curContext.state.country;
    const panel = curContext.state.panel;
    const currency = curContext.state.currency
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
    var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
        variables: {
            // id: parseInt(pathId),
            asin:asin,
            type:type,
            country:country,
            panel:panel
        }
    });

    // const getUrl = (data.product.title) => {
        
    // }

    const getUrl = (product) => {
        
        var domain = window.location.hostname;
        var titleProps = product.title.split(' ').join('-');
        titleProps = titleProps.replace(/[^\w\s]/gi, '-');
        titleProps = titleProps.replace(/---/gi, '-');
        titleProps = titleProps.replace(/--/gi, '-');
        var url = domain + '/p/'+ product.asin  + '-' + 'titleProps';
        return url;
    }


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

    const loaderStyle={
        margin: "auto",
        width: "60%",
 
        padding: "10px",
    }

    return (
        <section className="">
            <div className="collection-wrapper">
            {(!data || !data.product || data.product.length === 0|| data.product==null || loading) ?'':
            <Head>
        <title data-react-helmet="true">{data.product.title} - Shop The World</title>
        <meta data-react-helmet="true" name="viewport" content="width=device-width, initial-scale=1"/>
        <meta data-react-helmet="true" name="copyright" content="Shop The World"/>
        <meta data-react-helmet="true" name="author" content="Shop The World"/>
        <meta data-react-helmet="true" name="country" content={country}/>
        <meta data-react-helmet="true" name="language" content="en-US"/>
        <meta data-react-helmet="true" name="currency" content={currency}/>
        <meta data-react-helmet="true" name="robots" content="index, follow"/>
        <meta data-react-helmet="true" name="description" content={data.product.title}/>
        <meta property="og:type" content="product"/>
        <meta property="og:title" content={data.product.title}/>
        <meta property="og:url" content={getUrl(data.product)}/>
        <meta property="og:description" content={data.product.title}/>
        <meta data-react-helmet="true" property="product:sku" content={data.product.sku}/>
        <meta data-react-helmet="true" property="product:condition" content="new"/>
        <meta data-react-helmet="true" property="product:brand" content={data.product.brandname}/>
        <meta data-react-helmet="true" property="product:retailer_item_id" content={data.product.asin}/>
        <meta data-react-helmet="true" property="product:price:currency" content={currency}/>
        {/* <meta data-react-helmet="true" property="og:image" content="https://shoptheworld.vtexassets.com/arquivos/ids/156142/image_1.jpg?v=637397231439730000"/>
        <meta data-react-helmet="true" property="og:image" content="https://shoptheworld.vtexassets.com/arquivos/ids/160165/image_2.jpg?v=637397237219400000"/>
        <meta data-react-helmet="true" property="og:image" content="https://shoptheworld.vtexassets.com/arquivos/ids/162518/image_3.jpg?v=637397240736970000"/> */}
        <meta data-react-helmet="true" property="product:availability" content="instock"/>
        <meta data-react-helmet="true" property="product:price:amount" content="228"/>

        <link data-react-helmet="true" rel="canonical" href={`${getUrl(data.product)}`}/>
        <link data-react-helmet="true" rel="preload" as="image" href={`${data.product.images[0].additionalimage4}`} crossOrigin="anonymous"/>
             </Head> }

                <Container>
                    <Row>
                        <Col sm="3" className="collection-filter">
                            {/* <Filter /> */}
                            <Service />
                            {/* <!-- side-bar single product slider start --> */}
                            {/* <NewProduct /> */}
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
                                {(!data || loading) ?
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
                                    :[(!data || !data.product || data.product == null ? 
                                        <section className="p-0">
                                            <Container>
                                                <Row>
                                                    <Col sm="12">
                                                        <div className="error-section">
                                                            <h1>404</h1>
                                                            <h2>page not found</h2>
                                                            <a href="/" className="btn btn-solid">back to home</a>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </section>
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

                                            <Slider className="slider-nav" {...productsnav} asNavFor={nav1} ref={slider => (slider2.current = slider)}>

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
                                    )]
                                }

                            </Container>

                            {(!data || !data.product || data.product.length === 0 || data.product==null) ? "" :  <ProductTab selectedItem={data} /> }
                          
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default LeftSidebarPage;