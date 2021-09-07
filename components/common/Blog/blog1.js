import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Link from 'next/link'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Slider3 } from "../../../services/script"
import { Media, Container, Row, Col } from 'reactstrap';
// import ser1 from 'https://shoptheworldimage.digitechniq.in/static/1_3-0201c26a0216c936e406ba330bda550c-min.jpg';
// import ser2 from 'https://shoptheworldimage.digitechniq.in/static/1_2-4515231fbf7bd724e9c2c7e6bae4824d-min.jpg';
// import ser3 from 'https://shoptheworldimage.digitechniq.in/static/1_1-5ded0356660ec2f0cbd8e8c107d15f08-min.jpg';


const GET_PRODUCTS = gql`
query blog ($type:String!) {
    blog(type:$type){
    img
   	link
    title
    desc
    date
  }
} 
`;

const BlogSection = ({ type, sectionClass, title, inner, hrClass }) => {

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type
        }
    });

    return (
        <Fragment>
            <section className={sectionClass}>
                <Container>
                    <Row>
                        <Col md="12">
                            <div className={title}>
                                <h4>our collection</h4>
                                <h2 className={inner}>special products</h2>
                                {hrClass ?
                                    <hr role="tournament6"></hr>
                                    : <div className="line"><span></span></div>
                                }


                            </div>
                            <Slider {...Slider3} className="slide-3 no-arrow ">
                                 
                                    <Col md="12">
                                         
                                            <div className="classic-effect" >
                                                <Media src="https://shoptheworldimage.digitechniq.in/static/1_3-0201c26a0216c936e406ba330bda550c-min.jpg" className="img-fluid" alt="" />
                                                <span></span>
                                            </div>
                                        <div className="blog-details">
                                            <h4>Cheaper than amazon Price</h4>
                                                {/* <p> </p> */}
                                            <hr className="style1" />
                                            <h6>Best Deal</h6>
                                        </div>
                                    </Col>
                                    <Col md="12">
                                         
                                            <div className="classic-effect" >
                                                <Media src="https://shoptheworldimage.digitechniq.in/static/1_2-4515231fbf7bd724e9c2c7e6bae4824d-min.jpg" className="img-fluid" alt="" />
                                                <span></span>
                                            </div>
                                        <div className="blog-details">
                                            <h4>Same day shipping</h4>
                                                {/* <p> </p> */}
                                            <hr className="style1" />
                                            <h6>Fast Delivery</h6>
                                        </div>
                                    </Col>
                                    <Col md="12">
                                         
                                            <div className="classic-effect" >
                                                <Media src="https://shoptheworldimage.digitechniq.in/static/1_1-5ded0356660ec2f0cbd8e8c107d15f08-min.jpg" className="img-fluid" alt="" />
                                                <span></span>
                                            </div>
                                        <div className="blog-details">
                                            <h4>Less than 99.Rs products</h4>
                                                {/* <p> </p> */}
                                            <hr className="style1" />
                                            <h6>Cheap and Best Quality</h6>
                                        </div>
                                    </Col>
                                
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}
export default BlogSection;