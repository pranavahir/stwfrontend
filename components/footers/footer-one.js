import React, {useContext, useEffect } from 'react';
import Link from 'next/link'
import { SlideUpDown } from "../../services/script"
import LogoImage from "../headers/common/logo"
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import CopyRight from './common/copyright';
import { CurrencyContext } from '../../helpers/Currency/CurrencyContext';

const FooterOne = ({ fluid, logoName ,layoutClass ,footerClass }) => {

    const curContext = useContext(CurrencyContext);
    const phone = curContext.state.phone;
    const emailid = curContext.state.emailid;
    const address = curContext.state.address;
    const addressOne = curContext.state.addressOne;
    const addressTwo = curContext.state.addressTwo;

    useEffect(() => {
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function (elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }, [])
const styleObject = {
    textAlign: 'justify',
    fontSize: 12,
    lineHeight: 1.7,
}
    
const allSmall = {
    textTransform: 'lowercase' 
   }
    return (
        <footer className={`footer-light ${footerClass}`}>
            <div className="light-layout upper-footer">
                <Container fluid={fluid}>
                    <section className="small-section border-section border-top-0">
                        <Row>
                            <Col lg="6">
                                <div className="subscribe">
                                    <div>
                                        <h4>KNOW IT ALL FIRST!</h4>
                                        <p>Never Miss Anything From Shop The World By Signing Up To Our Newsletter. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6">
                                <Form className="form-inline subscribe-form">
                                    <FormGroup className="mx-sm-3">
                                        <Input type="text" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Enter your email" />
                                    </FormGroup>
                                    <Button type="submit" className="btn btn-solid">subscribe</Button>
                                </Form>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </div>
            <section className="section-b-space light-layout">
                <Container  fluid={fluid}>
                    <Row className="footer-theme partition-f">
                        <Col lg="3" md="4">
                            <div className="footer-title footer-mobile-title">
                                <h4>about</h4>
                            </div>
                            <div className="footer-contant">
                                <div className="footer-logo">
                                    <LogoImage logo={logoName} />
                                </div>
                                <p style={styleObject}>We provide an ocean of products across the globe at the best possible price. We have large collection of items in every single category and we also make it a point to sell items which are cheaper than amazon and other market places. We work with the reputed vendors who give the best of their price to us and we pass on the same to our customers. We welcome you to browse through our collection to see for yourself.</p>
                                <div className="footer-social">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/shoptheworldstore/" target="_blank">  <i className="fa fa-facebook" aria-hidden="true"></i> </a>
                                        </li>
                                        {/* <li>
                                            <a href="https://plus.google.com" target="_blank"> <i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        </li> */}
                                        <li>
                                            <a href="https://twitter.com/ShopTheWorld6/" target="_blank"> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/stw_insta_in/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                        </li>
                                        {/* <li>
                                            <a href="https://rss.com" target="_blank"><i className="fa fa-rss" aria-hidden="true"></i></a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg="2" md="3">
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>Get to Know Us</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul>
                                        <li>
                                            <Link href={`/page/about-us`} >
                                                <a>about us</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg="2" md="3">
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>Quick Links</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul>
                                        <li><a href="#">shipping & return</a></li>
                                        <li><a href="#">secure shopping</a></li>
                                        <li><a href="#">gallary</a></li>
                                        <li><a href="#">affiliates</a></li>
                                        <li>
                                        <Link href={`/page/account/contact`} >
                                        <a>contacts</a>
                                        </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>store information</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul className="contact-list">
                                    <li><i className="fa fa-map-marker"></i>{address}<br/></li>
                                    <li><i className="fa fa-map-marker"></i>{addressOne}<br/></li>
                                    <li><i className="fa fa-map-marker"></i>{addressTwo}</li>
                                            
                                        <li><i className="fa fa-phone"></i>Call Us: {phone}</li>
                                        <li><i className="fa fa-whatsapp"></i>WhatsApp: {phone}</li>
                                        <li><i className="fa fa-envelope-o"></i>Email Us: <a style={allSmall} href="#">{emailid}</a></li>
                                      
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <CopyRight layout={layoutClass} fluid={fluid}  />
        </footer>
    )
}


export default FooterOne;