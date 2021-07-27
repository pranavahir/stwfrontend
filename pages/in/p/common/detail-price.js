import React, { useState, useContext } from 'react';
import Link from 'next/link'
// import sizeChart from '../../../../public/assets/images/size-chart.jpg';
import { useRouter } from "next/router";
import { Modal, ModalBody, ModalHeader, Media, Input } from 'reactstrap';
import { CurrencyContext } from '../../../../helpers/Currency/CurrencyContext';
import CartContext from '../../../../helpers/cart';
import CountdownComponent from '../../../../components/common/widgets/countdownComponent';
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
    const gstCollection = context.gstCollection;
    const discountCalculation = context.discountCalculation;
    const priceCollection = context.priceCollection
    const withDiscount = context.withDiscount
    // const stock = context.stock;
    // const plusQty = context.plusQty;
    // const minusQty = context.minusQty;
    const [productQty, setproductQty] = useState(1);
    // const setproductQty = context.setproductQty;
    const [stock, setStock] = useState('InStock');
    // const setStock = context.setStock;
    const uniqueColor = [];
    const uniqueSize = [];
    const IsRight = CurContect.state.IsRight;
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

    const onCloseModal = () => {
        setOpen(false)
    };

    
    const smallobj={
        fontSize: "12px",
        fontWeight: "bold",
        color: "red"
    }

    const smallredobj={
        fontSize: "15px",
        fontWeight: "bold",
        color: "red"
    }


    const smallh6obj={
        fontSize: "8px",
        fontWeight: "bold",
    }


    const objbrand={
        fontSize: "12px",
        fontWeight: "bold",
        color: "#ec693f"
    }

    const buyNow = (product, productQty) => {
        context.addToCart(product, productQty);
        router.push({
            pathname: "/page/account/checkout",
          });
    };

     
    

    const changeQty = (e) => {
        if(e.target.value != "")
        {
            if(e.target.value <=product.variants[0].quantity )
            {
                setproductQty(parseInt(e.target.value));
            }
            else
            {
                e.preventDefault();
                e.target.value = product.variants[0].quantity;
            }
        }
        else
        setproductQty("");
    }

 
    
    const minusProductQty = () =>{
        if (productQty > 1) {
              setproductQty(productQty - 1);
              setStock('InStock')
          }
    }
    const plusQty = (item) =>{
        if (item.quantity > productQty) {
            setproductQty(productQty + 1);
          } else {
            setStock("Out of Stock !")
          }
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
                
                
                <h3> {product.title} </h3>
                <h4 style={objbrand}> {product.brandname} </h4>

                {/* <h4> {product.categoryvalue} </h4> parseFloat(Math.floor(withDiscount(product.variants)).toFixed(2)).toLocaleString('en') */}
                {product.variants.length?<h6 style={smallobj} >Shipping in {product.variants[0].daystoship} days.</h6>:""} 
                {discountCalculation(product.variants)?<h4><del>{leftSymbol}{((priceCollection(product.variants) * 1)+gstCollection(product.variants)).toFixed(2)}{rightSymbol}</del>
                    <span>{discountCalculation(product.variants)}% off</span></h4>:""}
                <h3>{leftSymbol}{ Math.floor(withDiscount(product.variants)).toFixed(2)}{rightSymbol} </h3>
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

               
                {(product.variants.length > 0 && product.variants[0].quantity > 0) && (withDiscount(product.variants) > 0) ?  
                <div>
                    <div className="product-description border-product">
                    {/* {product.variants ?
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
                        </div> : ''} */}
                        {product.variants.length > 0 && product.variants[0].quantity > 0 ?   
                        <div>
                        <span className="instock-cls">{stock}</span>
                    <h6 className="product-title">quantity</h6>
                    <div className="qty-box">
                        <div className="input-group">
                            <span className="input-group-prepend">
                                <button type="button" className="btn quantity-left-minus" onClick={() => minusProductQty()} data-type="minus" data-field="">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </span>
                            <Input type="text" name="quantity" value={productQty} onChange={changeQty} className="form-control input-number" />
                            <span className="input-group-prepend">
                                <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(product.variants[0])} data-type="plus" data-field="">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </span>
                        </div>
                    </div> </div>
                            : ""}
                            </div>
                   <div className="product-buttons" >
                    <a href={null} className="btn btn-solid" onClick={() => context.addToCart(product, productQty)}>add to cart</a>
                     <a className="btn btn-solid" onClick={() => buyNow(product, productQty)}  >buy now</a> 
                     
                </div> </div> :
                <h5 style={smallredobj}> unavailable...! </h5> }
                
                <h6><p style={smallh6obj} >Within 7 days of delivery, you may return new, unopened merchandise in its original condition. Exceptions and restrictions apply. See our <a href="#"><Link href={`/page/returns-refund`} >Returns & Refunds</Link></a></p></h6>
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