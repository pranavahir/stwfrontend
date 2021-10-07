import React, { useContext,useState } from 'react';
import { Container, Row, Col, Media,Modal,ModalBody } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { CurrencyContext } from '../../../../helpers/Currency/CurrencyContext';
import CartContext from '../../../../helpers/cart';
import {WishlistContext} from '../../../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../../../helpers/Compare/CompareContext';
import { useRouter } from 'next/router'
import AutoFitImage from 'react-image-autofit-frame';

const GET_PRODUCTS = gql`
    query  products($type:String!,$indexFrom:Int! ,$limit:Int!,$color:String!,$brand:[String!]! ,$priceMax:Int!,$priceMin:Int!,$keyword:String!,$country:String!,$panel:String!,$promoflag:[String!],$relevantProduct:String) {
        products (type: $type ,indexFrom:$indexFrom ,limit:$limit ,color:$color ,brand:$brand  ,priceMax:$priceMax,priceMin:$priceMin,keyword:$keyword,country:$country,panel:$panel,promoflag:$promoflag,relevantProduct:$relevantProduct){
  total(keyword:$keyword,type:$type,promoflag:$promoflag,relevantProduct:$relevantProduct){
            total
        }
        hasMore(limit:$limit,indexFrom:$indexFrom,keyword:$keyword,type:$type,promoflag:$promoflag,relevantProduct:$relevantProduct){
            seqid
        }
        items(limit:$limit,indexFrom:$indexFrom,keyword:$keyword,type:$type,promoflag:$promoflag,relevantProduct:$relevantProduct){
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
            quantity
            domesticfreight
      }
        }

        }
    }
`;


const ProductSection = ({ pathId, type }) => {
    var asinData = "";
    if(type == "url")
    {
        asinData = pathId;
    }
    else
    {
        if(pathId!=undefined && pathId!="" && pathId!=null)
        {
            if(pathId.search("-")==0)
            asinData =  pathId
            else
            asinData =  pathId.slice(0,pathId.search("-"));
        }
    }
    const router = useRouter();
    const curContext = useContext(CurrencyContext);
    const wishlistContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const symbol = curContext.state.symbol;
    const currency = curContext.state;
    const cartCtx = useContext(CartContext);
    const addToCart = cartCtx.addToCart;
    const quantity = cartCtx.quantity;
    const plusQty = cartCtx.plusQty;
    const minusQty = cartCtx.minusQty;
    const setQuantity = cartCtx.setQuantity;
    const withDiscount = cartCtx.withDiscount;
    const country = curContext.state.country;
    const panel = curContext.state.panel;
    const [selectedProduct,setSelectedProduct] = useState()
    const [image, setImage] = useState('');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const uniqueTags = [];
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

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const clickProductDetail = (product) => {

        var titleProps = product.title.split(' ').join('-');
        titleProps = titleProps.replace(/[^\w\s]/gi, '-');
        titleProps = titleProps.replace(/---/gi, '-');
        titleProps = titleProps.replace(/--/gi, '-');
        // var url = "/p/"+product.asin + "-" + titleProps;
        // return url;
        router.push(`/p/${product.asin}` + '-' + `${titleProps}`);
    }   
   
    const getSelectedProduct = (item) => {
        setSelectedProduct(item)
        toggle()
    } 

    var { loading, data, fetchMore } = useQuery(GET_PRODUCTS, {
        variables: {
            type: "",
            priceMax: 10,
            priceMin: 1,
            color: "red",
            brand: "max",
            indexFrom: 0,
            limit: 15,
            keyword:"",
            country:country,
            panel:panel,
            promoflag:"",
            relevantProduct:asinData 
        }
    });

    return (
        <section className="section-b-space ratio_asos">
            <Container>
                <Row>
                    <Col className="product-related">
                        <h3>Related products</h3>
                    </Col>
                </Row>
                <Row className="search-product">
                    {(!data || !data.products || data.products.items.length === 0 || loading) ?
                        'loading'
                        :
                        <>
                            {data && data.products.items.slice(0, 6).map((product, index) =>
                                <Col xl="2" md="4" sm="6" key={index}>
                                    <div className="product-box">
                                        <div className="img-wrapper">
                                            <div className="front">
                                                <a href="#" onClick={() => clickProductDetail(product)} >
                                                <AutoFitImage frameWidth="200px" imgSize="contain" className="img-fluid blur-up lazyload bg-img" frameHeight="160px" imgSrc={`${image ?
                        image : product.images.length>0 ? product.images[0].mainimageurl :""
                        }`}/>
                                                    {/* <Media onClick={() => clickProductDetail(product)} src={product.images[0].mainimageurl}
                                                        className="img-fluid blur-up lazyload bg-img" alt="" />
                                                         */}
                                                        </a>
                                            </div>
                                            <div className="back">
                                            <a href="#" onClick={() => clickProductDetail(product)} >
                                                {/* <Media src={product.images[0].mainimageurl}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" /> */}
                                                                       <AutoFitImage frameWidth="200px" className="img-fluid blur-up lazyload bg-img" imgSize="contain" frameHeight="160px" imgSrc={`${image ?
                        image : product.images.length>0 ? product.images[0].mainimageurl :""
                        }`}/>
                                                    </a>
                                            </div>
                                            <div className="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart" title="Add to cart" onClick={() => addToCart(product,quantity)}>
                                                    <i className="fa fa-shopping-cart"></i></button>
                                                <a href="#"  onClick={() => wishlistContext.addToWish(product)}
                                                    title="Add to Wishlist"><i className="fa fa-heart" aria-hidden="true">
                                                    </i>
                                                </a>
                                                <a href="#" onClick={() => getSelectedProduct(product)} data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                    <i className="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href="#" onClick={() => compareContext.addToCompare(product)}  title="Compare">
                                                    <i className="fa fa-refresh" aria-hidden="true"></i>
                                                </a>

                                            </div>
                                        </div>
                                        <div className="product-detail">
                                            <div className="rating"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                            <a href="#" onClick={() => clickProductDetail(product)} >
                                                <h6>{product.title}</h6>
                                            </a>
                                            <h4>{leftSymbol}{Math.floor(withDiscount(product)).toFixed(2)}{rightSymbol}</h4>
                                            {/* <ul className="color-variant">
                                                <li className="bg-light0"></li>
                                                <li className="bg-light1"></li>
                                                <li className="bg-light2"></li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </Col>
                            )
                            }
                        </>
                    }

                </Row>
                {selectedProduct ?
                <Modal isOpen={modal} toggle={toggle} className="modal-lg quickview-modal" centered>
                    <ModalBody>
                        <Row>
                            <Col lg="6" xs="12">
                                <div className="quick-view-img">
                                    <Media  src={`${selectedProduct.variants ?
                                        image ? image : selectedProduct.images[0].mainimageurl
                                        : selectedProduct.images[0].mainimageurl
                                        }`} alt="" className="img-fluid" />
                                </div>
                            </Col>
                            <Col lg="6" className="rtl-text">
                                <div className="product-right">
                                    <h2> {selectedProduct.title} </h2>
                                    <h3>{leftSymbol}{Math.floor( withDiscount(selectedProduct)).toFixed(2)}{rightSymbol}</h3>
                                    {selectedProduct.variants ?
                                        <ul className="color-variant">
                                            {uniqueTags ?
                                                <ul className="color-variant">
                                                    {
                                                        selectedProduct.type === 'jewellery' || selectedProduct.type === 'nursery' || selectedProduct.type === 'beauty' || selectedProduct.type === 'electronics' || selectedProduct.type === 'goggles' || selectedProduct.type === 'watch' || selectedProduct.type === 'pets' ?
                                                            ''
                                                            :
                                                            <>
                                                                {uniqueTags ?
                                                                    <ul className="color-variant">
                                                                        {uniqueTags.map((vari, i) => {
                                                                            return (
                                                                                <li className={vari.color} key={i} title={vari.color} onClick={() => variantChangeByColor(vari.image_id, selectedProduct.images)}></li>)
                                                                        })}
                                                                    </ul> : ''}
                                                            </>
                                                    }
                                                </ul> : ''}
                                        </ul> : ''}
                                    <div className="border-product">
                                        <h6 className="product-title">product details</h6>
                                        <p>{selectedProduct.description}</p>
                                    </div>
                                    <div className="product-description border-product">
                                        {selectedProduct.size ?
                                            <div className="size-box">
                                                <ul>
                                                    {selectedProduct.size.map((size, i) => {
                                                        return <li key={i}><a href={null}>{size}</a></li>
                                                    })}
                                                </ul>
                                            </div> : ''}
                                        <h6 className="product-title">quantity</h6>
                                        <div className="qty-box">
                                            <div className="input-group">
                                                <span className="input-group-prepend">
                                                    <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                                        <i className="fa fa-angle-left"></i>
                                                    </button>
                                                </span>
                                                <input type="text" name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />
                                                <span className="input-group-prepend">
                                                    <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(selectedProduct)} data-type="plus" data-field="">
                                                        <i className="fa fa-angle-right"></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-buttons">
                                        <button className="btn btn-solid" onClick={() => addToCart(selectedProduct,quantity)} >add to cart</button>
                                        <button className="btn btn-solid" onClick={() => clickProductDetail(selectedProduct)} >View detail</button>
                                        {/*  */}
                                    </div>
                                    
                                </div>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
                :""}


            </Container>
        </section>
    )
}

export default ProductSection;