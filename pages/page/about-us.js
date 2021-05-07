import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import aboutus from "../../public/assets/images/about/about_us.jpg";
import avtar from "../../public/assets/images/avtar.png";
import two from "../../public/assets/images/svt_avtar.png";
import three from "../../public/assets/images/mani_avtar.png";
import Slider from "react-slick";
import { Slider2, Slider4 } from "../../services/script";
import team1 from "../../public/assets/images/team/1.jpg";
import team2 from "../../public/assets/images/team/2.jpg";
import team3 from "../../public/assets/images/team/3.jpg";
import team4 from "../../public/assets/images/team/4.jpg";
import ServiceLayout from "../../components/common/Service/service1.js";

const AboutUs = () => {
  const styleObj = {
    fontSize: 12,
  };
  const styleListObj = {
    color: "red",
  };

  return (
    <>
      <CommonLayout parent="home" title="About-us">
        {/* // <!-- about section start --> */}
        <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col lg="12">
                <div className="banner-section">
                  <Media
                    src={aboutus}
                    className="img-fluid blur-up lazyload"
                    alt="about"
                  />
                </div>
              </Col>
              <Col sm="12">
                <br />
                <br />
                <h5>
                  {" "}
                  <b>
                    {" "}
                    ShopTheWorld started its jounry in 2015 as a simple
                    ECommerce site. We have evolved into what we are now after
                    many transformations and experiences. Our experience helps
                    us to give the best of price and service to our customers
                    and we continue to work to give more variety of products. We
                    do not just add products to our catalogues, they come with
                    the best of price and quality in every step.
                  </b>{" "}
                </h5>
                <br />
                <p>
                  <h5>
                    At present,we operate in 9 Countries (INDIA , UAE, KSA,
                    Singapore, Australia, USA, Canada , Mexico & Brazil) and
                    ship to 186 countries worldwide, more than 10M products in
                    our shelves.
                    <br />
                  </h5>
                </p>
                <br />
                <h2>WHY BUY FROM SHOP THE WORLD? </h2>
                <hr color="red" />
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>Get to Know Us</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          Wide choice of goods from across the World.
                          <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          Reliability. We know our customers and products very
                          well. You can buy from us confidently (welcome to
                          check our google and trustpilot reviews) and we serve
                          some of the big brands in the industry including
                          Amazon, Google, etc.
                          <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          Access to many variants like New, New Bulk , Factory
                          Refurbished , Seller Refurbished, Used. <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          Referral Discounts. <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          GST / VAT invoice to get Tax credit for business
                          buyers. <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          Bulk discount for volume buyers. <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          Excellent presales support and post sales support.{" "}
                          <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          We help you to get products even if not in our
                          listings. We check with our network of suppliers and
                          arrange to deliver to your doorstep.
                          <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          Easy communication. We respond to our messages and
                          mails quickly, all days of the year, never no
                          vacation.
                          <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          More Choice of products than amazon like customized
                          laptops, desktops, personalised gifts, personalised
                          banners etc. <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          We try to beat amazon price, if you feel we priced
                          high, you can ask for a better price. <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          Our price comparison feature makes it easy to compare
                          our prices with amazon, giving price satisfaction to
                          the shopper . <br />
                        </h5>
                      </li>
                      <li>
                        <h5>
                          <i
                            style={styleListObj}
                            className="fa fa-angle-double-right mr-2"
                          ></i>
                          Faster Delivery. We use reputed couriers with express
                          mode that can be tracked end to end. <br />
                        </h5>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  {" "}
                  <center>
                    {" "}
                    <h2 style={styleListObj}> Thank you for shopping !!! </h2>
                  </center>{" "}
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
                <Slider
                  {...Slider2}
                  className="team-4 testimonial-slider"
                  
                >
                  <div>
                    <div className="media">
                      <div className="text-center">
                        <Media src={two} alt="#" />
                        <h5>
                          S V Thiyagarajan
                          <br />
                        </h5>
                        <h6>Director</h6>
                      </div>
                      <div className="media-body">
                        <p style={styleObj}>
                          Thank You !<br />
                          Shop The World <br />
                          for helping us to get in to e -commerce, from offline
                          retail seller over 18+ years, now able to sell
                          products acrosss many countries Our sales increased
                          multi fold. E commerce presence helped us to generate
                          revenue during the pandemic lock down period.
                          <br />
                          -www.schoolmateplus.in
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="media">
                      <div className="text-center">
                        <Media src={avtar} alt="#" />
                        <h5>
                          Nitin Jayachandran
                          <br />
                        </h5>
                        <h6>Technical Lead</h6>
                      </div>
                      <div className="media-body">
                        <p style={styleObj}>
                          Thank You !<br />
                          Shop The World <br />
                          for helping us to get in to e -commerce, from offline
                          retail seller over 18+ years, now able to sell
                          products acrosss many countries Our sales increased
                          multi fold. E commerce presence helped us to generate
                          revenue during the pandemic lock down period.
                          <br />
                          -www.schoolmateplus.in
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="media">
                      <div className="text-center">
                        <Media src={three} alt="#" />
                        <h5>
                          R ManiKandan
                          <br />
                        </h5>
                        <h6>CTO</h6>
                      </div>
                      <div className="media-body">
                        <p style={styleObj}>
                          Thank You !<br />
                          Shop The World <br />
                          for helping us to get in to e -commerce, from offline
                          retail seller over 18+ years, now able to sell
                          products acrosss many countries Our sales increased
                          multi fold. E commerce presence helped us to generate
                          revenue during the pandemic lock down period.
                          <br />
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
          <ServiceLayout
            sectionClass={"service border-section small-section"}
          />
        </div>
      </CommonLayout>
    </>
  );
};

export default AboutUs;
