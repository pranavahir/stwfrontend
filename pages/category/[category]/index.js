import React from 'react';
import { useRouter } from 'next/router'
import CommonLayout from '../../../components/shop/common-layout';
import { withApollo } from '../../../helpers/apollo/apollo';
import ProductList from '../../shop/common/productList';
import { Row, Container } from 'reactstrap';
import { CategoryList } from '../../../services/script';

const LeftSidebar = () => {
  
  const router = useRouter();
  const category = router.query.category;

  var MCategory = "";
 
      for(var i=0; i<CategoryList.length ;i++)
      {
          if(CategoryList[i].MenuKey == category)
          {
              MCategory = CategoryList[i].CategoryName;
          }
      }
 
  
  return (
    <CommonLayout title={MCategory}  parent="home" >
    {/* <section className="section-b-space"> */}
   <Container>
       <Row>
           <ProductList colClass="col-lg-3 col-6 col-grid-box"  layoutList='' type="Category" pathId={MCategory} noSidebar={true} />
       </Row>
   </Container>
   {/* </section> */}
</CommonLayout>
  );
}


export default withApollo(LeftSidebar);