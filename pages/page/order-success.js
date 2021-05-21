import React, { useContext } from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Row, Col, Media } from 'reactstrap';
import one from '../../public/assets/images/pro3/1.jpg';
import CartContext from '../../helpers/cart';
import { CurrencyContext } from '../../helpers/Currency/CurrencyContext';

const OrderSuccess = () => {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext.state;
    const cartTotal = cartContext.cartTotal;
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const OrderDetail = cartItems.OrderDetail

    const deliveryDate = (variantData) =>{
        var someFormattedDate =null;

        if(variantData !=null && variantData !=undefined)
        {
            if(variantData.length > 0)
            {
                var someDate = new Date();
                var numberOfDaysToAdd = variantData[0].daystoship;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

                var dd = someDate.getDate();
                var mm = someDate.getMonth() + 1;
                var y = someDate.getFullYear();
                
                someFormattedDate = dd + '/'+ mm + '/'+ y;
            }
            else
            {
                someFormattedDate = null;
            }
            
        }
        return someFormattedDate
    }

    const titleTrim=(title)=>{
        var res = null
        if(title!=null)
          res = title.substring(0, 100);
        else
         res = title;
    
        return res;
    
      }
    return (
        <CommonLayout parent="home" title="order success">
            <section className="section-b-space light-layout">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="success-text"><i className="fa fa-check-circle" aria-hidden="true"></i>
                                <h2>thank you</h2>
                                <p>Payment is successfully processsed and your order is on the way</p>
                                <p>Transaction ID:267676GHERT105467</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="product-order">
                                <h3>your order details</h3>

                                {cartItems.map((item, i) =>
                                    <Row className="product-order-detail" key={i}>
                                        <Col xs="3" >
                                            <Media src={item.images[0].mainimageurl} alt=""
                                                className="img-fluid blur-up lazyload" />
                                        </Col>
                                        <Col xs="3" className="order_detail">
                                            <div>
                                                <h4>product name</h4>
                                                <h5>{titleTrim(item.title)}</h5>
                                            </div>
                                        </Col>
                                        <Col xs="3" className="order_detail">
                                            <div>
                                                <h4>quantity</h4>
                                                <h5>{item.qty}</h5>
                                            </div>
                                        </Col>
                                        <Col xs="3" className="order_detail">
                                            <div>
                                                <h4>price</h4>
                                                <h5>{symbol}{item.total}</h5>
                                            </div>
                                        </Col>
                                    </Row>
                                )}
                                <div className="total-sec">
                                    <ul>
                                        <li>subtotal <span>{symbol}{cartTotal}</span></li>
                                    </ul>
                                </div>
                                <div className="final-total">
                                    <h3>total <span>{symbol}{cartTotal}</span></h3>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <Row className="order-success-sec">
                                <Col sm="6">
                                    <h4>summary</h4>
                                    <ul className="order-detail">
                                        <li>order ID: 5563853658932</li>
                                        <li>Order Date: {new Date()}</li>
                                        <li>Order Total: <span>{symbol}{cartTotal}</span></li>
                                    </ul>
                                </Col>
                              
                                <Col sm="6">
                                    <h4>shipping address</h4>
                                    <ul className="order-detail">
                                        <li>{OrderDetail.address1}</li>
                                        <li>{OrderDetail.city} {OrderDetail.state}</li>
                                        <li>{OrderDetail.country}, {OrderDetail.pin}</li>
                                        <li>Contact No. {OrderDetail.phone}</li>
                                        <li>Contact mail. {OrderDetail.emailid}</li>
                                    </ul>
                                </Col>
                                <Col sm="12" className="payment-mode">
                                    <h4>payment method</h4>
                                    <p>{OrderDetail.paymentmethod}</p>
                                </Col>
                                <Col md="12">
                                    <div className="delivery-sec">
                                        <h3>expected date of delivery</h3>
                                        <h2>{deliveryDate(item.variants)}</h2>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default OrderSuccess;