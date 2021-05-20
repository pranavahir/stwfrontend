import React ,{useState,useEffect} from 'react';
import { useForm } from "react-hook-form";
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col} from 'reactstrap';
import firebase from '../../../config/base'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const Register = () => {
    const router = useRouter();
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    //Create User with Email and Password
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );
    const onSubmit = async (data, e) => {
        if (data !== "") {
            try {
                await firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(function (result) {                
                    setName(data.email);
                    router.push(`/`);
                    })
            } catch (error) {
                setTimeout(() => {
                    toast.error("error : "+error.message, error);
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
                                <Form className="theme-form" onSubmit={handleSubmit(onSubmit)} >
                                <div className="row check-out">
                                     
                                    
                                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                    <div className="field-label">First Name</div>
                                            <input type="text" className="form-control" className={`${errors.first_name ? "error_border" : ""}`} name="first_name"  ref={register({ required: true })} placeholder="First Name"/>
                                            <span className="error-message"> {errors.first_name && "First name is required"} </span>
                                            </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                        <div className="field-label">Last Name</div>
                                            <input type="text" className="form-control"   placeholder="Last Name" className={`${errors.last_name ? "error_border" : ""}`} name="last_name" ref={register({ required: true })} />
                                            <span className="error-message"> {errors.last_name && "Last name is required"} </span>
                                            </div>
                                     
                                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                    <div className="field-label">Email</div>
                                            <input type="text" className="form-control" className={`${errors.email ? "error_border" : ""}`} type="text" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i, })}    placeholder="Email" required="" />
                                            <span className="error-message"> {errors.email && "Please enter proper email address ."} </span>
                                            </div>
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                        <div className="field-label">Password</div>
                                            <input type="password" name="password" className="form-control" className={`${errors.password ? "error_border" : ""}`} id="review"   placeholder="Enter your password" ref={register({ required: true, min: 8, max: 80 })} />
                                            <span className="error-message"> {errors.password && "Please enter proper password min 9  ."} </span>
                                            </div>
                                        <button type="submit" className="btn-solid btn"> Create Account </button>
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
    )
}

export default Register