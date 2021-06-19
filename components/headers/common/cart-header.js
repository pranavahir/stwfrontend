import React, { Fragment, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CartContext from '../../../helpers/cart';
import { Media } from 'reactstrap';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

const CartHeader = ({ item, symbol }) => {
    const context = useContext(CartContext);
    const currContext = useContext(CurrencyContext);
    const router = useRouter();
    const IsRight = currContext.state.IsRight;
    const gstCollection = context.gstCollection;
    const discountCalculation = context.discountCalculation;
    const priceCollection = context.priceCollection;
    const withDiscount = context.withDiscount;
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

     

      const clickProductDetail = () => {

        var titleProps = item.title.split(' ').join('-');
        titleProps = titleProps.replace(/[^\w\s]/gi, '-');
        titleProps = titleProps.replace(/---/gi, '-');
        titleProps = titleProps.replace(/--/gi, '-');
        router.push(`/p/${item.asin}` + '-' + `${titleProps}`);
    }

    return (
        <Fragment>
            <li >
                <div className="media">
                     
                        <a onClick={clickProductDetail}>
                            <Media alt="" className="mr-3" src={`${item.images[0].mainimageurl}`} />
                        </a>
                    
                    <div className="media-body">
                            <a href="#" onClick={clickProductDetail}> <h4>{getName(item.title)}</h4></a>
                        <h4><span>{item.qty} x {symbol} {(withDiscount(item.variants)) }</span></h4>
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
