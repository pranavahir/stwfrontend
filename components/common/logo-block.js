import React from 'react';
import Slider from 'react-slick';
import { Slider6 } from "../../services/script";
import { Container, Row, Media ,Col } from 'reactstrap';

const LogoBlock = ({designClass}) => {
    return (
        <section className={designClass}>
            <Container>
                <Row>
                    <Col md="12">
                        <Slider {...Slider6} className="slide-6 no-arrow">
                        <div>
                                <div className="logo-block">
                                    <a href={null}>
                                    <img src='/assets/images/logos/11.svg' alt="" width="25%" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                    <img src='/assets/images/logos/12.png' alt="" width="25%" className="img-fluid" />
                                        {/* <Media src={`/assets/images/logos/12.png`} alt="" /> */}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                    <img src='/assets/images/logos/13.png' alt="" width="25%" className="img-fluid" />
                                        {/* <Media src={`/assets/images/logos/13.png`} alt="" /> */}
                                    </a>
                                </div>
                            </div>
                            {/* <div>
                                <div className="logo-block">
                                    <a href={null}>
                                    <img src='/assets/images/logos/14.png' alt="" width="25%" className="img-fluid" />
                                    </a>
                                </div>
                            </div> */}
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                    <img src='/assets/images/logos/15.svg' alt="" width="25%" className="img-fluid" />
                                        {/* <Media src={`/assets/images/logos/15.svg`} alt="" /> */}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                    <img src='/assets/images/logos/16.png' alt="" width="25%" className="img-fluid" />
                                        {/* <Media src={`/assets/images/logos/16.png`} alt="" /> */}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                    <img src='/assets/images/logos/18.png' alt="" width="25%" className="img-fluid" />
                                        {/* <Media src={`/assets/images/logos/18.png`} alt="" /> */}
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                    <img src='/assets/images/logos/20.png' alt="" width="25%" className="img-fluid" />
                                        {/* <Media src={`/assets/images/logos/20.png`} alt="" /> */}
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LogoBlock;