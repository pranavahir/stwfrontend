import React from 'react';
import { useRouter } from 'next/router'
import CommonLayout from '../../../components/shop/common-layout';
import { withApollo } from '../../../helpers/apollo/apollo';
import ProductList from '../../shop/common/productList';
import { Row, Container } from 'reactstrap';
import { CategoryList } from '../../../services/script';

const LeftSidebar = () => {
  
  const router = useRouter();
  console.log(router.query);
  const brand = router.query.brand;

//   var MCategory = "";
 
//       for(var i=0; i<CategoryList.length ;i++)
//       {
//           if(CategoryList[i].MenuKey == category)
//           {
//               MCategory = CategoryList[i].CategoryName;
//           }
//       }
 
  
  return (
    <CommonLayout title={brand}  parent="home" >
    {/* <section className="section-b-space"> */}
   <Container>
       <Row>
           <ProductList colClass="col-lg-3 col-12 col-grid-box"  layoutList='' type="brand" pathId={brand} noSidebar={true} />
       </Row>
   </Container>
   {/* </section> */}
</CommonLayout>
  );
}


export default withApollo(LeftSidebar);