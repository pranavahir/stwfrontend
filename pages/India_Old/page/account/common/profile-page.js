import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Input, Label, Col } from 'reactstrap';
import firebase ,{googleProvider,facebookProvider} from '../../../../../config/base'
import { useForm } from "react-hook-form";

const ProfilePage = () => {
  
    const [userId, setUserId] = useState(null);
    const [mailId, setMailId] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [displayName, setDisplayName] = useState(null);
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    useEffect(() => {
 
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;
        console.log(user);
        if (user != null) {
            
            if(user.displayName != null)
            setDisplayName(user.displayName)
            else
            setDisplayName(user.email)

            // displayName = ;
            setMailId(user.email);
        //   mailId = user.email;

        setPhoneNumber(user.phoneNumber);
        //   phoneNumber = user.phoneNumber/

          photoUrl = user.photoURL;
          emailVerified = user.emailVerified;
          setUserId(user.uid)
        //   userId = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                           // this value to authenticate with your backend server, if
                           // you have one. Use User.getToken() instead.
       
        }

    }, []);

 

    const onSubmit = (data, e) => {
 //country code plus your phone number excluding leading 0 if exists.
 var phoneNumber = "+91 7299693937"; //you could provide a prompt/modal or other field in your UX to replace this phone number.

 // let phoneNumber = "+441234567890"; //testing number, ideally you should set this in your firebase auth settings
 // var verificationCode = "123456";

 // Turn off phone auth app verification.
 // firebase.auth().settings.appVerificationDisabledForTesting = true;

 // This will render a fake reCAPTCHA as appVerificationDisabledForTesting is true.
 // This will resolve after rendering without app verification.
 var appVerifier = new firebase.auth.RecaptchaVerifier(
     "recaptcha-container",
     {
         size: "invisible"
     }
 );

 var provider = new firebase.auth.PhoneAuthProvider();
 provider.verifyPhoneNumber(phoneNumber, appVerifier)
     .then(function (verificationId) {
         var verificationCode = window.prompt('Please enter the verification ' +
             'code that was sent to your mobile device.');
         phoneCredential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
         user.currentUser.updatePhoneNumber(phoneCredential);
     })
     .then((result) => {
         // Phone credential now linked to current user.
         // User now can sign in with new phone upon logging out.
         console.log(result);
     })
     .catch((error) => {
         // Error occurred.
         console.log(error);
     });
      };
    
    
       
  
    return (
        <>
            <section className="contact-page register-page">
                <Container>
                    <Row>
                        <Col sm="12">
                            <h3>PERSONAL DETAIL</h3>
                            <Form className="theme-form" onSubmit={handleSubmit(onSubmit)} >
                                <Row>
                                    <Col md="6">
                                        <Label for="name">First Name</Label>
                                        <Input type="text" className="form-control" id="name" placeholder="Enter Your name"  value={displayName}
                                            required="" />
                                    </Col>
                                    {/* <Col md="6">
                                        <Label for="email">Last Name</Label>
                                        <Input type="text" className="form-control" id="last-name" placeholder="Email" required=""  value={displayName} />
                                    </Col> */}
                                    {/* <Col md="6">
                                        <Label for="review">Phone number</Label>
                                        <Input type="text" className="form-control" id="review" placeholder="Enter your number" value={phoneNumber}
                                            required="" />
                                            <div id="recaptcha-container" visibility="hidden"></div>
                                    </Col> */}
                                    <Col md="6">
                                        <Label for="email">Email</Label>
                                        <Input type="text" className="form-control" id="email" placeholder="Email" value={mailId} required="" />
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contact-page register-page section-b-space">
                <Container>
                    <Row>
                        <Col sm="12">
                            {/* <h3>SHIPPING ADDRESS</h3> */}
                            <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    {/* <Col md="6">
                                        <Label for="name">flat / plot</Label>
                                        <Input type="text" className="form-control" id="home-ploat" placeholder="company name"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="name">Address *</Label>
                                        <Input type="text" className="form-control" id="address-two" placeholder="Address"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">Zip Code *</Label>
                                        <Input type="text" className="form-control" id="zip-code" placeholder="zip-code"
                                            required="" />
                                    </Col>
                                    <Col md="6" className="select_input">
                                        <Label for="review">Country *</Label>
                                        <select className="form-control" size="1">
                                            <option value="India">India</option>
                                            <option value="UAE">UAE</option>
                                            <option value="U.K">U.K</option>
                                            <option value="US">US</option>
                                        </select>
                                    </Col>
                                    <Col md="6">
                                        <Label for="review">City *</Label>
                                        <Input type="text" className="form-control" id="city" placeholder="City" required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="review">Region/State *</Label>
                                        <Input type="text" className="form-control" id="region-state" placeholder="Region/state"
                                            required="" />
                                    </Col> */}
                                    <div className="col-md-12">
                                        <button className="btn btn-sm btn-solid" type="submit">Save setting</button>
                                    </div>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProfilePage;