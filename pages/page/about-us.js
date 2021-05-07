import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Row, Col, Media } from 'reactstrap';
import aboutus from '../../public/assets/images/icon/logo.png';
import avtar from '../../public/assets/images/avtar.png';
import two from '../../public/assets/images/2.jpg';
import Slider from 'react-slick';
import { Slider2, Slider4 } from '../../services/script';
import team1 from '../../public/assets/images/team/1.jpg';
import team2 from '../../public/assets/images/team/2.jpg';
import team3 from '../../public/assets/images/team/3.jpg';
import team4 from '../../public/assets/images/team/4.jpg';
import ServiceLayout from '../../components/common/Service/service1.js';

const AboutUs = () => {
    const styleObj = {
        fontSize: 12,
        }

    return (
        <>
            <CommonLayout parent="home" title="About-us">

                {/* // <!-- about section start --> */}
                <section className="about-page section-b-space">
                    <Container>
                        <Row>
                            <Col lg="12">
                                {/* <div className="banner-section">
                                    <Media src={aboutus}
                                        className="img-fluid blur-up lazyload" alt="" /></div> */}
                            </Col>
                            <Col sm="12 offset-xl-1">
                            
                                <h4>We have operations at 9 countries (INDIA , UAE, KSA, Singapore, Australia, USA, Canada , Mexico & Brazil) and Shipping to 186 countries </h4>
                                
                                <p><h5>No. of products offering will  be Reaching 10M!<br/></h5></p>
                                <br/>
                                <h2>Why Buy from Shop The World? </h2>
                                <div className="sub-title">
                                <div className="footer-title">
                                    <h4>Get to Know Us</h4>
                                </div>
                                <div className="footer-contant">
                                <ul>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Wide choice of goods from across the World <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Access to many variants like  New, New Bulk , Factory Refurbished , Seller Refurbished, Used & Parts only ( not working  )<br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Referral Discounts <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>More buy more points  <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>GST / VAT  invoice to get Tax  credit for business buyer <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Bulk discount for business buyers <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Presales support <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Post sales support<br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Sourcing option - the product not found in our store can be sourced and delivered at your door step<br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Easy chat thro whats up <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>More Choice of products like configurable laptops , Personalised Gifts, Personalised banners etc <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Offer your price feature - one can demand better price from seller <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Competitive price comparing other panels <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Faster Delivery - thro No 1 Logistis Partners <br/></h5></li>
                                        <li><h5><i className="fa fa-angle-double-right mr-2"></i>Serving E-Commerce Industry over past 5 years <br/></h5></li>
                                    </ul>
                                    </div>
                                    </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* <!--Testimonial start--> */}
                <section className="testimonial small-section">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <Slider {...Slider2} className="slide-2 testimonial-slider no-arrow">
                                    <div >
                                        <div className="media">
                                            <div className="text-center">
                                                <Media src={avtar} alt="#" />
                                                <h5>Nitin garg<br/></h5>
                                                {/* <h6>Designer</h6> */}
                                            </div>
                                            <div className="media-body">
                                                <p style={styleObj}>Thank You !<br/>
                                                    Shop The World <br/>
                                                    for helping us to get in to  
                                                    e -commerce, from offline retail seller over 18+ years,  now able to sell products acrosss many countries 
                                                    Our sales increased multi fold.
                                                    E commerce presence helped us to generate revenue during the pandemic lock down period.<br/>
                                                    -www.schoolmateplus.in

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="media">
                                            <div className="text-center">
                                                <Media src={avtar} alt="#" />
                                                <h5>Nitin garg<br/></h5>
                                                {/* <h6>Designer</h6> */}
                                            </div>
                                            <div className="media-body">
                                                <p style={styleObj}>Thank You !<br/>
                                                    Shop The World <br/>
                                                    for helping us to get in to  
                                                    e -commerce, from offline retail seller over 18+ years,  now able to sell products acrosss many countries 
                                                    Our sales increased multi fold.
                                                    E commerce presence helped us to generate revenue during the pandemic lock down period.<br/>
                                                    -www.schoolmateplus.in
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* <!--Testimonial ends--> */}

                {/* <!--Team start--> */}
                {/* <section id="team" className="team section-b-space ratio_asos">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <h2>Our Team</h2>
                                <Slider className="team-4" {...Slider4}>
                                    <div>
                                        <div>
                                            <Media src={team1} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <Media src={team2} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <Media src={team3} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <Media src={team4} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                    <div>
                                        <div>
                                            <Media src={team1} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <h4>Hileri Keol</h4>
                                        <h6>CEo & Founder At Company</h6>
                                    </div>
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section> */}
                {/* <!--Team ends--> */}

                <div className="section-b-space">
                    <ServiceLayout sectionClass={"service border-section small-section"}  />
                </div>
            </CommonLayout>
        </>
    )
}

export default AboutUs;