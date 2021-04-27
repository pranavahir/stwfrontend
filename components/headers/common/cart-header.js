import React, { Fragment, useContext } from 'react';
import Link from 'next/link';
import CartContext from '../../../helpers/cart';
import { Media } from 'reactstrap';

const CartHeader = ({ item, symbol }) => {
    const context = useContext(CartContext);
    const getName = (title)=>{
        var str = null;
        if(title !=null && title!=undefined)
        {
            str = title; 
            var res = str.slice(0, 50);
            res= res+"....";
        }
                return res;
    }

    const priceCollection = (variantData) =>{
        var sellPrice = null;
        if(variantData !=null && variantData !=undefined)
        {
            if(variantData.length > 0)
            {

                
                sellPrice = Math.floor(((variantData[0].conversionrate *  ((variantData[0].price +2 ) * 1.0825 )  + (variantData[0].frieghtrate)) * (1 + variantData[0].duty)) * (1/(1-((variantData[0].fees / (1 + (variantData[0].fees)))+(variantData[0].margin / (1 + (variantData[0].margin)))))),0);
                console.log(sellPrice);
            }
            else
            {
                sellPrice = 0;
            }
            
        }
        return sellPrice
    }


    return (
        <Fragment>
            <li >
                <div className="media">
                    <Link href={'/product/' + item.id}>
                        <a>
                            <Media alt="" className="mr-3" src={`${item.images[0].mainimageurl}`} />
                        </a>
                    </Link>
                    <div className="media-body">
                        <Link href={'/product/' + item.id}>
                            <a><h4>{getName(item.title)}</h4></a>
                        </Link>
                        
                        <h4><span>{item.qty} x {symbol} {( priceCollection(item.variants) - (priceCollection(item.variants) * 0.75 / 100)).toFixed(2)}</span></h4>
                    </div>
                </div>
                <div className="close-circle">
                    <a href={null} onClick={() => context.removeFromCart(item)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </a>
                </div>
            </li>
        </Fragment>
    )
}




export default CartHeader;
