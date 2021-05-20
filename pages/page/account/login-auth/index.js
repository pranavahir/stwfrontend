import React,{useState,useEffect} from 'react';
import CommonLayout from '../../../../components/shop/common-layout';
import { Container, Row, Form, Label, Input ,Col} from 'reactstrap';
import firebase ,{googleProvider,facebookProvider} from '../../../../config/base'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = useState("coolmani0201@gmail.com");
    const [password, setPassword] = useState("Passwprd123*");
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );
    
    useEffect(() => {
        localStorage.setItem('Name', name);
    }, [name]);

    const loginAuth = async (email,password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then(function () {                
                setName(email);
                setTimeout(() => {
                    router.push(`/`);
                }, 200);
                })
        } catch (error) {
            setTimeout(() => {
                toast.error("error", error);
            }, 200);
        }
    }

    const loginGuest = async (email,password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword("coolmani0201@gmail.com", "Passwprd123*").then(function () {                
                setName("Guest");
                setTimeout(() => {
                    router.push(`/`);
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
                setTimeout(() => {
                    router.push(`/`);
                }, 200);
            
            });
        } catch (error) {
            setTimeout(() => {
                toast.error("Oppss.. The password is invalid or the user does not have a password.");
            }, 200);
        }
    };
    
    const facebookAuth = async () => {
        try {
                firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
                setName(result.user.displayName)
                setTimeout(() => {
                    router.push(`/`);
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
                                    
                                    

                                    <ul>
                                        <li><a href="#" className="btn btn-solid" onClick={() => loginAuth(email,password)}>Login</a></li>
                                        <li><a href="#" className="btn btn-solid" onClick={() => loginGuest(email,password)}>Guest</a></li>
                                    </ul>

                                    <div className="footer-social">
                                    <ul>
                                        <li onClick={facebookAuth}><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                        <li onClick={googleAuth}><a><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
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