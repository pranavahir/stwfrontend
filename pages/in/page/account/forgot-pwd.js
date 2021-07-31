import React from 'react';
import CommonLayout from '../../../../components/shop/common-layout';
import { Container, Row, Form, Input,Col } from 'reactstrap';
import { useForm } from "react-hook-form";
import firebase ,{googleProvider,facebookProvider} from '../../../../config/base'
// config/base
const ForgotPwd = () => {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook

    const onSubmit =async (data,e) => {
   
  
        if (data !== "") {
            console.log(data);
            console.log(e);
                 await firebase.auth().sendPasswordResetEmail(data.email)
            .then(function () {
                alert('Please check your email...')
            }).catch(function (e) {
                console.log(e)
            }) 
          } else {
            errors.showMessages();
          }
        }
        
        const inputStyle = {
            borderStyle :"solid",
            width : "71%",
            borderWidth : "1px",
            borderColor : "darkred",
            padding:"8px",
            borderRadius : 0
        }
    
    return (
        <CommonLayout parent="home" title="Forgot Password">
            <section className="pwd-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6" className="m-auto">
                            <h2>Forgot Your Password</h2>
                            <Form className="theme-form" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col md="12">
                                    <div className="form-group col-md-12 col-sm-12 col-xs-12"> 
                                    <input
                        className="form-control"
                        style={inputStyle}
                        className={`${errors.email ? "error_border" : ""}`}
                        type="text"
                        name="email"
                        ref={register({
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                      />   <span className="error-message">
                        {errors.email && "Please enter proper email address ."}
                      </span>
                      </div>
                                    </Col>
                                    {/* <a href="#" className="btn btn-solid">Submit</a> */}
                                    <button type="submit" className="btn-solid btn">
                                Submit
                              </button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default ForgotPwd;