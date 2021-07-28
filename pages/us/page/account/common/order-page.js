import React, { useContext, useState}from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { WishlistContext } from '../../../../../helpers/wishlist/WishlistContext';
import CartContext from '../../../../../helpers/cart/index';
import { useRouter } from 'next/router';
import Link from 'next/link'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { CurrencyContext } from "../../../../../helpers/Currency/CurrencyContext";
const GET_ORDER = gql`
    query OrderDetailByCustomerId ($CustomerId:String!) {
        OrderDetailByCustomerId (CustomerId:$CustomerId) {  
            orderdetailid
            orderdate 
            productsku 
            producttitle 
            quantity
            totalprice
            customerid 
            customername 
            paymentmethod 
            paymentdate 
            trackingnumber 
            orderstatus 
            CreatedAt 
            UpdatedAt 
            address1 
            address2 
            city 
            state 
            country 
            pin 
            phone 
            emailid 
            gst 
            gstname
            productimage
        }
    }
`;

const OrderPage = () => {
    const router = useRouter(); 
    const context = useContext(WishlistContext)
    const cartContext = useContext(CartContext);
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
    
    const wishlist = context.wishlistItems;
    const removeFromWish = context.removeFromWish;
    const addCart = cartContext.addToCart;

    const [customerId, setCustomerId] = useState(
        localStorage.getItem('CustomerId')
    );

    var { loading, data } = useQuery(GET_ORDER, {
        variables: {
            // id: parseInt(pathId),
            CustomerId:customerId
        }
    });

    console.log(data);
    const checkOut = () => {
        router.push('/page/account/checkout');
    }

    return (
        <>
            {(!data || !data.OrderDetailByCustomerId || loading) ? "Loading" : <section className="wishlist-section section-b-space">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <Table className="table cart-table table-responsive-xs">
                                    <thead>
                                        <tr className="table-head">
                                            <th scope="col">image</th>
                                            <th scope="col">product name</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">price</th>
                                            <th scope="col">Delivery Address</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    
                                    {data.OrderDetailByCustomerId.map((item, i) =>
                                        <tbody key={i}>
                                            <tr>
                                                <td>
                                                {item.productimage==null ? "" : <a href="#"><img src={item.productimage} alt="" /></a>}
                                                    
                                                </td>
                                                <td align="left"><a  href="#">{item.producttitle}</a>
                                                    <Row className="mobile-cart-content">
                                                        {/* <div className="col-xs-3">
                                                            <p>out of stock</p>
                                                        </div> */}
                                                      
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">{item.quantity}</h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">{leftSymbol}{item.totalprice}{rightSymbol}</h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            {/* <h2 className="td-color"><a href="#" className="icon mr-1"><i className="fa fa-close"></i>
                                                            </a><a href="#" className="cart"><i className="fa fa-shopping-cart"></i></a></h2> */}
                                                            <h5><p>{item.orderstatus}</p></h5>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            {/* <h2 className="td-color"><a href="#" className="icon mr-1"><i className="fa fa-close"></i>
                                                            </a><a href="#" className="cart"><i className="fa fa-shopping-cart"></i></a></h2> */}
                                                             <p>{item.address1}&nbsp; {item.address2}&nbsp;{item.city}&nbsp; {item.state}&nbsp; {item.country}&nbsp; {item.pin}</p>
                                                        </div>
                                                    </Row>
                                                </td>

                                                        <td>
                                                        <h2>{item.quantity}</h2>
                                                </td>
                                                <td>
                                                    <h2>{leftSymbol}{item.totalprice}{rightSymbol}</h2>
                                                </td>
                                                <td>
                                                    <p>{item.address1}&nbsp; {item.address2}&nbsp;{item.city}&nbsp; {item.state}&nbsp; {item.country}&nbsp; {item.pin}</p>
                                                     
                                                </td>
                                                <td>
                                                    {/* <a href={null} className="icon" onClick={() => removeFromWish(item)}>
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                    <a href={null} className="cart" onClick={() => addCart(item)} >
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a> */}
                                                    <p>{item.orderstatus}</p>
                                                    
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                </Table>
                            </Col>
                        </Row>
                        <Row className="wishlist-buttons">
                            <Col sm="12">
                                <Link href={'/'}><a href={null} className="btn btn-solid" >continue shopping</a></Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
                }

        </>
    )
}

export default OrderPage;