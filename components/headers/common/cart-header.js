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

    const priceCollection = (variantData) =>{
        var sellPrice = null;
        if(variantData !=null && variantData !=undefined)
        {
            if(variantData.length > 0)
            {
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
                        <h4><span>{item.qty} x {symbol} {( priceCollection(item.variants) - (priceCollection(item.variants) * discountCalculation(item.variants) / 100)).toFixed(2)}</span></h4>
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
