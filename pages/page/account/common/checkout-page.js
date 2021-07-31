import React, { useContext, useState,useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Link from 'next/link'
import { Media, Container, Form, Row, Input, Col,Button  } from "reactstrap";
import { PayPalButton } from "react-paypal-button";
import CartContext from "../../../../helpers/cart";
import paypal from "../../../../public/assets/images/paypal.png";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Card from "../../../../components/stripeCard/Card";
import Axios from "axios";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { CurrencyContext } from "../../../../helpers/Currency/CurrencyContext";
import GooglePayButton from "@google-pay/button-react";
import { useQuery,useLazyQuery } from '@apollo/react-hooks';

const CREATE_OREDER = gql`
  mutation CreateOrderDetail($order: OrderDetail!) {
    CreateOrderDetail(order: $order) {
      orderdetailid
    }
  }
`;

const CREATE_ABANDONED_CART = gql`
  mutation Createabandonedcart($abandonedcart: abandonedcart!) {
    Createabandonedcart(abandonedcart: $abandonedcart) {
      orderdetailid
    }
  }
`;

const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomerDetail($Customer: Customerinfo!) {
    UpdateCustomerDetail(Customer: $Customer) {
        customerredid
    }
  }
`;

const GET_CUSTOMER_BY_UID = gql`
query CustomerByUID ($uid:String!) {
    CustomerByUID (uid:$uid) {
  customerredid
  customername
  customerlastname
  phonenumber
  address1
  address2
  city
  state
  country
  emailid
  googleid
  facebookid
  pincode
    }
}
`;
const  CheckoutPage = ({ isPublic = false }) => {
  
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.state;
  const cartTotal = cartContext.cartTotal.toFixed(2);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state.currency;
  const symbol = curContext.state.symbol;
  const CurrencyConvertionRate = curContext.state.CurrencyConvertionRate;
  const withDiscount = cartContext.withDiscount;
  const withDiscountWithQty = cartContext.withDiscountWithQty;
  const priceCollection = cartContext.priceCollection;
  const discountCalculation  = cartContext.discountCalculation ;

  
 
  
  const GST = curContext.state.gstortax;
  const [obj, setObj] = useState({});
  const [paymentErr, setPaymentErr] = useState("");
  const [IsValidGst, setIsValidGst] = useState(false);
  const [PageLoad, setPageLoad] = useState(false);
  const [IsCustomerPay, setIsCustomerPay] = useState(false);
  const [IsOTPVerfied, setIsOTPVerfied] = useState("notGenerated");
  const [OldMail, setOldMail] = useState(false);
  const [OTP, setOTP] = useState(null);
  

  const [customerId, setCustomerId] = useState(
    localStorage.getItem('CustomerId')
);


var { loading, data } =  useQuery(GET_CUSTOMER_BY_UID, {
  variables: {
      uid: customerId,
  }
});

const errStyle={
    fontSize: "12px",
    color: "red"
}







const IsRight = curContext.state.IsRight;
const country = curContext.state.country;
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
  // const [successObj, setSuccessObj] = useState({});
  const [state, setState] = useState({
    payment: null,
    items: null,
    orderTotal: null,
    symbol: null,
    OrderDetail:null

  });

  const [orderObj, setOrderObj] = useState(
    sessionStorage.getItem('orderObj')
);
const [GstView,setGSTView] = useState(false)
    
    
useEffect(() => {
  sessionStorage.setItem('orderObj', orderObj);
  if(data!=undefined)
  {
    setState({first_name:data.CustomerByUID.customername})
  }

     
  

}, [orderObj]);


  const [url, setUrl] = useState();
  const [payment, setPayment] = useState("stripe");
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
   
  const [emailState, setemailState] = useState("");
  const [Abandonedcart, setAbandonedcart] = useState("");
  const checkhandle = (value) => {
    setPayment(value);
  };

  

  // const [createOrder] = useMutation(CREATE_OREDER);

  
  const [createOrder, { orderedData }] = useMutation(CREATE_OREDER);
  const [createAbandonedCart, { abandonedCartData }] = useMutation(CREATE_ABANDONED_CART);
  const [UpdateCustomer, { CustomerData }] = useMutation(UPDATE_CUSTOMER);

  window.addEventListener('beforeunload', function (e) {
    // Cancel the event

    // makePayment();.
    alert(e);
    console.log(e);
    // e.preventDefault(); 
    // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set

    e.returnValue = 'test';

    
  });
  

  const makePayment = () =>{
    // setIsCustomerPay(true);
  
    var customerData={
      first_name:(obj.first_name==undefined ||  obj.first_name==null || obj.first_name=="" )?"":obj.first_name,
      last_name:obj.last_name==undefined?"":obj.last_name,
      phone:obj.phone==undefined?"":obj.phone,
      email:obj.email==undefined?"":obj.email,
      country:country,
      address:obj.address==undefined?"":obj.address,
      city:obj.city==undefined?"":obj.city,
      state:obj.state==undefined?"":obj.state,
      pincode:obj.pincode==undefined?"":obj.pincode,
      
    }

  if(data !=undefined)
  {
    customerData={
      first_name:(obj.first_name==undefined ||  obj.first_name==null || obj.first_name=="" )?data.CustomerByUID.customername:obj.first_name,
      last_name:obj.last_name==undefined?data.CustomerByUID.customerlastname:obj.last_name,
      phone:obj.phone==undefined?data.CustomerByUID.phonenumber:obj.phone,
      email:obj.email==undefined?data.CustomerByUID.emailid:obj.email,
      country:country,
      address:obj.address==undefined?data.CustomerByUID.address1:obj.address,
      city:obj.city==undefined?data.CustomerByUID.city:obj.city,
      state:obj.state==undefined?data.CustomerByUID.state:obj.state,
      pincode:obj.pincode==undefined?data.CustomerByUID.pincode:obj.pincode,
    }
  }   

    // console.log(data);
    var ListOrder = [];
    var OrderDetail = {
      productsku: "item.sku",
      producttitle: "item.title",
      quantity: 1,
      totalprice: 0,
      customerid: customerId,
      customername: customerData.first_name,
      paymentmethod: "",
      trackingnumber: "",
      orderstatus: "",
      address1:customerData.address,
      address2:"",
      city:customerData.city,
      state:customerData.state,
      country:customerData.country,
      pin:customerData.pincode,
      phone:customerData.phone,
      emailid:customerData.email,
      gst:customerData.GST,
      gstname:customerData.GSTName,
      productimage:""
    };
  
    var orderResult = 0;
    cartItems.map((item, index) => {

      console.log(index);

      OrderDetail = {
        productsku: item.sku,
        producttitle: titleTrim(item.title),
        quantity: (item.qty * 1),
        totalprice: withDiscountWithQty(item.variants,item.qty),
        customerid: customerId,
        customername: "Karupu",
        paymentmethod: "",
        trackingnumber: "",
        orderstatus: "",
        address1:customerData.address,
        address2:"",
        city:customerData.city,
        state:customerData.state,
        country:customerData.country,
        pin:customerData.pincode,
        phone:customerData.phone,
        emailid:customerData.email,
        gst:customerData.GST,
        gstname:customerData.GSTName,
        productimage:item.images[0].mainimageurl
      };
  
  
      ListOrder.push(OrderDetail);
  
      try {
  
        // console.log(OrderDetail);
        var AbandonedCartData = createAbandonedCart({
          variables: { abandonedcart: { ...OrderDetail } },
        });


        //Order mail 
       
       
        //  history.push('/multikart-admin/menus/list-menu')
        //  toast.success("Successfully Added !")
  
      } catch (err) {
        console.log(err.message);
      }
    });


    AbandonedCartMail(ListOrder,customerData);
  
  };
  

  /** Launches payment request flow when user taps on buy button. */
  const onBuyClicked = () => {
    const creditCardPaymentMethod = {
      supportedMethods: "basic-card",
      data: {
        supportedNetworks: ["visa", "mastercard"],
        supportedTypes: ["credit", "debit"],
      },
    };




    const supportedInstruments = [
      {
        supportedMethods: ["https://tez.google.com/pay"],
        //supportedMethods:[creditCardPaymentMethod],
        data: {
          pa: "shoptheworld@dbs",
          pn: "STW E-Commerce",
          tr: "123456ABCDEFSD",
          url: "http://localhost:3000/page/account/checkout",
          mc: "5045",
          tn: "Purchase in Merchant",
        },
      },
    ];

    var details = {
      total: {
        label: "Total",
        amount: {
          currency: "INR",
          value: "10.01", //sample amount
        },
      },
      displayItems: [
        {
          label: "Original Amount",
          amount: {
            currency: "INR",
            value: "10.01",
          },
        },
      ],
    };
    var request = null;
    try {
      request = new PaymentRequest(supportedInstruments, details);
      /*request.show()
    .then(function(result){
        alert("hai");
    })
     .catch(function(err){
        alert('Payment Request Error: '+ err.message+' 74'); 
    });*/
    } catch (e) {
      alert("Payment Request Error: " + e.message);
      //return;
    }
    if (!request) {
      console.log("Web payments are not supported in this browser.");
      // return;
    }

    var canMakePaymentPromise = checkCanMakePayment(request);
    canMakePaymentPromise
      .then(function (result) {
        showPaymentUI(request, result);
      })
      .catch(function (err) {
        console.log("Error in calling checkCanMakePayment: " + err);
      });
  };

  const getPaypalAmount = (amount) =>{
    var finalCurrency = amount;
    finalCurrency = (amount/CurrencyConvertionRate).toFixed(2);
    return finalCurrency;
  }
  
  const calcDomesticFreight = (productList) => {
    var domestic = 0;
    for(var i = 0; i <productList.length; i++)
    {
      domestic += productList[i].variants[0].domesticfreight
    }
    return domestic;
  }
   
  const shippingCharges = calcDomesticFreight(cartItems);
  var price = 0;
  if(shippingCharges!=undefined && shippingCharges!="" && shippingCharges!=0 && shippingCharges > 0)
  {
    price = parseFloat(shippingCharges) + parseFloat(cartTotal);
  }
  else
  {
    price =  parseFloat(cartTotal);
  }
  const fullPrice = price;


  const changeGst = (e) => {
    if(e.target!=null)
    {
      var inputvalues = e.target.value;
      var gstinformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');  
      if (gstinformat.test(inputvalues)) {  
        setIsValidGst(true);
      } else {  
        setIsValidGst(false);
      } 
    }
 
}

const changeGstcheck = (e) => {
  let isChecked = e.target.checked;
  if(isChecked)
  {
    if(country == "India")
    {
      setPayment("Razorpay");
    }
    else
    {
      setPayment("stripe");  
    }
  }
  else{
    setPayment("stripe");
  }
  setGSTView(isChecked)
}
 


  const canMakePaymentCache = "canMakePaymentCache";

  const OrderedMail = async (productDetail,customerDetail) =>{

    
    // https://mailservice.digitechniq.in/  http://localhost/mailService/
    const { error: backendMailError, clientMail } = await fetch(
      "https://mailservice.digitechniq.in/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CRUD:"Order",
          OrderDetail:productDetail,
          CustomerDetail:customerDetail,
          leftSymbol:leftSymbol,
          rightSymbol:rightSymbol,
          fullPrice:fullPrice
        }),
      }
    ).then((r) => r.json());

    if (backendMailError) {
      console.log(backendError.message);
      return;
    }
  }

  const AbandonedCartMail = async (productDetail,customerDetail) =>{

    var domain = window.location.hostname;

    var checkoutURL = "https://"+domain+"/page/account/checkout";
    
    
    // https://mailservice.digitechniq.in/  http://localhost/mailService/
    const { error: backendMailError, clientMail } = await fetch(
      "https://mailservice.digitechniq.in/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CRUD:"AbandonedCart",
          URLData:checkoutURL,
          OrderDetail:productDetail,
          CustomerDetail:customerDetail,
          leftSymbol:leftSymbol,
          rightSymbol:rightSymbol,
          fullPrice:fullPrice
        }),
      }
    ).then((r) => r.json());

    if (backendMailError) {
      console.log(backendError.message);
      return;
    }
  }
 
  const titleTrim=(title)=>{
    var res = null
    if(title!=null)
      res = title.substring(0, 250);
    else
     res = title;

    return res;

  }

  const Orderconformation = (paymentGateway,PaymentDetail,customerData)=>{

    var ListOrder = [];

      if(paymentGateway == "Razorpay")
      {
        var OrderDetail = {
          orderdetailid: 2,
          productsku: "item.sku",
          producttitle: "item.title",
          quantity: 1,
          totalprice: 0,
          customerid: customerId,
          customername: customerData.first_name,
          paymentmethod: "Card - Razorpay - "+PaymentDetail.id,
          trackingnumber: "stw-tkno-0123",
          orderstatus: "Order - Placed",
          address1:customerData.address,
          address2:"",
          city:customerData.city,
          state:customerData.state,
          country:customerData.country,
          pin:customerData.pincode,
          phone:customerData.phone,
          emailid:customerData.email,
          gst:customerData.GST,
          gstname:customerData.GSTName,
          productimage:""
        };
    
        var orderResult = 0;
        cartItems.map((item, index) => {
          OrderDetail = {
            orderdetailid: 2,
            productsku: item.sku,
            producttitle: titleTrim(item.title),
            quantity: (item.qty * 1),
            totalprice: withDiscountWithQty(item.variants,item.qty),
            customerid: customerId,
            customername: customerData.first_name,
            paymentmethod: "Card - Razorpay - " + PaymentDetail.id,
            trackingnumber: "stw-tkno-0123",
            orderstatus: "Order - Placed",
            address1:customerData.address,
            address2:"",
            city:customerData.city,
            state:customerData.state,
            country:customerData.country,
            pin:customerData.pincode,
            phone:customerData.phone,
            emailid:customerData.email,
            gst:customerData.GST,
            gstname:customerData.GSTName,
            productimage:item.images[0].mainimageurl
          };
    

          ListOrder.push(OrderDetail);

          try {

            // console.log(OrderDetail);
            var orderData = createOrder({
              variables: { order: { ...OrderDetail } },
            });

            
            //  history.push('/multikart-admin/menus/list-menu')
            //  toast.success("Successfully Added !")
      
          } catch (err) {
            console.log(err.message);
          }
        });

        

        var NewCustomerData = {
          customerredid:customerId,
          customername:customerData.first_name,
          customerlastname:customerData.last_name,
          phonenumber:customerData.phone,
          address1:customerData.address,
          address2:"",
          city:customerData.city,
          state:customerData.state,
          country:customerData.country,
          emailid:customerData.email,
          pincode:customerData.pincode
      }
  
        var CustomerData = UpdateCustomer({
          variables: { Customer: { ...NewCustomerData } },
        });

      
        //Order mail 
        OrderedMail(ListOrder,customerData);
       
        // console.log(successObj);
         var newObj={
          payment: payment,
            items: cartItems,
            orderTotal: fullPrice,
            symbol: symbol,
            OrderDetail:OrderDetail
        }
        setOrderObj(JSON.stringify(newObj));
        
        cartContext.removeAllItems();
        
        router.push({
          pathname: "/page/order-success",
        });

      }
      else if(paymentGateway=="Stripe")
      {
          var OrderDetail = {
            orderdetailid: 2,
            productsku: "item.sku",
            producttitle: "item.title",
            quantity: 1,
            totalprice: 0,
            customerid: customerId,
            customername: customerData.first_name,
            paymentmethod: "Card - Stripe - "+PaymentDetail.id,
            trackingnumber: "stw-tkno-0123",
            orderstatus: "Order - Placed",
            address1:customerData.address,
            address2:"",
            city:customerData.city,
            state:customerData.state,
            country:customerData.country,
            pin:customerData.pincode,
            phone:customerData.phone,
            emailid:customerData.email,
            gst:customerData.GST,
            gstname:customerData.GSTName
          };
      
          var orderResult = 0;
          cartItems.map((item, index) => {
            OrderDetail = {
              orderdetailid: 2,
              productsku: item.sku,
              producttitle: titleTrim(item.title),
              quantity: (item.qty * 1),
              totalprice: withDiscountWithQty(item.variants,item.qty),
              customerid: customerId,
              customername: customerData.first_name,
              paymentmethod: "Card - Stripe - "+PaymentDetail.id,
              trackingnumber: "stw-tkno-0123",
              orderstatus: "Order - Placed",
              address1:customerData.address,
              address2:"",
              city:customerData.city,
              state:customerData.state,
              country:customerData.country,
              pin:customerData.pincode,
              phone:customerData.phone,
              emailid:customerData.email,
              gst:customerData.GST,
              gstname:customerData.GSTName,
              productimage:item.images[0].mainimageurl
            };
      

            ListOrder.push(OrderDetail);

            try {
              var orderData = createOrder({
                variables: { order: { ...OrderDetail } },
              });

              //  history.push('/multikart-admin/menus/list-menu')
              //  toast.success("Successfully Added !")
            } catch (err) {
              console.log(err.message);
            }
          });

          var NewCustomerData = {
            customerredid:customerId,
            customername:customerData.first_name,
            customerlastname:customerData.last_name,
            phonenumber:customerData.phone,
            address1:customerData.address,
            address2:"",
            city:customerData.city,
            state:customerData.state,
            country:customerData.country,
            emailid:customerData.email,
            pincode:customerData.pincode
        }
    
          var CustomerData = UpdateCustomer({
            variables: { Customer: { ...NewCustomerData } },
          });

             //Order mail 
             OrderedMail(ListOrder,customerData);

        // console.log(successObj);
        var newObj={
          payment: payment,
            items: cartItems,
            orderTotal: fullPrice,
            symbol: symbol,
            OrderDetail:OrderDetail
        }


        setOrderObj(JSON.stringify(newObj));
        cartContext.removeAllItems();
 
        router.push({
          pathname: "/page/order-success",
        });

      }
      else if(paymentGateway=="PayPal")
      {
          var OrderDetail = {
            orderdetailid: 2,
            productsku: "item.sku",
            producttitle: "item.title",
            quantity: 1,
            totalprice: 0,
            customerid: customerId,
            customername: customerData.first_name,
            paymentmethod: "Card - PayPal - "+PaymentDetail.id,
            trackingnumber: "stw-tkno-0123",
            orderstatus: "Order - Placed",
            address1:customerData.address,
            address2:"",
            city:customerData.city,
            state:customerData.state,
            country:customerData.country,
            pin:customerData.pincode,
            phone:customerData.phone,
            emailid:customerData.email,
            gst:customerData.GST,
            gstname:customerData.GSTName
          };
      
          var orderResult = 0;
          cartItems.map((item, index) => {
            OrderDetail = {
              orderdetailid: 2,
              productsku: item.sku,
              producttitle: titleTrim(item.title),
              quantity: (item.qty * 1),
              totalprice: withDiscountWithQty(item.variants,item.qty),
              customerid: customerId,
              customername: customerData.first_name,
              paymentmethod: "Card - Paypal - "+PaymentDetail.id,
              trackingnumber: "stw-tkno-0123",
              orderstatus: "Order - Placed",
              address1:customerData.address,
              address2:"",
              city:customerData.city,
              state:customerData.state,
              country:customerData.country,
              pin:customerData.pincode,
              phone:customerData.phone,
              emailid:customerData.email,
              gst:customerData.GST,
              gstname:customerData.GSTName,
              productimage:item.images[0].mainimageurl
            };

            ListOrder.push(OrderDetail);
            
            try {
              var orderData = createOrder({
                variables: { order: { ...OrderDetail } },
              });

              //  history.push('/multikart-admin/menus/list-menu')
              //  toast.success("Successfully Added !")
            } catch (err) {
              console.log(err.message);
            }
          });

          var NewCustomerData = {
            customerredid:customerId,
            customername:customerData.first_name,
            customerlastname:customerData.last_name,
            phonenumber:customerData.phone,
            address1:customerData.address,
            address2:"",
            city:customerData.city,
            state:customerData.state,
            country:customerData.country,
            emailid:customerData.email,
            pincode:customerData.pincode
        }
    
          var CustomerData = UpdateCustomer({
            variables: { Customer: { ...NewCustomerData } },
          });

              //Order mail 
              OrderedMail(ListOrder,customerData);

        // console.log(successObj);
        var newObj={
          payment: payment,
            items: cartItems,
            orderTotal: fullPrice,
            symbol: symbol,
            OrderDetail:OrderDetail
        }


        setOrderObj(JSON.stringify(newObj));
        cartContext.removeAllItems();
 
        router.push({
          pathname: "/page/order-success",
        });

      }
      

     


  }
  // const loadScript=(src) =>

  const checkCanMakePayment = (request) => {
    // Checks canMakePayment cache, and use the cache result if it exists.
    if (sessionStorage.hasOwnProperty(canMakePaymentCache)) {
      return Promise.resolve(JSON.parse(sessionStorage[canMakePaymentCache]));
    }

    // If canMakePayment() isn't available, default to assuming that the method is supported
    var canMakePaymentPromise = request.canMakePayment();

    if (request.canMakePayment) {
      canMakePaymentPromise = request.canMakePayment();
    }

    return canMakePaymentPromise
      .then(function (result) {
        sessionStorage[canMakePaymentCache] = result;
        return result;
      })
      .catch(function (err) {
        alert("Error calling canMakePayment: " + err);
        console.log("Error calling canMakePayment: " + err);
      });
  };

  const showPaymentUI = (request, canMakePayment) => {
    if (!canMakePayment) {
      handleNotReadyToPay();
      return;
    }
    // Set payment timeout.
    var paymentTimeout = window.setTimeout(function () {
      window.clearTimeout(paymentTimeout);
      request
        .abort()
        .then(function () {
          alert("Payment timed out after 20 mins 129");
          console.log("Payment timed out after 20 mins");
        })
        .catch(function () {
          alert("Unable to abort,user is in process of paying 132");
          console.log("Unable to abort,user is in process of paying");
        });
    }, 20 * 60 * 1000);
    request
      .show()
      .then(function (paymentResponse) {
        window.clearTimeout(paymentTimeout);
        alert("Request Success");
        console.log(paymentResponse);
        processResponse(paymentResponse); // Handle response from browser
      })
      .catch(function (err) {
        alert(err + "142");
        console.log(err);
      });
  };

  const handleNotReadyToPay = () => {
    alert("Tez is not ready to handle 149");
  };

  const processResponse = (paymentResponse) => {
    var paymentResponseString = paymentResponseToJsonString(paymentResponse);
    // console.log(paymentResponseString);
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

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const stripeSubmit = async (e, customerData) => {
    // Orderconformation("Stripe","paymentIntent",customerData);
    // We don't want to let default form submission happen here,
    // which would refresh the page.
 
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      console.log("Stripe.js has not yet loaded.");
      return;
    }

    var amount = fullPrice * 100;
    const { error: backendError, clientSecret } = await fetch(
      "https://stripeserver.digitechniq.in/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodType: "card",
          amount: amount,
          currency: currency,
          customer: customerData.email,
        }),
      }
    ).then((r) => r.json());

    if (backendError) {
      console.log(backendError.message);
      setPaymentErr(backendError.message);      
      setPageLoad(false);
      return;
    }

    // console.log('Client secret returned');
    var customerInfo =
      customerData.first_name +
      " - " +
      customerData.last_name +
      " - " +
      customerData.phone +
      " - " +
      customerData.email;
    const {
      error: stripeError,
      paymentIntent,
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: customerInfo,
        },
      },
    });

    if (stripeError) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(stripeError.message);
      setPaymentErr(stripeError.message);
      if(customerData.country=="India")
      {
      checkhandle("Razorpay");
      razorPayPaymentHandler(customerData);   
      }
      
      setPageLoad(false);
      return;
    } else {
      setPageLoad(false);
      Orderconformation("Stripe",paymentIntent,customerData);
    }
    console.log(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
  };

  const razorPayPaymentHandler = async (filledData) => {

  // Orderconformation("Razorpay","test",filledData);

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setPageLoad(false);
      return;
    }

    const API_URL = `https://razorpaypayment.digitechniq.in/razorpay/`;
    // const API_URL = `http://localhost:7000/razorpay/`;
    
    const orderUrl = `${API_URL}order`;
    const response = await Axios.post(orderUrl, { amount: fullPrice });
    const { data } = response;
    // console.log("App -> razorPayPaymentHandler -> data", data);

    const options = {
      key: "", //replace razorpay API key
      name: filledData.first_name,
      description: titleTrim(cartItems[0].title),
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          // console.log(paymentId);
          // const url = `https://razorpaypayment.digitechniq.in/razorpay/capture/${paymentId}`;
          const url = `https://razorpaypayment.digitechniq.in/razorpay/capture/${paymentId}`;
          const captureResponse = await Axios.post(url, {
            amount: fullPrice,
          });
          const successObj = JSON.parse(captureResponse.data);
          const captured = successObj.captured;
          // console.log("App -> razorPayPaymentHandler -> captured", successObj);
          if (captured) {
            setPageLoad(false);
            Orderconformation("Razorpay",successObj,filledData);
          }
          else
          {
            setPageLoad(false);
          }
        } catch (err) {
          console.log(err);
          setPaymentErr(err)
          setPageLoad(false);
        }
      },
      theme: {
        color: "#ff4c3b",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    setPageLoad(false);
  };

  const onSuccess = (payment) => {


    var CustDetails={
      first_name:(obj.first_name==undefined ||  obj.first_name==null || obj.first_name=="" )?data.CustomerByUID.customername:obj.first_name,
      last_name:obj.last_name==undefined?data.CustomerByUID.customerlastname:obj.last_name,
      phone:obj.phone==undefined?data.CustomerByUID.phonenumber:obj.phone,
      email:obj.email==undefined?data.CustomerByUID.emailid:obj.email,
      country:country,
      address:obj.address==undefined?data.CustomerByUID.address1:obj.address,
      city:obj.city==undefined?data.CustomerByUID.city:obj.city,
      state:obj.state==undefined?data.CustomerByUID.state:obj.state,
      pincode:obj.pincode==undefined?data.CustomerByUID.pincode:obj.pincode,
    }

    Orderconformation("PayPal",payment,CustDetails);
    setPageLoad(false);
    
  };

  const onSubmit = (data, e,paymentinfo) => {

    if (data !== "") {

     
      setPageLoad(true);

      if (payment == "stripe") {
        stripeSubmit(e, data);
      } else if (payment == "Razorpay") {
        razorPayPaymentHandler(data);
      } else if (payment == "Gpay") {
        onBuyClicked();
        // razorPayPaymentHandler(data);
      }
      else if (payment == "paypal") {
        onSuccess(data);
        // razorPayPaymentHandler(data);
      }
    } else {
      errors.showMessages();
    }
  };


  //otp Verification

    const OTPVerification  = (event)=>{
      if(event.target.value !="" && event.target.value !=null)
      {
        if(event.target.value == OTP && event.target.value.length == 6 ) 
        {
          setIsOTPVerfied("Verified");
          makePayment();
        }
        else if(event.target.value != OTP && event.target.value.length >= 6 ) 
        {
          setIsOTPVerfied("NotVerfied");
        }
      }
    }



  // email verfication and sending the otp message top customer.
  const emailVarification = async (event) => {

    if(event.target != null)
    {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var result =  re.test(String(event.target.value).toLowerCase());
  
      if(result)
      {
        setemailState("")
        if(OldMail != event.target.value)
        {
          var digits = '0123456789';
          var G_OTP="";
          setOTP(null);
          for (let i = 0; i < 6; i++ ) {
            G_OTP += digits[Math.floor(Math.random() * 10)];
          }
          setOTP(G_OTP);
          setIsOTPVerfied("Generated");
          
          //  console.log(OTP);
          // https://mailservice.digitechniq.in/  http://localhost/mailService/
          // alert(event.target.value);
          setOldMail(event.target.value);
          await fetch("https://mailservice.digitechniq.in/",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             CRUD:"OTP",
             OTP:G_OTP,
             email:event.target.value
           }),
         }
       ).then((r) => console.log(r));

        }
       }  
      else
      {
        setemailState("error_border")
      }
    }
  }


  const setStateFromInput = (event) => {
    obj[event.target.name] = event.target.value;
    
     
    // last_name:obj.last_name==undefined?data.CustomerByUID.customerlastname:obj.last_name,
    // phonenumber:obj.phonenumber==undefined?data.CustomerByUID.phonenumber:obj.phonenumber,
    // email:obj.email==undefined?data.CustomerByUID.emailid:obj.email,
    // country:country,
    // address:obj.address==undefined?data.CustomerByUID.address1:obj.address,
    // city:obj.city==undefined?data.CustomerByUID.city:obj.city,
    // state:obj.state==undefined?data.CustomerByUID.state:obj.state,
    // pincode:obj.pincode==undefined?data.CustomerByUID.pincode:obj.pincode,

    if(event.target.name == "first_name" )
    {
      setState({first_name:event.target.value})
      if(data!=undefined)
      data.CustomerByUID.customername = event.target.value;
    }  
    
    if(event.target.name == "last_name" )
    {
      setState({last_name:event.target.value})
      if(data!=undefined)
      data.CustomerByUID.customerlastname = event.target.value;
    }  
    
    if(event.target.name == "phone" )
    {
      setState({phone:event.target.value})
      if(data!=undefined)
      data.CustomerByUID.phonenumber = event.target.value;
    }  
    
    if(event.target.name == "email" )
    {
      setState({email:event.target.value})
      if(data!=undefined)
        data.CustomerByUID.emailid = event.target.value;
      
    }  
     
      setState({country:country})
      if(data!=undefined)
        data.CustomerByUID.country = country;
     
    if(event.target.name == "address" )
    {
      setState({address:event.target.value})
      if(data!=undefined)
      data.CustomerByUID.address1 = event.target.value;
    }  
    
    if(event.target.name == "city" )
    {
      setState({city:event.target.value})
      if(data!=undefined)
      data.CustomerByUID.city = event.target.value;
    }  
    
    if(event.target.name == "state" )
    {
      setState({state:event.target.value})
      if(data!=undefined)
      data.CustomerByUID.state = event.target.value;
    }  
    
    if(event.target.name == "pincode" )
    {
      setState({pincode:event.target.value})
      if(data!=undefined)
      data.CustomerByUID.pincode = event.target.value;
    }  
    


    setObj(obj);
  };

  const onCancel = (PaymentData) => {
    console.log("The payment was cancelled!", PaymentData);
  };

  const onError = (err) => {
    console.log("Paypal not display");
    console.log("Error!", err);
  };

  const paypalOptions = {
    
    clientId:"ASgLRZ4iCd_ijakIF5qE9CLiJY-lOiQN9kF50GNJ4d4g5lCJq5PhIaqhOSI9bJObkp4X6mgD0Op_DBCf", 
    // "ASgLRZ4iCd_ijakIF5qE9CLiJY-lOiQN9kF50GNJ4d4g5lCJq5PhIaqhOSI9bJObkp4X6mgD0Op_DBCf",
    
    currency: "USD",
    debug: false,
    intent: "capture",
  };

  const smallh6obj = {
    fontSize: "10px",
    fontWeight: "bold",
}

const smallcontain = {
  marginTop: "10px",
  borderBottom: "solid 0.5px red",
  paddingBottom: "5px"
}

const rightAligh = {
  textAlign:"Right"
}
const geoLocation = sessionStorage.getItem('getLocation')

  return (
    <section className="section-b-space">

    {PageLoad ? <div class="load-container load1">
    <div className="top-banner-wrapper" >
                                     
                                     <div className="row mx-0 margin-default">
                                             <div className="col-xl-12 col-lg-12 col-12">
                                             <div className="typography_section"> 
                                                 <div className="typography-box"> 
                                                     <div  className="custom-load typo-content loader-typo" >
                                                          <div className="pre-loader"></div>
                                                     </div>
                                                 </div>
                                             </div>
                                             </div>
                                             </div>
                                             </div>      
    </div> : "" }

    
      <Container>
        <div className="checkout-page">
          <div className="checkout-form">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col lg="6" sm="12" xs="12">
                  <div className="checkout-title">
                    <h3>Billing Details</h3>
                  </div>
                  {data != undefined ? 
                  <div className="row check-out">
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">First Name</div>
                      {(data.CustomerByUID.customername!="" && data.CustomerByUID.customername!=null) ? <input
                        type="text"
                        className={`${errors.first_name ? "error_border" : ""}`}
                        name="first_name"
                        onChange={setStateFromInput}
                        value={data.CustomerByUID.customername}
                        ref={register({ required: true })}
                      /> : <input
                        type="text"
                        className={`${errors.first_name ? "error_border" : ""}`}
                        name="first_name"
                        value={data.CustomerByUID.customername}
                        onChange={setStateFromInput}
                        ref={register({ required: true })}
                      />}
                      <span className="error-message">
                        {errors.first_name && "First name is required"}
                      </span>
                    </div>
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Last Name</div>
                      {(data.CustomerByUID.customerlastname!="" && data.CustomerByUID.customerlastname!=null) ?  <input
                        type="text"
                        className={`${errors.last_name ? "error_border" : ""}`}
                        value={data.CustomerByUID.customerlastname}
                        name="last_name"
                        onChange={setStateFromInput}
                        ref={register({ required: true })}
                      />:<input
                        type="text"
                        className={`${errors.last_name ? "error_border" : ""}`}
                        name="last_name"
                        onChange={setStateFromInput}
                        ref={register({ required: true })}
                      />}
                      <span className="error-message">
                        {errors.last_name && "Last name is required"}
                      </span>
                    </div>
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Phone</div>
                      {(data.CustomerByUID.phonenumber!="" && data.CustomerByUID.customerlastname!=null) ?  <input
                        type="text"
                        name="phone"
                        onChange={setStateFromInput}
                        value={data.CustomerByUID.phonenumber}
                        className={`${errors.phone ? "error_border" : ""}`}
                        ref={register({ pattern: /\d+/ })}
                      />:<input
                        type="text"
                        name="phone"
                        onChange={setStateFromInput}
                        className={`${errors.phone ? "error_border" : ""}`}
                        ref={register({ pattern: /\d+/ })}
                      />}
                      
                      <span className="error-message">
                        {errors.phone && "Please enter number for phone."}
                      </span>
                    </div>
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Email Address</div> 
                      {(data.CustomerByUID.emailid!="" && data.CustomerByUID.emailid!=null) ? <input
                        className="form-control"
                        className={`${errors.email ? "error_border" : ""}`}
                        type="text"
                        name="email"
                        onBlur={emailVarification}
                        autocomplete="off"
                        onChange={setStateFromInput}
                        value={data.CustomerByUID.emailid}
                        ref={register({
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />:<input
                        className="form-control"
                        className={`${errors.email ? "error_border" : ""}`}
                        type="text"
                        name="email"
                        onBlur={emailVarification}
                        autocomplete="off"
                        onChange={setStateFromInput}
                        ref={register({
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />}
                      <span className="error-message">
                        {errors.email && "Please enter proper email address ."}
                      </span>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                    <div className="shopping-option">
                                <input
                                  type="checkbox"
                                  name="free_shipping"
                                  id="free-shipping"
                                  onChange={changeGstcheck}
                                />&nbsp;
                                <label htmlFor="free-shipping" className="field-label">
                                {GST} Invoice
                                </label>
                              </div>
                       
                    </div>
                   {GstView==true?
 
                   <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">{GST} Number</div>
                      <input
                        className="form-control"
                        onChange={changeGst}
                        type="text"
                        name="GST"
                        className={`${errors.gstnum ? "error_border" : ""}`}
                        ref={register({ pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/ })}
                      />
                      <span className="error-message">
                        {errors.GST && "Please enter number for " + {Gst} +"Number."}
                      </span>
                    </div>:""} 
                    {GstView==true?
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Company name as in {GST}</div>
                      <input
                        className="form-control"
                        type="text"
                        name="GSTName"
                      /></div>  
                      :""} 
                 
                   
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <div className="field-label">Country</div>
                      <select name="country" ref={register({ required: true })}>
                        <option>{country}</option>
                        {/* <option>South Africa</option>
                        <option>United State</option>
                        <option>Australia</option> */}
                      </select>
                    </div>

                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <div className="field-label">Address</div>
                      {(data.CustomerByUID.address1!="" && data.CustomerByUID.address1!=null) ?  <input
                        className="form-control"
                        className={`${errors.address ? "error_border" : ""}`}
                        type="text"
                        name="address"
                        onChange={setStateFromInput}
                        value={data.CustomerByUID.address1}
                        ref={register({ required: true, min: 20, max: 120 })}
                        placeholder="Street address"
                      />:<input
                        className="form-control"
                        className={`${errors.address ? "error_border" : ""}`}
                        type="text"
                        name="address"
                        onChange={setStateFromInput}
                        ref={register({ required: true, min: 20, max: 120 })}
                        placeholder="Street address"
                      />}
                      <span className="error-message">
                        {errors.address && "Please right your address ."}
                      </span>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <div className="field-label">Town/City</div>
                      {(data.CustomerByUID.city!="" && data.CustomerByUID.city!=null) ?  <input
                        className="form-control"
                        type="text"
                        className={`${errors.city ? "error_border" : ""}`}
                        value={data.CustomerByUID.city}
                        name="city"
                        ref={register({ required: true })}
                        onChange={setStateFromInput}
                      />:<input
                        className="form-control"
                        type="text"
                        className={`${errors.city ? "error_border" : ""}`}
                        name="city"
                        ref={register({ required: true })}
                        onChange={setStateFromInput}
                      />}
                      <span className="error-message">
                        {errors.city && "select one city"}
                      </span>
                    </div>
                    <div className="form-group col-md-12 col-sm-6 col-xs-12">
                      <div className="field-label">State / County</div>
                      {(data.CustomerByUID.state!="" && data.CustomerByUID.state!=null) ?  <input
                        className="form-control"
                        type="text"
                        className={`${errors.state ? "error_border" : ""}`}
                        name="state"
                        value={data.CustomerByUID.state}
                        ref={register({ required: true })}
                        onChange={setStateFromInput}
                      />:<input
                        className="form-control"
                        type="text"
                        className={`${errors.state ? "error_border" : ""}`}
                        name="state"
                        ref={register({ required: true })}
                        onChange={setStateFromInput}
                      />}
                      <span className="error-message">
                        {errors.state && "select one state"}
                      </span>
                    </div>
                    <div className="form-group col-md-12 col-sm-6 col-xs-12">
                      <div className="field-label">Postal Code</div>
                      {(data.CustomerByUID.pincode!="" && data.CustomerByUID.pincode!=null) ?  <input
                        className="form-control"
                        type="text"
                        name="pincode"
                        onChange={setStateFromInput}
                        value={data.CustomerByUID.pincode}
                        className={`${errors.pincode ? "error_border" : ""}`}
                        ref={register({ pattern: /\d+/ })}
                      />:<input
                        className="form-control"
                        type="text"
                        name="pincode"
                        onChange={setStateFromInput}
                        className={`${errors.pincode ? "error_border" : ""}`}
                        ref={register({ pattern: /\d+/ })}
                      />}
                      <span className="error-message">
                        {errors.pincode && "Required integer"}
                      </span>
                    </div>
                    { customerId == "" ?                     
                    <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="checkbox"
                        name="create_account"
                        id="account-option"
                      />
                    
                      &ensp;{" "}
                      <label htmlFor="account-option">Create An Account?</label>
                    </div> : "" }
                    

                  </div>
                  :<div className="row check-out">
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">First Name</div>
                      <input
                        type="text"
                        className={`${errors.first_name ? "error_border" : ""}`}
                        name="first_name"
                        onChange={setStateFromInput}
                        ref={register({ required: true })}
                      />
                      <span className="error-message">
                        {errors.first_name && "First name is required"}
                      </span>
                    </div>
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Last Name</div>
                      <input
                        type="text"
                        className={`${errors.last_name ? "error_border" : ""}`}
                        name="last_name"
                        onChange={setStateFromInput}
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
                        onChange={setStateFromInput}
                        className={`${errors.phone ? "error_border" : ""}`}
                        ref={register({ pattern: /\d+/ })}
                      />
                      <span className="error-message">
                        {errors.phone && "Please enter number for phone."}
                      </span>
                    </div>
                   {IsOTPVerfied!="Verified" ? <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Email Address</div>
                      <input
                        className="form-control"
                        className={`${errors.email ? "error_border" : emailState}`}
                        type="text"
                        name="email"
                        onBlur={emailVarification}
                        autocomplete="off"
                        onChange={setStateFromInput}
                        ref={register({
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />
                      <span className="error-message">
                        {(errors.email || emailState) && "Please enter proper email address ."}
                      </span>
                      
                    </div>: <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Email Address</div>
                      <div className="field-label">{OldMail}</div>
                    </div> } 
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      {false ? <div> <div className="field-label">Mobile OTP</div>
                      <input
                        className="form-control"
                        className={`${errors.email ? "error_border" : emailState}`}
                        type="text"
                        name="email"
                        onBlur={emailVarification}
                        autocomplete="off"
                        onChange={setStateFromInput}
                        ref={register({
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />
                      <span className="error-message">
                        {(errors.email || emailState) && "Please enter proper email address ."}
                      </span> </div> :""}
                      
                      
                    </div>
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                   {(OTP!=null && OTP!="") ? (IsOTPVerfied!="Verified" ? <div>
                    <div className="row form-group col-md-6 col-sm-6 col-xs-12">
                      <input
                        className="form-control"
                        type="text"
                        name="otp"
                        onBlur={OTPVerification}
                        onChange={OTPVerification}
                      />
                    </div>
                    {IsOTPVerfied=="NotVerfied" ? <span className="error-message">
                        Invalid OTP, Please enter valid OTP.
                      </span>:<span className="error-message">
                         OTP has been sent on your Email. 
                      </span>}
                    </div> : (IsOTPVerfied=="Verified" ? <span className="error-message">
                        OTP has been Verified.
                      </span>:(IsOTPVerfied=="NotVerfied" ? <span className="error-message">
                        Invalid OTP, Please enter valid OTP.
                      </span>:""))
                    ):""}
                    
                    

                    {/* <div className="row form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Email OTP</div>
                      <input
                        className="form-control"
                        type="text"
                        name="email"
                        onBlur={OTPVerification}
                        onChange={OTPVerification}
                      />
                      <span className="error-message">
                        {(IsOTPVerfied) && "Please enter proper email address ."}
                      </span>
                      
                    </div> */}
                      
                      
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                    <div className="shopping-option">
                                <input
                                  type="checkbox"
                                  name="free_shipping"
                                  id="free-shipping"
                                  onChange={changeGstcheck}
                                />&nbsp;
                                <label htmlFor="free-shipping" className="field-label">
                                {GST} Invoice
                                </label>
                              </div>
                       
                    </div>
                   {GstView==true?
 
                   <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">{GST} Number</div>
                      <input
                        className="form-control"
                        onChange={changeGst}
                        type="text"
                        name="GST"
                        className={`${errors.gstnum ? "error_border" : ""}`}
                        ref={register({ pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/ })}
                      />
                      <span className="error-message">
                        {errors.GST && "Please enter number for " + {Gst} +"Number."}
                      </span>
                    </div>:""} 
                    {GstView==true?
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                      <div className="field-label">Company name as in {GST}</div>
                      <input
                        className="form-control"
                        type="text"
                        name="GSTName"
                      /></div>  
                      :""} 
                 
                   
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <div className="field-label">Country</div>
                      <select name="country" ref={register({ required: true })}>
                        <option>{country}</option>
                        {/* <option>South Africa</option>
                        <option>United State</option>
                        <option>Australia</option> */}
                      </select>
                    </div>

                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <div className="field-label">Address</div>
                      <input
                        className="form-control"
                        className={`${errors.address ? "error_border" : ""}`}
                        type="text"
                        name="address"
                        onChange={setStateFromInput}
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
                        onChange={setStateFromInput}
                        className={`${errors.pincode ? "error_border" : ""}`}
                        ref={register({ pattern: /\d+/ })}
                      />
                      <span className="error-message">
                        {errors.pincode && "Required integer"}
                      </span>
                    </div>
                    { customerId == "" ?                     
                    <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="checkbox"
                        name="create_account"
                        id="account-option"
                      />
                      {customerId}
                      &ensp;{" "}
                      <label htmlFor="account-option">Create An Account?</label>
                    </div> : "" }
                  </div>}
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
                              <span style = {rightAligh}>
                                {symbol}
                                {/* {item.total.toFixed(2)} */}
                                {(withDiscount(item.variants))}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <ul className="sub-total">
                        
                          <li>
                          Delivery charges
                            {shippingCharges!=undefined && shippingCharges!="" && shippingCharges!=0 && shippingCharges > 0 ?
                            <span className="count" style = {rightAligh}>
                              {symbol}
                              {parseFloat(shippingCharges)}
                            </span>:
                            <span className="count" style = {rightAligh}>
                            Free - {symbol}
                               0.00
                            </span>
                             }
                          </li>
                          </ul>
                          <ul className="sub-total">
                          <li>
                            Subtotal
                            <span className="count" style = {rightAligh}>
                              {symbol}
                              {fullPrice}
                            </span>
                          </li>
                        </ul>
                        <ul className="total">
                          <li>
                            Total{" "}
                            <span className="count" style = {rightAligh}>
                              {symbol}
                              {fullPrice}
                            </span>
                          </li>
                        </ul>
                      </div>
                      {/* {IsCustomerPay==false?<Button type="submit" onClick={() => makePayment()} className="btn btn-solid">Make Payment</Button>: */}
                      <div className="payment-box">
                        <div className="upper-box">
                          <div className="payment-options">
                            <ul>
                              {/* <li>
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
                              </li> */}
                              {(GstView && country == "India")?<li>
                                <div className="radio-option Razorpay">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-3"
                                    defaultChecked={true}
                                    onClick={() => checkhandle("Razorpay")}
                                  />
                                  <label htmlFor="payment-3">Razorpay</label>
                                </div>
                              </li> : ""  } 
                              {!GstView || (GstView && country != "India") ?<li>
                                <div className="radio-option stripe">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-2"
                                    defaultChecked={true}
                                    onClick={() => checkhandle("stripe")}
                                  />
                                  <label htmlFor="payment-2">Credit Cards / Debit Cards</label>
                                </div>
                                {/* {cartTotal !== 0 ? (<div className="text-right">{payment === "stripe" ? (<Card />) :""} </div>):""} */}
                              </li>: ""  } 
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
                        {fullPrice !== 0 ? (
                          <div className="text-right">
                            {payment === "stripe" ? (
                              <div>
                              <Card />
                              {paymentErr =="" ? "" :<div> <label style= {errStyle} ><i className="fa fa-window-close " aria-hidden="true"></i><b> Translation failed </b>:  {paymentErr} </label> <label className = "warStyle" ><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> To use this card, enable it for international transactions or choose another card. </label></div> } 
                              </div>
                            ) : payment === "paypal" ? (
                              <PayPalButton
                                paypalOptions={paypalOptions}
                                amount={ getPaypalAmount(fullPrice)}
                                onPaymentSuccess={onSubmit }
                                onPaymentError={onError}
                                onApprove={(onSubmit)}
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
                                      type: "CARD",
                                      parameters: {
                                        allowedAuthMethods: [
                                          "PAN_ONLY",
                                          "CRYPTOGRAM_3DS",
                                        ],
                                        allowedCardNetworks: [
                                          "MASTERCARD",
                                          "VISA",
                                        ],
                                      },
                                      tokenizationSpecification: {
                                        type: "PAYMENT_GATEWAY",
                                        parameters: {
                                          gateway: "stripe",
                                          "stripe:version": "2020-08-27",
                                          "stripe:publishableKey":
                                            "pk_live_51IYvwgAR19qkTg2Rtd20aLk5vwFsCRajMN8I9aZl8zFfXj14qDxppEDhfLMp51b9OohTumAh7vSlO6IccIP5iIh600zA024lK7",
                                        },
                                      },
                                    },
                                  ],
                                  merchantInfo: {
                                    merchantId: "BCR2DN6TV6DL5TL2",
                                    merchantName: "STW E-Commerce",
                                  },
                                  transactionInfo: {
                                    totalPriceStatus: "FINAL",
                                    totalPriceLabel: "Total",
                                    totalPrice: "1.00",
                                    currencyCode: "USD",
                                    countryCode: "US",
                                  },
                                }}
                                onLoadPaymentData={(paymentRequest) => {
                                  console.log(
                                    "load payment data",
                                    paymentRequest
                                  );
                                }}
                              />
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      {/* } */}
                    </div>
                  ) : (
                    ""
                  )}
                  <h6 style={smallcontain}><p style={smallh6obj} >* * Within 7 days of delivery, you may return new, unopened merchandise in its original condition. Exceptions and restrictions apply. See our <a href="#"><Link href={geoLocation+`/page/returns-refund`} >Returns & Refunds</Link></a></p>
                  <p style={smallh6obj} >* *  100% safe and secure</p></h6>
                </Col>
              </Row>
              
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default  CheckoutPage;
