import React from 'react';
import { useRouter } from 'next/router'
import CommonLayout from '../../components/shop/common-layout';
import { withApollo } from '../../helpers/apollo/apollo';
import ProductList from '../shop/common/productList';
import { Row, Container } from 'reactstrap';

const LeftSidebar = () => {
  
  const router = useRouter();
  const promo = router.query.promo;
  
  const title = promo;

  return (
    <CommonLayout title={title}  parent="home" >
    {/* <section className="section-b-space"> */}
   <Container>
       <Row>
           <ProductList colClass="col-lg-3 col-6 col-grid-box"  layoutList='' type="promo" pathId={promo} noSidebar={true} />
       </Row>
   </Container>
   {/* </section> */}
</CommonLayout>
  );
}


export default withApollo(LeftSidebar);