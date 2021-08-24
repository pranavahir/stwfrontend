import React from 'react';
import { useRouter } from 'next/router'
import CommonLayout from '../../../components/shop/common-layout';
import { withApollo } from '../../../helpers/apollo/apollo';
import ProductList from '../../shop/common/productList';
import { Row, Container } from 'reactstrap';

const LeftSidebar = () => {
  
  const router = useRouter();
  const category = router.query.category;
  
  return (
    <CommonLayout title={category}  parent="home" >
    {/* <section className="section-b-space"> */}
   <Container>
       <Row>
           <ProductList colClass="col-lg-3 col-6 col-grid-box"  layoutList='' type="Category" pathId={category} noSidebar={true} />
       </Row>
   </Container>
   {/* </section> */}
</CommonLayout>
  );
}


export default withApollo(LeftSidebar);