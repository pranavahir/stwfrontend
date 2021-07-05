import React from 'react';
import Slider from 'react-slick';
import { Slider6 } from "../../services/script";
import { Container, Row, Media ,Col } from 'reactstrap';

const LogisticLogoBlock = ({designClass}) => {
    return (
        <div className="">
            <Container>
                <Row>
                    <Col md="12">
                        <Slider {...Slider6} className="slide-5">
                        <div>
                                <div className="">
                                <center>
                                    <a href={null}>
                                    <img src='/assets/images/logistic/1.png' alt="" width="20%" className="img-fluid" />
                                    </a>
                                    </center>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                <center>
                                    <a href={null}>
                                    <img src='/assets/images/logistic/2.png' alt="" width="20%" className="img-fluid" />
                                        {/* <Media src={`/assets/images/logistic/12.png`} alt="" /> */}
                                    </a>
                                    </center>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                <center>
                                    <a href={null}>
                                    <img src='/assets/images/logistic/3.png' alt="" width="20%" className="img-fluid" />
                                        {/* <Media src={`/assets/images/logistic/13.png`} alt="" /> */}
                                    </a>
                                    </center>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                <center>
                                    <a href={null}>
                                    <img src='/assets/images/logistic/4.png' alt="" width="20%" className="img-fluid" />
                                    </a>
                                    </center>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                <center>
                                    <a href={null}>
                                    <img src='/assets/images/logistic/5.png' alt="" width="20%" className="img-fluid" />
                                    </a>
                                    </center>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LogisticLogoBlock;