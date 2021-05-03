import React, { useEffect,useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import firebase from '../../../config/base'
import CheckoutPage from './common/checkout-page';
import Login from '../../page/account/login-auth'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { ApolloProvider, useQuery } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"

const client = new ApolloClient({
    uri: "https://stwecommerceapi.herokuapp.com/api/graphql"
  })

  

const Checkout = () => {
    const [currentUser, setCurrentUser] = useState(false);
    const stripePromise = loadStripe("pk_live_51IYvwgAR19qkTg2Rtd20aLk5vwFsCRajMN8I9aZl8zFfXj14qDxppEDhfLMp51b9OohTumAh7vSlO6IccIP5iIh600zA024lK7");
    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    })
    return (
        <>
        {currentUser !== null ?
            <ApolloProvider client={client}>
            <CommonLayout parent="home" title="checkout">
                <React.StrictMode>
                    <Elements stripe={stripePromise}>
                        <CheckoutPage />
                    </Elements>
                </React.StrictMode>
            </CommonLayout>
            </ApolloProvider>
        :
        <Login/>
        }
        </>
    )
}

export default Checkout;