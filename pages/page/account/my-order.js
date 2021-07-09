import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import MyOrderPage from './common/order-page';

 
const MyOrder = () => {
    return (
            <CommonLayout parent="home" title="My Order">
            <MyOrderPage/>
        </CommonLayout>
        
    )
}

export default MyOrder;