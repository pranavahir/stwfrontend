import React, { useState, useContext } from 'react';
import Link from 'next/link'
import sizeChart from '../../../public/assets/images/size-chart.jpg';
import { useRouter } from "next/router";
import { Modal, ModalBody, ModalHeader, Media, Input } from 'reactstrap';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import CartContext from '../../../helpers/cart';
import CountdownComponent from '../../../components/common/widgets/countdownComponent';
// import { CommonFun } from '../../../components/Utility/PriceCalculator';

const DetailsWithPrice = ({item,stickyClass,changeColorVar}) => {

    const [modal, setModal] = useState(false);
    const CurContect = useContext(CurrencyContext);
    const symbol = CurContect.state.symbol
    const toggle = () => setModal(!modal);
    const product = item;
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const context = useContext(CartContext);
    const stock = context.stock;
    const plusQty = context.plusQty;
    const minusQty = context.minusQty;
    const quantity = context.quantity;
    const uniqueColor = [];
    const uniqueSize = [];

    const onCloseModal = () => {
        setOpen(false)
    };

    
    const smallobj={
        fontSize: "12px",
    fontWeight: "bold",
    color: "black"
    }

    const buyNow = (product, quantity) => {
        context.addToCart(product, quantity);
        router.push({
            pathname: "/page/account/checkout",
          });
    };

    const priceCollection = (variantData) =>{
        var sellPrice = null;
        // CommonFun.publicMethod();
        if(variantData !=null && variantData !=undefined)
        {
            if(variantData.length > 0)
            {
                // sellPrice = Math.floor(((variantData[0].conversionrate *  ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),-1);
                // sellPrice = Math.floor(((variantData[0].conversionrate * ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),0);
                sellPrice =  Math.floor(((variantData[0].conversionrate *  ((variantData[0].price +variantData[0].pwfee ) * (1+ (variantData[0].purchasetax/100)))    + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),0);
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
    

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value));
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
    return (
        <>
            <div className={`product-right ${stickyClass}`}>
                
                
                <h2> {product.title} </h2>
                <h4> {product.brandname} </h4>

                {/* <h4> {product.categoryvalue} </h4> */}
                <h6 style={smallobj} >Products will be shipped in {product.variants[0].daystoship} days.</h6>
                {discountCalculation(product.variants)?<h4><del>{symbol}{(priceCollection(product.variants) * 1).toFixed(2)}</del>
                    <span>{discountCalculation(product.variants)}% off</span></h4>:""}
                <h3>{symbol}{Math.floor((priceCollection(product.variants) - (priceCollection(product.variants) * discountCalculation(product.variants) / 100))).toFixed(2)} </h3>
                {product.variants.map(vari => {
                    var findItem = uniqueColor.find(x => x.color === vari.color);
                    if (!findItem)
                        uniqueColor.push(vari);
                    var findItemSize = uniqueSize.find(x => x === vari.size);
                    if (!findItemSize)
                        uniqueSize.push(vari.size);
                })}
                {
                    changeColorVar === undefined ?
                        <>
                            {uniqueColor ?
                                <ul className="color-variant">
                                    {uniqueColor.map((vari, i) => {
                                        return (
                                            <li className={vari.color} key={i} title={vari.color} ></li>)
                                    })}
                                </ul> : ''}
                        </>
                        :
                        <>
                            {uniqueColor ?
                                <ul className="color-variant">
                                    {uniqueColor.map((vari, i) => {
                                        return (
                                            <li className={vari.color} key={i} title={vari.color} onClick={() => changeColorVar(i)}></li>)
                                        })}
                                </ul>
                                : ''}
                        </>
                }

                {/* <div className="product-description border-product">
                    {product.variants ?
                        <div>
                            <h6 className="product-title size-text">select size
                                    <span><a href={null} data-toggle="modal"
                                    data-target="#sizemodal" onClick={toggle} >size chart</a></span></h6>
                            <Modal isOpen={modal} toggle={toggle} centered>
                                <ModalHeader toggle={toggle}>Sheer Straight Kurta
                                    </ModalHeader>
                                <ModalBody>
                                    <Media src={sizeChart} alt="size" className="img-fluid" />
                                </ModalBody>
                            </Modal>
                            <div className="size-box">
                                <ul>
                                    {uniqueSize.map((data, i) => {
                                        return <li key={i}><a href={null}>{data}</a></li>
                                    })}
                                </ul>
                            </div>
                        </div> : ''}
                    <span className="instock-cls">{stock}</span>
                    <h6 className="product-title">quantity</h6>
                    <div className="qty-box">
                        <div className="input-group">
                            <span className="input-group-prepend">
                                <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                    <i className="fa fa-angle-left"></i>
                                </button>
                            </span>
                            <Input type="text" name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />
                            <span className="input-group-prepend">
                                <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(product)} data-type="plus" data-field="">
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div> */}
                <div className="product-buttons" >
                    <a href={null} className="btn btn-solid" onClick={() => context.addToCart(product, quantity)}>add to cart</a>
                     <a className="btn btn-solid" onClick={() => buyNow(product, quantity)}  >buy now</a> 
                </div>
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
                <div className="border-product">
                    <h6 className="product-title">share it</h6>
                    <div className="product-icon">
                        <ul className="product-social">
                            <li><a href="https://www.facebook.com/shoptheworldstore/" target="_blank" ><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://plus.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/stw_insta_in/" target="_blank" ><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="border-product">
                    <h6 className="product-title">Time Reminder</h6>
                    <CountdownComponent />
                </div> */}
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <ModalHeader className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta</h5>
                        </ModalHeader>
                        <ModalBody className="modal-body">
                            <Media src={`/assets/images/size-chart.jpg`} alt="" className="img-fluid" />
                        </ModalBody>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default DetailsWithPrice;