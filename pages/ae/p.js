import React from 'react';
import { useRouter } from 'next/router'
import CommonLayout from '../../components/shop/common-layout';
import ProductSection from './p/common/product_section';
// /common/product_section
import { withApollo } from '../../helpers/apollo/apollo';
import LeftSidebarPage from './p/product/leftSidebarPage';

const LeftSidebar = () => {
  
  const router = useRouter();
  const id = router.query.id;
  
  return (
    <CommonLayout parent="Home" title="Product">
        <LeftSidebarPage pathId={id} />
      <ProductSection />
    </CommonLayout>
  );
}


export default withApollo(LeftSidebar);