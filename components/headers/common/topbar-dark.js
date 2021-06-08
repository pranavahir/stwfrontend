import React ,{useContext,useState,useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import firebase from '../../../config/base'
import { useRouter } from 'next/router';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';

const TopBarDark = ({ topClass, fluid }) => {
    const router = useRouter();
    const curContext = useContext(CurrencyContext);
    const phone = curContext.state.phone;
    const emailid = curContext.state.emailid;
     
    const [name, setName] = useState(
        localStorage.getItem('Name')
    );
    const [photoURL, setPhotoURL] = useState(
        sessionStorage.getItem('photoURL')
    );


    const [customerId, setCustomerId] = useState(
        localStorage.getItem('CustomerId')
    );

    const [historyLogin, setHistoryLogin] = useState(
        localStorage.getItem('historyLogin')
    );
    useEffect(() => {
        localStorage.setItem('Name', name);
        localStorage.setItem('historyLogin', historyLogin);
        localStorage.setItem('CustomerId', customerId);
        sessionStorage.setItem('photoURL',photoURL)
    }, [name,historyLogin,customerId,photoURL]);

    // console.log(histor   yLogin);
    const firebaseLogout = () => {
        firebase.auth().signOut()  
        setName(""); 
        setPhotoURL("");
        router.push("/page/account/login-auth")
    }
    const Login = () => {
        var pathname = window.location.pathname;
        setHistoryLogin(pathname); 
        router.push("/page/account/login-auth")
    }
    const Register = () => {
        var pathname = window.location.pathname;
        setHistoryLogin(pathname); 
        router.push("/page/account/register")
    }
    const imgStyle={
        borderRadius: "30px",
    marginRight: "7px"
    }
    const userTrim=(user)=>{
        var res = null
        if(user!=null)
        {
            res = user.substring(0, 10);
            res = res+"...";
        }
        else
         res = user;
    
        return res;
    
      }
    return (
        <div className={topClass}>
            <Container fluid={fluid}>
                <Row>
                    <Col lg="6">
                        <div className="header-contact">
                            <ul>
                                <li>Welcome to Shop The World</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i>Call Us: {phone}</li>
                                <li><i className="fa fa-whatsapp" aria-hidden="true"></i>WhatsApp: {phone}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className="text-right">
                        <ul className="header-dropdown">
                            <li className="mobile-wishlist">
                                <Link href="/page/account/my-order">
                                    <a><i className="fa fa-heart" aria-hidden="true"></i>My Orders</a>
                                </Link>
                            </li>
                            <li className="mobile-wishlist">
                                <Link href="/page/account/wishlist">
                                    <a><i className="fa fa-heart" aria-hidden="true"></i> wishlist</a>
                                </Link>
                            </li>
                            {name!="" && name!=null && name!="null" && name ?<li className="onhover-dropdown mobile-account">
                                {photoURL==null ? <i className="fa fa-user" aria-hidden="true"></i> :
                                <img style={imgStyle} src={photoURL} alt="" width="15%" className="img-fluid" />}
                                 {userTrim(name)}
                                    <ul className="onhover-show-div">
                                    <li>
                                    <Link href="/page/account/profile">
                                        <a>Profile</a>
                                        </Link>
                                    </li>
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