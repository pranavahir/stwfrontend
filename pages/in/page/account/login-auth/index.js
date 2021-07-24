import React,{useState,useEffect} from 'react';
import CommonLayout from '../../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input ,Col} from 'reactstrap';
import firebase ,{googleProvider,facebookProvider} from '../../../../config/base'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import gql from "graphql-tag";

 
const Login = ({isCheckOut}) => {
    // ({item,stickyClass,changeColorVar})

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );
    const [photoURL, setPhotoURL] = useState(
        sessionStorage.getItem('photoURL')
    );

    
    const [historyLogin, setHistoryLogin] = useState(
        localStorage.getItem('historyLogin')
    );
    const [customerId, setCustomerId] = useState(
        localStorage.getItem('CustomerId')
    );


    useEffect(() => {
        localStorage.setItem('Name', name);
        localStorage.setItem('CustomerId', customerId);
        sessionStorage.setItem('photoURL',photoURL)
        
    }, [name,customerId,photoURL]);

    const loginAuth = async (email,password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {                
                setName(email);
                setCustomerId(result.user.uid);
                
                if(historyLogin==null)
                {
                    setHistoryLogin('/');
                }
                else if(historyLogin == "/page/account/forgot-pwd")
                {
                    router.push("/");
                }
                 else{
                    setTimeout(() => {
                        if(historyLogin != null && historyLogin != "null" && historyLogin != "" && historyLogin != undefined)
                        router.push(historyLogin);
                        else
                        router.push("/");
                    }, 200);
                 }
                })
        } catch (error) {
            console.log(error);
            setTimeout(() => {
                toast.error("error : Please enter Valid username and Password", error);
            }, 200);
        }
    }

    const loginGuest = async (email,password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword("coolmani0201@gmail.com", "Passwprd123*").then(function () {                
                setName("");
                
                if(historyLogin==null)
                setHistoryLogin('/');

                setTimeout(() => {
                    router.push("/page/account/checkout");
                }, 200);
                })
        } catch (error) {
            console.log("test@gmail.com" + error);
            setTimeout(() => {
                toast.error("error", error);
            }, 200);
        }
    }
    
    const googleAuth = async () => {
        try {
                firebase.auth().signInWithPopup(googleProvider).then(function (result) {
                setName(result.user.displayName);
                setPhotoURL(result.user.photoURL)
                setCustomerId(result.user.uid);
              
                if(historyLogin==null)
                setHistoryLogin('/');
                
                setTimeout(() => {
                    if(historyLogin != null && historyLogin != "null" && historyLogin != "" && historyLogin != undefined)
                    router.push(historyLogin);
                    else
                    router.push("/");
                }, 200);
            
            });
        } catch (error) {
            setTimeout(() => {
                toast.error("Opps.. The password is invalid or the user does not have a password.");
            }, 200);
        }
    };
    
 

    const facebookAuth = async () => {
        try {
                firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
                setName(result.user.displayName)

                if(historyLogin==null)
                setHistoryLogin('/');


                setTimeout(() => {
                    router.push(historyLogin);
                }, 200);
            });
        } catch (error) {
            console.log(error);
            setTimeout(() => {
                toast.error("Oppss.. The password is invalid or the user does not have a password.");
            }, 200);
        }
    }

    return (
        <CommonLayout parent="home" title="login">
            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <div className="form-group">
                                        <Label for="email">Email</Label>
                                        <Input type="text" onChange={e => setEmail(e.target.value)} className="form-control"  placeholder="Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <Label for="review">Password</Label>
                                        <Input type="password" onChange={e => setPassword(e.target.value)} className="form-control" id="review"
                                            placeholder="Enter your password" required="" />
                                    </div>
                                    <div className="form-group">
                                    
                                    <Link href="/page/account/forgot-pwd">
                                    <h6><a href="#">forgot password ?</a></h6>
                                    </Link>
                                    </div>
                                    
                                    

                                    <ul>
                                        <li><a href="#" className="btn btn-solid" onClick={() => loginAuth(email,password)}>Login</a></li>
                                        {isCheckOut?<li> &nbsp; <a href="#" className="btn btn-solid" onClick={() => loginGuest(email,password)}>Guest</a></li>:""}
                                    </ul>

                                    <div className="footer-social">
                                    <ul>
                                        {/* <li onClick={facebookAuth}><i className="fa fa-facebook" aria-hidden="true"></i></li> */}
                                        <li onClick={googleAuth}><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i> <span>Log in with Gmail </span></a></li>
                                    </ul>
                                </div>
                                </Form>
                            </div>
                        </Col>
                        <Col lg="6" className="right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                            able to order from our shop. To start shopping click register.</p>
                            <Link href="/page/account/register"><a href="#" className="btn btn-solid">Create an Account</a></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Login;