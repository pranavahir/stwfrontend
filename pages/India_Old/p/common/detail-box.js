import React, { useState, useEffect, useRef, useContext } from 'react';
import Slider from 'react-slick';
import { Modal, ModalBody, ModalHeader, Media, Input } from 'reactstrap';
import CountdownComponent from '../../../../components/common/widgets/countdownComponent';
import sizeChart from '../../../../public/assets/images/size-chart.jpg';
import CartContext from '../../../../helpers/cart';
import { CurrencyContext } from '../../../../helpers/Currency/CurrencyContext';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

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

const DetailBox = ({ item ,changeColorVar }) => {
    const [modal, setModal] = useState(false);
    const CurContect = useContext(CurrencyContext);
    const symbol = CurContect.state.symbol
    const toggle = () => setModal(!modal);
    const [open, setOpen] = useState(false);
    const cartContext = useContext(CartContext);
    const addToCart = cartContext.addToCart;
    const plusQty = cartContext.plusQty;
    const minusQty = cartContext.minusQty;
    const quantity = cartContext.quantity;
    const uniqueColor = [];
    const uniqueSize = [];
    const IsRight = CurContext.state.IsRight;
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

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value));
    }

    return (
        <div className="product-right product-form-box">
            <h4><del>{item.price}%</del><span>{item.discount}% off</span></h4>
            <h3>{leftSymbol}{item.price}{rightSymbol}</h3>
            <ul>
                {item.variants.map(vari => {
                    var findItem = uniqueColor.find(x => x.color === vari.color);
                    if (!findItem)
                        uniqueColor.push(vari);
                    var findItemSize = uniqueSize.find(x => x === vari.size);
                    if (!findItemSize)
                        uniqueSize.push(vari.size);
                })}
                {uniqueColor ?
                    <ul className="color-variant">
                        {uniqueColor.map((vari, i) => {
                            return (
                                <li className={vari.color} key={i} title={vari.color} onClick={() => changeColorVar(i)}></li>)
                        })}
                    </ul> : ''}
            </ul>
            <div className="product-description border-product">
                <h6 className="product-title">Time Reminder</h6>
                <CountdownComponent />
                <h6 className="product-title">select size</h6>
                {item.variants ?
                    <div>
                        <div className="size-box">
                            <ul>
                                {uniqueSize.map((data, i) => {
                                    return <li key={i}><a href={null}>{data}</a></li>
                                })}
                            </ul>
                        </div>
                    </div> : ''}
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
                            <button type="button" className="btn quantity-right-plus" onClick={() => plusQty(item)} data-type="plus" data-field="">
                                <i className="fa fa-angle-right"></i>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="product-buttons">
            <a href={null} data-toggle="modal" data-target="#addtocart" onClick={() => addToCart(item,quantity)}className="btn btn-solid">add to cart</a> 
            <a href="#"  className="btn btn-solid">buy now</a>
            </div>
        </div>
    )
}

export default DetailBox;