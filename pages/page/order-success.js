import React, { useContext,useState } from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Row, Col, Media } from 'reactstrap';
import one from '../../public/assets/images/pro3/1.jpg';
import CartContext from '../../helpers/cart';
import { CurrencyContext } from '../../helpers/Currency/CurrencyContext';

const OrderSuccess = props => {
    const cartContext = useContext(CartContext);
    const cartItems = cartContext.state;
    const cartTotal = cartContext.cartTotal;
    const curContext = useContext(CurrencyContext);
    const symbol = curContext.state.symbol;
    const IsRight = curContext.state.IsRight;
    let leftSymbol=null;
    let rightSymbol = null;
    if(IsRight ==true)
    {
        rightSymbol = symbol;
    }
    else
    {
        leftSymbol = symbol;
    }

    const [orderObj, setOrderObj] = useState(
        sessionStorage.getItem('orderObj')
    );
    const OrderMaster = JSON.parse(orderObj);

    
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
            <div className="light-layout">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="success-text"><i className="fa fa-check-circle" aria-hidden="true"></i>
                                <h2>thank you</h2>
                                <p>Payment is successfully processsed and your order is on the way</p>
                                <p>Order ID:267676GHERT105467</p>
                                <p>Expected date of shipping: {deliveryDate(cartItems[0].variants)} </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className="section-b-space">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="product-order">
                                <h3>your order details</h3>

                                {cartItems.map((item, i) =>
                                    <Row className="product-order-detail" key={i}>
                                        <Col xs="3" >
                                            <Media src={item.images[0].mainimageurl} alt=""
                                                className="img-fluid blur-up lazyload" />
                                        </Col>
                                        <Col xs="5" className="order_detail">
                                            <div>
                                                <h4>product name</h4>
                                                <h5>{titleTrim(item.title)}</h5>
                                            </div>
                                        </Col>
                                        <Col xs="2" className="order_detail">
                                            <div>
                                                <h4>quantity</h4>
                                                <h5>{item.qty}</h5>
                                            </div>
                                        </Col>
                                        <Col xs="2" className="total-sec">
                                            <div>
                                                <h4>price</h4>
                                                <h5>{leftSymbol}{item.total}{rightSymbol}</h5>
                                            </div>
                                        </Col>
                                    </Row>
                                )}
                                <div className="total-sec">
                                    <ul>
                                        <li>subtotal <span>{leftSymbol}{cartTotal}{rightSymbol}</span></li>
                                    </ul>
                                </div>
                                <div className="final-total">
                                    <h3>total <span>{leftSymbol}{cartTotal}{rightSymbol}</span></h3>
                                </div>
                            </div>
                        </Col>
                        <Col lg="12">
                            <Row className="order-success-sec">
                                <Col sm="2">
                                    {/* <h4>summary</h4>
                                    <ul className="order-detail">
                                        <li>order ID: 5563853658932</li>
                                        <li>expected date of shipping: {deliveryDate(cartItems[0].variants)} </li>
                                    </ul> */}
                                </Col>
                              
                                <Col sm="5">
                                    <h4>shipping address</h4>
                                    <ul className="order-detail">
                                        <li>{OrderMaster.OrderDetail.address1}</li>
                                        <li>{OrderMaster.OrderDetail.city} {OrderMaster.OrderDetail.state}</li>
                                        <li>{OrderMaster.OrderDetail.country}, {OrderMaster.OrderDetail.pin}</li>
                                        <li>Contact No. {OrderMaster.OrderDetail.phone}</li>
                                        <li>Contact mail. {OrderMaster.OrderDetail.emailid}</li>
                                    </ul>
                                </Col>
                                <Col sm="5" className="payment-mode">
                                    <h4>payment method</h4>
                                    <p>{OrderMaster.OrderDetail.paymentmethod}</p>
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