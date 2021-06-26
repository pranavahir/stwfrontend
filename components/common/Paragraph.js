import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Paragraph = ({title, inner, line ,hrClass}) => {
    return (
        <>
            <div className={title}>
                <h6>special offer</h6>
                <h4 className={inner}>Explore Our Top Collection</h4>
                {
                    line ?
                        <div className="line"></div> : 
                    hrClass ?
                        <hr role="tournament6"></hr>
                    : ''
                }
            </div>
            <Container>
                <Row>
                    {/* <Col lg="6" className="m-auto">
                        <div className="product-para">
                            <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,</p>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </>
    )
}

export default Paragraph;