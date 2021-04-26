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
                        
                        <h4><span>{item.qty} x {symbol} {(item.variants[0].price - (item.variants[0].price * 0.75 / 100)).toFixed(2)}</span></h4>
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
