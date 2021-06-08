import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import MyOrderPage from './common/order-page';

 
const MyOrder = () => {
    return (
            <CommonLayout parent="home" title="wishlist">
            <MyOrderPage/>
        </CommonLayout>
        
    )
}

export default MyOrder;