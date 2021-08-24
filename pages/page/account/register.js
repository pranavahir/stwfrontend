import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CommonLayout from "../../../components/shop/common-layout";
import { Input, Container, Row, Form, Label, Col } from "reactstrap";
import firebase from "../../../config/base";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const CREATE_CUSTOMER = gql`
mutation($createCustomerCustomerInput: CustomerInput){
  createCustomer(customerInput: $createCustomerCustomerInput) {
    address1
    address2
    city
    country
    customerid
    customerlastname
    customername
    customerredid
    emailid
    facebookid
    googleid
    phonenumber
    pincode
    state    
  }
}
`;





const Register = () => {
  const router = useRouter();
  const [IsOTPVerfied, setIsOTPVerfied] = useState(false);
  const [OldMail, setOldMail] = useState(false);
  const [OTP, setOTP] = useState(null);
  
  
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const [CreateCustomer, { createCustomer }] = useMutation(CREATE_CUSTOMER);
  //Create User with Email and Password
  const [name, setName] = useState(localStorage.getItem("Name"));

  const emailLinkSend = (email) => {
    // [START auth_email_link_send]

    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: "https://shoptheworld.in/",
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: 'example.page.link'
    };

    
    firebase
      .auth()
      .sendSignInLinkToEmail(email,actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    // [END auth_email_link_send]
  }


  
  //otp Verification

  const OTPVerification  = (event)=>{
    if(event.target.value !="" && event.target.value !=null)
    {
      if(event.target.value == OTP && event.target.value.length == 6 ) 
      {
        setIsOTPVerfied(true);
      }
      else
      {
        setIsOTPVerfied(false);
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
        setIsOTPVerfied(false);
        
        //  console.log(OTP);
        // https://mailservice.digitechniq.in/  http://localhost/mailService/
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

  const onSubmit = async (data, e) => {
    if (data !== "") {
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(data.email, data.password)
          .then(function (result) {
            setName(data.email);

            var customerData = {
              customerid: result.user.uid,
              customername: data.first_name + " " + data.last_name,
              phonenumber: "",
              address1: "",
              address2: "",
              city: "",
              state: "",
              country: "",
              emailid: result.user.email,
              googleid: "",
              facebookid: "",
              createdAt: "",
            };

            // emailLinkSend(result.user.email);

            var CustomerData = CreateCustomer({
              variables: { createCustomerCustomerInput: { ...customerData } },
            });
            router.push(`/`);
          });
      } catch (error) {
        setTimeout(() => {
          toast.error("error : " + error.message, error);
        }, 200);
      }
    } else {
      errors.showMessages();
    }
  };

  return (
    <CommonLayout parent="home" title="register">
      <section className="register-page section-b-space">
        <Container>
          <Row>
            <Col lg="12">
              <h3>create account</h3>
              <div className="theme-card ">
                <div className="checkout-page">
                  <div className="checkout-form">
                    <Form
                      className="theme-form"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="row check-out">
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">First Name</div>
                          <input
                            type="text"
                            className="form-control"
                            className={`${
                              errors.first_name ? "error_border" : ""
                            }`}
                            name="first_name"
                            ref={register({ required: true })}
                            placeholder="First Name"
                          />
                          <span className="error-message">
                            {" "}
                            {errors.first_name && "First name is required"}{" "}
                          </span>
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">Last Name</div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            className={`${
                              errors.last_name ? "error_border" : ""
                            }`}
                            name="last_name"
                            ref={register({ required: true })}
                          />
                          <span className="error-message">
                            {" "}
                            {errors.last_name && "Last name is required"}{" "}
                          </span>
                        </div>

                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">Email</div>
                          <input
                            type="text"
                            className="form-control"
                            className={`${errors.email ? "error_border" : ""}`}
                            type="text"
                            name="email"
                            ref={register({
                              required: true,
                              pattern: /^\S+@\S+$/i,
                            })}
                            placeholder="Email"
                            required=""
                          />
                          <span className="error-message">
                            {" "}
                            {errors.email &&
                              "Please enter proper email address ."}{" "}
                          </span>
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">Password</div>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            className={`${
                              errors.password ? "error_border" : ""
                            }`}
                            id="review"
                            placeholder="Enter your password"
                            ref={register({ required: true, min: 8, max: 80 })}
                          />
                          <span className="error-message">
                            {" "}
                            {errors.password &&
                              "Please enter proper password min 9  ."}{" "}
                          </span>
                        </div>
                        <button type="submit" className="btn-solid btn">
                          {" "}
                          Create Account{" "}
                        </button>
                        {/* <a href="#" onClick={() => registerUser(email,password)} className="btn btn-solid">create Account</a> */}
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Register;
