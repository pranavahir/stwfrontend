import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Row, Col, Media, Modal, ModalBody } from 'reactstrap';
import CartContext from '../../../helpers/cart';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import AutoFitImage from 'react-image-autofit-frame';

const ProductItem = ({ product, addCart, backImage, des, addWishlist, cartClass, productDetail, addCompare, title }) => {
    // eslint-disable-next-line
    const router = useRouter();
    const cartContext = useContext(CartContext);
    const curContext = useContext(CurrencyContext);
    const currency = curContext.state;
    const symbol = curContext.state.symbol;
    const plusQty = cartContext.plusQty;
    const minusQty = cartContext.minusQty;
    const quantity = cartContext.quantity;
    const setQuantity = cartContext.setQuantity;

    const [image, setImage] = useState('');
    const [modal, setModal] = useState(false);
    const [modalCompare, setModalCompare] = useState(false);
    const toggleCompare = () => setModalCompare(!modalCompare);
    const toggle = () => setModal(!modal);
    const uniqueTags = [];

    const onClickHandle = (img) => {
        setImage(img);
    }

    const getName = (title)=> {
        var str = null;
        if(title !=null && title!=undefined)
        {
            str = title; 
            var res = str.slice(0, 150);
            // res= res+"....";
        }
                return res;
    }
    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const priceCollection = (variantData) =>{
        var sellPrice = null;
        if(variantData !=null && variantData !=undefined)
        {
            if(variantData.length > 0)
            {
                // sellPrice = Math.floor(((variantData[0].conversionrate *  ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),-1);
                sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),0);
                // sellPrice = ((variantData[0].conversionrate *  ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * Math.round((1/(1-((variantData[0].taxes / (1 + (variantData[0].taxes)))+(variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),4);
            }
            else
            {
                sellPrice = 0;
            }
            
        }
        return sellPrice
    }


    const discountCalculation = (variantData) =>{
        var discount = null;
        // CommonFun.publicMethod();
        if(variantData !=null && variantData !=undefined)
        {
            if(variantData.length > 0)
            {
                discount = variantData[0].discount;
            }
            else
            {
                discount = 0;
            }
        }
        return discount
    }
    

    const clickProductDetail = () => {

        var titleProps = product.title.split(' ').join('-');
        titleProps = titleProps.replace(/[^\w\s]/gi, '-');
        titleProps = titleProps.replace('---', '-');
        titleProps = titleProps.replace('--', '-');
        router.push(`/product-details/${product.asin}` + '-' + `${titleProps}`);
    }

    const variantChangeByColor = (imgId, product_images) => {
        product_images.map((data) => {
            if (data.image_id == imgId) {
                setImage(data.src);
            }
        })
    }

    const descriptionFormation=(description)=>{
        var str = description;
        var res =null;
        
        if(str!=null && str!=undefined)
        {
             res = str.split("|");    
        }
        return res;
    }

    let RatingStars = []
    let rating = 5;
    for (var i = 0; i < rating; i++) {
        RatingStars.push(<i className="fa fa-star" key={i}></i>)
    }
    const linkStyle ={
        fontSize:12,
        cursor: 'pointer',
    }

    return (
        <div className="product-box product-wrap">
            <div className="img-wrapper">
                <div className="lable-block">
                    {(product.new === true) ? <span className="lable3">new</span> : ''}
                    {(product.sale === true) ? <span className="lable4">on sale</span> : ''}
                </div>
                <div style={linkStyle} className="front" onClick={clickProductDetail}>
                    {/* <Media src={`${image ?
                        image : product.images.length>0 ? product.images[0].mainimageurl :""
                        }`}
                        className="img-fluid"
                        alt="" /> */}
                           <AutoFitImage frameWidth="200px" frameHeight="160px" imgSrc={`${image ?
                        image : product.images.length>0 ? product.images[0].mainimageurl :""
                        }`}/>
                </div>
                {backImage ?
                    product.images.length == 0 ?
                        'false'
                        :
                        <div style={linkStyle} className="back" onClick={clickProductDetail}>
                            <Media src={`${image ?
                                image :  product.images.length>0 ? product.images[0].mainimageurl :""
                                }`}
                                className="img-fluid m-auto"
                                alt="" />
                        </div>
                    : ''
                }

                <div className={cartClass}>
                    <button title="Add to cart" onClick={addCart}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                    <a href={null} title="Add to Wishlist" onClick={addWishlist}>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                    </a>
                    <a href={null}
                        title="Quick View"
                        onClick={toggle}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                    <a href={null}
                        title="Compare"
                        onClick={toggleCompare} >
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                    </a>
                    <Modal isOpen={modalCompare} toggle={toggleCompare}  size="lg" centered>
                        <ModalBody>
                            <Row className="compare-modal">
                                <Col lg="12">
                                    <div className="media">
                                        <Media src={`${product.variants ?
                                            image ? image : (product.images.length > 0 ?product.images[0].mainimageurl:"")
                                            : (product.images.length >0 ?product.images[0].mainimageurl:"")
                                            }`} alt="" className="img-fluid" />
                                        <div className="media-body align-self-center text-center">
                                            <h5><i className="fa fa-check"></i>Item <span>{product.title}</span>
                                                <span>successfully added to your Compare list</span>
                                            </h5>
                                            <div className="buttons d-flex justify-content-center">
                                                <Link href="/page/compare">
                                                    <a href={null} className="btn-sm btn-solid" onClick={addCompare}>
                                                        View Compare list
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </ModalBody>
                    </Modal>
                </div>
                {product.images ?
                    <ul className="product-thumb-list">
                        {/* {product.images.map((img, i) => */}
                            <li className={`grid_thumb_img ${product.images.length > 0?product.images[0].mainimageurl:"" === image ? 'active' : ''}`}>
                                <a href={null} title="Add to Wishlist">
                                    <Media src={`${product.images.length > 0?product.images[0].mainimageurl:""}`} alt="wishlist" onClick={() => onClickHandle((product.images.length?product.images[0].mainimageurl:""))} />
                                </a>
                            </li>
                        {/* )} */}
                    </ul> : ''}

            </div>
            <div className={`product-detail ${productDetail}`} >
                <div>
                {title !== 'Product style 4'?
                    <div className="rating">
                        {RatingStars}
                    </div>: ''}
                    <div style={linkStyle} onClick={clickProductDetail} >{product.title}</div>
                    {des ?
                        <p>{product.description}</p>
                        : ''
                    }
                    <h4>
                    {currency.symbol} {Math.floor(((priceCollection(product.variants) - (priceCollection(product.variants) * discountCalculation(product.variants) / 100)))).toFixed(2)}
                        <br/><del><span className="money">{currency.symbol}{(priceCollection(product.variants) * 1).toFixed(2) }</span></del>
                    </h4>

                    {/* {product.variants.map(vari => {
                        var findItem = uniqueTags.find(x => x.color === vari.color);
                        if (!findItem)
                            uniqueTags.push(vari);
                    })} */}

                    {/* {
                        product.type === 'jewellery' || product.type === 'nursery' || product.type === 'beauty' || product.type === 'electronics' || product.type === 'goggles' || product.type === 'watch' || product.type === 'pets' ?
                            ''
                            :
                            <>
                                {title !== 'Product style 4' && uniqueTags[0].color ?
                                    <ul className="color-variant">
                                        {uniqueTags.map((vari, i) => {
                                            return (
                                                <li className={vari.color} key={i} title={vari.color} onClick={() => variantChangeByColor(vari.image_id, product.images)}></li>)
                                        })}
                                    </ul> : ''}
                            </>
                    } */}

                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} className="modal-lg quickview-modal" centered>
                <ModalBody>
                    <Row>
                        <Col lg="6" xs="12">
                            <div className="quick-view-img">
                                <Media src={`${product.variants ?
                                    image ? image : (product.images.length>0 ?product.images[0].mainimageurl:"")
                                    : (product.images.length>0 ?product.images[0].mainimageurl:"")
                                    }`} alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg="6" className="rtl-text">
                            <div className="product-right">
                                <h2> {product.title} </h2>
                                <h4>
                    <del>{symbol}{(priceCollection(product.variants) * 1).toFixed(2)}</del>
                    <span>{discountCalculation(product.variants)}% off</span></h4>
                <h3>{symbol}{Math.floor((priceCollection(product.variants) - (priceCollection(product.variants) * discountCalculation(product.variants) / 100))).toFixed(2)} </h3>
                                {product.variants ?
                                    <ul className="color-variant">
                                        {uniqueTags ?
                                            <ul className="color-variant">
                                                {/* {
                                                    product.type === 'jewellery' || product.type === 'nursery' || product.type === 'beauty' || product.type === 'electronics' || product.type === 'goggles' || product.type === 'watch' || product.type === 'pets' ?
                                                        ''
                                                        :
                                                        <>
                                                            {uniqueTags ?
                                                                <ul className="color-variant">
                                                                    {uniqueTags.map((vari, i) => {
                                                                        return (
                                                                            <li className={vari.color} key={i} title={vari.color} onClick={() => variantChangeByColor(vari.image_id, product.images)}></li>)
                                                                    })}
                                                                </ul> : ''}
                                                        </>
                                                } */}
                                            </ul> : ''}
                                    </ul> : ''}
                                    <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    
                    {descriptionFormation(product.bullepoints) ?
                                            <div >
                                                <ul>
                                                    {descriptionFormation(product.bullepoints).map((size, i) => {
                                                        return <li key={i}><i className="fa fa-angle-double-right mr-2"></i>{size}<br/></li>
                                                    })}
                                                </ul>
                                            </div> : ''}
                </div>
                                
                                <div className="product-description border-product">
                                    {/* {product.size ?
                                        <div className="size-box">
                                            <ul>
                                                {product.size.map((size, i) => {
                                                    return <li key={i}><a href={null}>{size}</a></li>
                                                })}
                                            </ul>
                                        </div> : ''} */}
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
                                                <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(product)} data-type="plus" data-field="">
                                                    <i className="fa fa-angle-right"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-buttons">
                                    <button className="btn btn-solid" onClick={() => addCart(product)} >add to cart</button>
                                    <button className="btn btn-solid" onClick={clickProductDetail} >View detail</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    )
}


export default ProductItem;