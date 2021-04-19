import React, { useContext, useState } from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';


import { Media, Container, Form, Row, Input, Col } from "reactstrap";
import { PayPalButton } from "react-paypal-button";
import CartContext from "../../../../helpers/cart";
import paypal from "../../../../public/assets/images/paypal.png";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Card from '../../../../components/stripeCard/Card';
import Axios  from "axios";
import { CurrencyContext } from "../../../../helpers/Currency/CurrencyContext";
// import Stripe from 'stripe'
import GooglePayButton from '@google-pay/button-react';
// import StatusMessages, {useMessages} from './StatusMessages';

// import  Razorpay = require('razorpay');
// const stripe = require('stripe')('pk_live_51IYvwgAR19qkTg2Rtd20aLk5vwFsCRajMN8I9aZl8zFfXj14qDxppEDhfLMp51b9OohTumAh7vSlO6IccIP5iIh600zA024lK7');


const getServerSideProps = async () => {
  // const stripe = new Stripe("pk_live_51IYvwgAR19qkTg2Rtd20aLk5vwFsCRajMN8I9aZl8zFfXj14qDxppEDhfLMp51b9OohTumAh7vSlO6IccIP5iIh600zA024lK7");



  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1,
    currency: "usd"
  });

  return {
    props: {
      paymentIntent
    }
  };
};


const CheckoutPage = () => {

  const cartContext = useContext(CartContext);
  const cartItems = cartContext.state;
  const cartTotal = (cartContext.cartTotal).toFixed(2);
  const curContext = useContext(CurrencyContext);
  const symbol = curContext.state.symbol;
  const [obj, setObj] = useState({});
  const [payment, setPayment] = useState("Gpay");
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  // const [messages, addMessage] = useMessages();

  // const stripePromise = loadStripe("pk_live_51IYvwgAR19qkTg2Rtd20aLk5vwFsCRajMN8I9aZl8zFfXj14qDxppEDhfLMp51b9OohTumAh7vSlO6IccIP5iIh600zA024lK7");
  const checkhandle = (value) => {
    setPayment(value);
  };

/** Launches payment request flow when user taps on buy button. */
const onBuyClicked = () =>{
  const creditCardPaymentMethod = {
    supportedMethods: 'basic-card',
    data: {
        supportedNetworks: ['visa', 'mastercard'],
        supportedTypes: ['credit', 'debit']
    }
};
const supportedInstruments = [   
    {     
        supportedMethods: ['https://tez.google.com/pay'],
        //supportedMethods:[creditCardPaymentMethod],
        data: {

            pa:'shoptheworld@dbs',
            pn:'STW E-Commerce',
            tr:'123456ABCDEFSD',
            url:'http://localhost:3000/page/account/checkout',
            mc:'5045',
            tn:'Purchase in Merchant'
        }   
    } 
];

 

var details = 
    {   
    total: 
        {     
        label:'Total',     
        amount: {       
            currency:'INR',       
            value:'10.01' //sample amount 
        }
    },
    displayItems: [
        {
            label:'Original Amount',     
            amount: {       
                currency:'INR',       
                value:'10.01'
            }
        }
    ]
};
var request =null;
try {
    request = new PaymentRequest(supportedInstruments, details);
    console.log(request);
    /*request.show()
    .then(function(result){
        alert("hai");
    })
     .catch(function(err){
        alert('Payment Request Error: '+ err.message+' 74'); 
    });*/
}catch (e) {
    alert('Payment Request Error: '+ e.message+'77'); 
    console.log('Payment Request Error: '+ e.message);
    //return;
} 
if (!request) {  
    alert('Web payments are not supported in this browser 77'); 
    console.log('Web payments are not supported in this browser.'); 
    // return;
} 

var canMakePaymentPromise = checkCanMakePayment(request);
canMakePaymentPromise
.then(function(result){
    showPaymentUI(request,result)
})
.catch(function(err){
    console.log('Error in calling checkCanMakePayment: ' + err); 
});
};
const canMakePaymentCache = 'canMakePaymentCache';

// const loadScript=(src) => 
const checkCanMakePayment=(request)=>{
// Checks canMakePayment cache, and use the cache result if it exists. 
if(sessionStorage.hasOwnProperty(canMakePaymentCache)){
  return Promise.resolve(JSON.parse(sessionStorage[canMakePaymentCache]));
}

// If canMakePayment() isn't available, default to assuming that the method is supported
var canMakePaymentPromise = request.canMakePayment();

if(request.canMakePayment){
  canMakePaymentPromise = request.canMakePayment();
}

return canMakePaymentPromise
.then(function(result){
  sessionStorage[canMakePaymentCache] = result;
  return result;
})
.catch(function (err){
  alert('Error calling canMakePayment: '+ err);
  console.log('Error calling canMakePayment: '+ err);
});
};

const showPaymentUI=(request, canMakePayment)=>{
  if(!canMakePayment){
    handleNotReadyToPay();
    return;
}
// Set payment timeout.
var paymentTimeout = window.setTimeout(function(){
    window.clearTimeout(paymentTimeout);
    request.abort()
    .then(function(){
        alert('Payment timed out after 20 mins 129');
        console.log('Payment timed out after 20 mins');
    }).catch(function(){
        alert('Unable to abort,user is in process of paying 132');
        console.log('Unable to abort,user is in process of paying');
    }); 
}, 20 * 60 * 1000);
request.show()
.then(function(paymentResponse){
    window.clearTimeout(paymentTimeout);
    alert("Request Success");
    console.log(paymentResponse);
    processResponse(paymentResponse); // Handle response from browser
})
.catch(function (err){
   alert(err +'142');
   console.log(err);
});
  };

  
const handleNotReadyToPay=()=>{
  alert("Tez is not ready to handle 149");
  };
  
  const processResponse = (paymentResponse)=>{
    var paymentResponseString = paymentResponseToJsonString(paymentResponse);
    console.log(paymentResponseString);
    /* fetch('/buy',{
        method: 'POST',
        headers: new Headers({'Content-Type':'application/json'}),
        body:paymentResponseString
    })
    .then(function(buyResult){
        console.log('Buy Result'+buyResult);   
    })
    .catch(function(err){
      console.log('Unable to process payment. '+err);   
    });*/
    };

  const loadScript=(src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }


  const stripeSubmit = async (e,data) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      console.log('Stripe.js has not yet loaded.');
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    setTimeout(() => controller.abort(), 5000);
    const {error: backendError, clientSecret} = await fetch(
      'https://stripeserver.digitechniq.in/create-payment-intent',{ signal },
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodType: 'card',
          amount:1,
          currency: 'usd'
          
        }),
      }
    ).then((r) => r.json());

    if (backendError) {
      console.log(backendError.message);
      return;
    }

    console.log('Client secret returned');

    const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: data.name,
          },
        },
      }
    );

    if (stripeError) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(stripeError.message);
      return;
    }

    // Show a success message to your customer
    // There's a risk of the customer closing the window before callback
    // execution. Set up a webhook or plugin to listen for the
    // payment_intent.succeeded event that handles any business critical
    // post-payment actions.
    console.log(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);

    router.push({
      pathname: "/page/order-success",
      state: {
        payment: payment,
        items: cartItems,
        orderTotal: total,
        symbol: symbol,
      },
    });

  };

  const razorPayPaymentHandler = async (filledData) => {

    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }


    const API_URL = `http://localhost:7000/razorpay/`;
    const orderUrl = `${API_URL}order`;
    const response = await Axios.post(orderUrl, { amount: 1 });
    const { data } = response;
    console.log("App -> razorPayPaymentHandler -> data", data);

    const options = {
      key: "",//replace razorpay API key
      name: filledData.name,
      description: filledData.firstName,
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          console.log(paymentId);
          const url = `http://localhost:7000/razorpay/capture/${paymentId}`;
          const captureResponse = await Axios.post(url, {
            amount: 1,
          });
          const successObj = JSON.parse(captureResponse.data);
          const captured = successObj.captured;
          console.log("App -> razorPayPaymentHandler -> captured", successObj);
          if (captured) {
            // swal("Payment Successfull", "", "success");
            console.log("success");
            this.setState({ name: "", decription: "", amount: "",});
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };


  const onSuccess = (payment) => {
    console.log(payment);
    router.push({
      pathname: "/page/order-success",
      state: {
        payment: payment,
        items: cartItems,
        orderTotal: total,
        symbol: symbol,
      },
    });
  };

  const onSubmit = (data,e) => {
    if (data !== "") {

        if(payment == "stripe")
        {
          stripeSubmit(e,data);
        }
        else if(payment == "Razorpay")
        {
            razorPayPaymentHandler(data);
        }
        else if(payment == "Gpay")
        {
          onBuyClicked();
            // razorPayPaymentHandler(data);
        }
    } else {
      errors.showMessages();
    }
  };

  const setStateFromInput = (event) => {
    obj[event.target.name] = event.target.value;
    setObj(obj);
  };

  const onCancel = (data,) => {
    console.log("The payment was cancelled!", data);
  };

  const onError = (err) => {
    console.log("Paypal not display");
    console.log("Error!", err);
  };



  const paypalOptions = {
    clientId:"ASgLRZ4iCd_ijakIF5qE9CLiJY-lOiQN9kF50GNJ4d4g5lCJq5PhIaqhOSI9bJObkp4X6mgD0Op_DBCf",
    currency:"USD",
    debug:true,
    intent:"capture"
  };

  return (
    <section className="section-b-space">
      <Container>
        <div className="checkout-page">
          <div className="checkout-form">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col lg="6" sm="12" xs="12">
                  <div className="checkout-title">
                    <h3>Billing Details</h3>
                  </div>
                  <div className="row check-out">
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">First Name</div>
                      <input
                        type="text"
                        className={`${errors.firstName ? "error_border" : ""}`}
                        name="first_name"
                        ref={register({ required: true })}
                      />
                      <span className="error-message">
                        {errors.firstName && "First name is required"}
                      </span>
                    </div>
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Last Name</div>
                      <input
                        type="text"
                        className={`${errors.last_name ? "error_border" : ""}`}
                        name="last_name"
                        ref={register({ required: true })}
                      />
                      <span className="error-message">
                        {errors.last_name && "Last name is required"}
                      </span>
                    </div>
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Phone</div>
                      <input
                        type="text"
                        name="phone"
                        className={`${errors.phone ? "error_border" : ""}`}
                        ref={register({ pattern: /\d+/ })}
                      />
                      <span className="error-message">
                        {errors.phone && "Please enter number for phone."}
                      </span>
                    </div>
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Email Address</div>
                      <input
                        className="form-control"
                        className={`${errors.email ? "error_border" : ""}`}
                        type="text"
                        name="email"
                        ref={register({
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />
                      <span className="error-message">
                        {errors.email && "Please enter proper email address ."}
                      </span>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <div className="field-label">Country</div>
                      <select name="country" ref={register({ required: true })}>
                        <option>India</option>
                        <option>South Africa</option>
                        <option>United State</option>
                        <option>Australia</option>
                      </select>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <div className="field-label">Address</div>
                      <input
                        className="form-control"
                        className={`${errors.address ? "error_border" : ""}`}
                        type="text"
                        name="address"
                        ref={register({ required: true, min: 20, max: 120 })}
                        placeholder="Street address"
                      />
                      <span className="error-message">
                        {errors.address && "Please right your address ."}
                      </span>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <div className="field-label">Town/City</div>
                      <input
                        className="form-control"
                        type="text"
                        className={`${errors.city ? "error_border" : ""}`}
                        name="city"
                        ref={register({ required: true })}
                        onChange={setStateFromInput}
                      />
                      <span className="error-message">
                        {errors.city && "select one city"}
                      </span>
                    </div>
                    <div className="form-group col-md-12 col-sm-6 col-xs-12">
                      <div className="field-label">State / County</div>
                      <input
                        className="form-control"
                        type="text"
                        className={`${errors.state ? "error_border" : ""}`}
                        name="state"
                        ref={register({ required: true })}
                        onChange={setStateFromInput}
                      />
                      <span className="error-message">
                        {errors.state && "select one state"}
                      </span>
                    </div>
                    <div className="form-group col-md-12 col-sm-6 col-xs-12">
                      <div className="field-label">Postal Code</div>
                      <input
                        className="form-control"
                        type="text"
                        name="pincode"
                        className={`${errors.pincode ? "error_border" : ""}`}
                        ref={register({ pattern: /\d+/ })}
                      />
                      <span className="error-message">
                        {errors.pincode && "Required integer"}
                      </span>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="checkbox"
                        name="create_account"
                        id="account-option"
                      />
                      &ensp;{" "}
                      <label htmlFor="account-option">Create An Account?</label>
                    </div>
                  </div>
                </Col>
                <Col lg="6" sm="12" xs="12">
                  {cartItems && cartItems.length > 0 > 0 ? (
                    <div className="checkout-details">
                      <div className="order-box">
                        <div className="title-box">
                          <div>
                            Product <span>Total</span>
                          </div>
                        </div>
                        <ul className="qty">
                          {cartItems.map((item, index) => (
                            <li key={index}>
                              {item.title} × {item.qty}
                              <span>
                                {symbol}
                                {(item.total).toFixed(2)}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <ul className="sub-total">
                          <li>
                            Subtotal
                            <span className="count">
                              {symbol}
                              {cartTotal}
                            </span>
                          </li>
                          <li>
                            Shipping
                            <div className="shipping">
                              <div className="shopping-option">
                                <input
                                  type="checkbox"
                                  name="free-shipping"
                                  id="free-shipping"
                                />
                                <label htmlFor="free-shipping">
                                  Free Shipping
                                </label>
                              </div>
                              <div className="shopping-option">
                                <input
                                  type="checkbox"
                                  name="local-pickup"
                                  id="local-pickup"
                                />
                                <label htmlFor="local-pickup">
                                  Local Pickup
                                </label>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul className="total">
                          <li>
                            Total{" "}
                            <span className="count">
                              {symbol}
                              {cartTotal}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="payment-box">
                        <div className="upper-box">
                          <div className="payment-options">
                            <ul>
                            <li>
                                <div className="radio-option gpay">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-4"
                                    defaultChecked={true}
                                    onClick={() => checkhandle("Gpay")}
                                  />
                                  <label htmlFor="payment-4">Gpay</label>
                                </div>
                              </li>
                            <li>
                                <div className="radio-option Razorpay">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-3"
                                    onClick={() => checkhandle("Razorpay")}
                                  />
                                  <label htmlFor="payment-3">Razorpay</label>
                                </div>
                              </li>
                              <li>
                                <div className="radio-option stripe">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-2"
                                    onClick={() => checkhandle("stripe")}
                                  />
                                  <label htmlFor="payment-2">Stripe</label>
                                </div>
                              </li>
                              <li>
                                <div className="radio-option paypal">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-1"
                                    onClick={() => checkhandle("paypal")}
                                  />
                                  <label htmlFor="payment-1">
                                    PayPal
                                    <span className="image">
                                      <Media src={paypal} alt="" />
                                    </span>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {cartTotal !== 0 ? (
                          <div className="text-right">
                            {payment === "stripe" ? 
                            (
                              <Card />
                            ) : payment === "paypal" ? (
                              <PayPalButton
                                paypalOptions={paypalOptions}
                                amount={1}
                                onPaymentSuccess={onSuccess}
                                onPaymentError={onError}
                                onApprove={onSuccess}
                                onPaymentCancel={onCancel}
                              />
                            ) : payment === "Razorpay" ? (
                              <button type="submit" className="btn-solid btn">
                                Razorpay Place Order
                              </button>
                            ) : (
                              <GooglePayButton
                              environment="PRODUCTION"
                              paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                  {
                                    type: 'CARD',
                                    parameters: {
                                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                    },
                                    tokenizationSpecification: {
                                      type: 'PAYMENT_GATEWAY',
                                      parameters: {
                                        "gateway": "stripe",
                                        "stripe:version": "2020-08-27",
                                        "stripe:publishableKey": "pk_live_51IYvwgAR19qkTg2Rtd20aLk5vwFsCRajMN8I9aZl8zFfXj14qDxppEDhfLMp51b9OohTumAh7vSlO6IccIP5iIh600zA024lK7"
                                      },
                                    },
                                  },
                                ],
                                merchantInfo: {
                                      merchantId: 'BCR2DN6TV6DL5TL2',
                                      merchantName: 'STW E-Commerce'
                                },
                                transactionInfo: {
                                  totalPriceStatus: 'FINAL',
                                  totalPriceLabel: 'Total',
                                  totalPrice: '1.00',
                                  currencyCode: 'USD',
                                  countryCode: 'US',
                                },
                              }}
                              onLoadPaymentData={paymentRequest => {
                                console.log('load payment data', paymentRequest);
                              }}
                            />
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CheckoutPage;
