import React, { Fragment } from 'react';
import Link from 'next/link'
import { Container ,Row ,Col ,Media} from 'reactstrap';
import visa from '../../../public/assets/images/icon/visa.png';
import mastercard from '../../../public/assets/images/icon/mastercard.png';
import paypal from '../../../public/assets/images/icon/paypal.png';
import americanexpress from '../../../public/assets/images/icon/american-express.png';
import discover from '../../../public/assets/images/icon/discover.png';

const CopyRight = ({layout, fluid}) => {

    const styleObj = {
        fontSize: 10,
        color: "#4a54f1",
        textAlign: "center"
        }

        const styebar = {
            fontSize: "20px",
            color: "red",
            textAlign: "center",
            paddingLeft: "2px",
            paddingRight: "2px"
        }

        
    const styleHeaderObj = {
        fontSize: 12,
        color: "#4a54f1",
        textAlign: "center"
        }

    return (
        <Fragment>
            <div className={`sub-footer ${layout}`}>
                <Container fluid={fluid}>
                <Row>
                        <Col xl="12" md="12" sm="12">
                            <div className="footer-end">
                            <ul style={styleHeaderObj}>
                                    <li>
                                    <h6>  &nbsp; 5+ Years <span style={styebar}>|</span> 500k Orders Delivered <span style={styebar}>|</span> 9+ Countries Presence <span style={styebar}>|</span> 3M+ Products <span style={styebar}>|</span> Delivering 184+ Countries  </h6>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="12" md="12" sm="12">
                            <div className="footer-end">
                            <ul style={styleHeaderObj}>
                                    <li>
                                    <h6> &nbsp; INDIA <span style={styebar}>|</span> USA <span style={styebar}>|</span> CANADA <span style={styebar}>|</span> MEXICO <span style={styebar}>|</span> BRAZIL <span style={styebar}>|</span> UAE <span style={styebar}>|</span> KSA <span style={styebar}>|</span> AUSTRALIA <span style={styebar}>|</span> SINGAPORE </h6>
                                    </li>
                                </ul>
                            </div>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="12" md="12" sm="12">
                            <div className="footer-end">
                                
                            <ul style={styleHeaderObj}>
                                    <li>
                                    <p> <h6><i className="fa fa-copyright" aria-hidden="true"></i> 2020-21 Shop The World | All Rights Reserved.</h6></p>
                                    </li>   
                                    <li>
                                    <Link href={`/page/privacy-policy`} >
                                    <p style={styleObj} ><a href="#"> &nbsp; Privacy Policy </a> | </p>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href={`/page/terms`} >
                                    <p style={styleObj}><a href="#"> &nbsp; Terms & Conditions </a> | </p>
                                    </Link>
                                    </li>
                                    <li>
                                    <Link href={`/page/faq`} >
                                    <p style={styleObj}><a href="#"> &nbsp; FAQ</a></p>
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* <Col xl="6" md="6" sm="12">
                            <div className="payment-card-bottom">
                                <ul>
                                    <li>
                                        <a href="#"><Media src={visa} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={mastercard} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={paypal} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={americanexpress} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><Media src={discover} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </Col> */}
                    </Row>


                </Container>
            </div>
        </Fragment>
    )
}

export default CopyRight;