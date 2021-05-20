import React ,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import firebase from '../../../config/base'
import { useRouter } from 'next/router';

const TopBarDark = ({ topClass, fluid }) => {
    const router = useRouter();
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );
    const [historyLogin, setHistoryLogin] = useState(
        localStorage.getItem('historyLogin')
    );
    useEffect(() => {
        localStorage.setItem('Name', name);
        localStorage.setItem('historyLogin', historyLogin);
    }, [name,historyLogin]);

    console.log(historyLogin);
    const firebaseLogout = () => {
        firebase.auth().signOut()  
        setName(""); 
        router.push("/page/account/login-auth")
    }
    const Login = () => {
        var pathname = window.location.pathname;
        console.log(pathname);
        setHistoryLogin(pathname); 
        router.push("/page/account/login-auth")
    }
    const Register = () => {
        var pathname = window.location.pathname;
        console.log(pathname);
        setHistoryLogin(pathname); 
        router.push("/page/account/register")
    }
    return (
        <div className={topClass}>
            <Container fluid={fluid}>
                <Row>
                    <Col lg="8">
                        <div className="header-contact">
                            <ul>
                                <li>Welcome to Shop The World</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: +91 9820168421</li>
                                <li><i className="fa fa-whatsapp" aria-hidden="true"></i>WhatsApp: +91 9820168421</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4" className="text-right">
                        <ul className="header-dropdown">
                            <li className="mobile-wishlist">
                                <Link href="/page/account/wishlist">
                                    <a><i className="fa fa-heart" aria-hidden="true"></i> wishlist</a>
                                </Link>
                            </li>
                            {name!="" && name!=null && name ?<li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"></i> {name}
                                    <ul className="onhover-show-div">
                                    <li onClick={() => firebaseLogout()}>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </li>:<li className="onhover-dropdown mobile-account">
                                <i className="fa fa-user" aria-hidden="true"></i> My Account
                                    <ul className="onhover-show-div">
                                    <li onClick={() => Login()} >
                                            <a>Login</a>
                                    </li>
                                    <li onClick={() => Register()}>
                                            <a>Register</a>
                                    </li>
                                </ul>
                            </li>} 
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default TopBarDark;