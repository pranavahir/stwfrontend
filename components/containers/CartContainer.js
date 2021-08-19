import React, { useContext, Fragment } from "react";
import Link from "next/link";
import CartHeader from "../headers/common/cart-header";
import CartContext from "../../helpers/cart";
import { Media } from "reactstrap";
import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";
import classes from "./CartContainer.module.css";

const CartContainer = ({ icon }) => {
  const context = useContext(CartContext);
  const currContext = useContext(CurrencyContext);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;
  const IsRight = currContext.state.IsRight;
  var geoLocation = sessionStorage.getItem("geoLocation");

  if(geoLocation==null)
  geoLocation="";


  let leftSymbol = null;
  let rightSymbol = null;
  if (IsRight == true) {
    rightSymbol = symbol;
  } else {
    leftSymbol = symbol;
  }

  return (
    <Fragment>
      <li className="onhover-div mobile-cart">
        <div className="cart-qty-cls">{cartList.length}</div>
        <Link href={`${geoLocation}/page/account/cart`}>
          <div>
            <div className={classes.imageContainer}>
              <Media src={icon} className="img-fluid" alt="" />
            </div>
            <i className={"fa fa-shopping-cart " + classes.shoppingCart}></i>
          </div>
        </Link>
        <ul className={"show-div shopping-cart " + classes.mobilePopUpBlock}>
          {cartList.map((item, index) => (
            <CartHeader key={index} item={item} total={total} symbol={symbol} />
          ))}
          {cartList.length > 0 ? (
            <div>
              <li>
                <div className="total">
                  <h5>
                    subtotal :{" "}
                    <span>
                      {leftSymbol}
                      {total.toFixed(2)}
                      {rightSymbol}
                    </span>
                  </h5>
                </div>
              </li>
              <li>
                <div className="buttons view-cart">
                  <Link href={`${geoLocation}/page/account/cart`}>
                    <a>view cart</a>
                  </Link>
                  <Link href={`${geoLocation}/page/account/checkout`}>
                    <a className="checkout">checkout</a>
                  </Link>
                </div>
              </li>
            </div>
          ) : (
            <li>
              <h5>Your cart is currently empty.</h5>
            </li>
          )}
        </ul>
      </li>
    </Fragment>
  );
};

export default CartContainer;
