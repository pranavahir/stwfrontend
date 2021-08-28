import React, {useState,useContext,Fragment} from 'react';

import { Container, Row, Col , Media} from 'reactstrap';
import { useRouter } from 'next/router';
import FilterContext from '../../../../helpers/filter//FilterContext';
import banner1 from '../../../../public/assets/images/sub-banner1.jpg';
import banner2 from '../../../../public/assets/images/sub-banner2.jpg';

const CollectionBanner = () => {
    const filterContext = useContext(FilterContext);
	const selectedKeyword = filterContext.selectedKeyword;
    const selectedBrands = filterContext.selectedBrands;
    const selectedColor = filterContext.selectedColor;
    const selectedPrice = filterContext.selectedPrice;
    const selectedCategory = filterContext.state;
    const selectedSize = filterContext.selectedSize;
    const [url, setUrl] = useState();
    const router = useRouter();

    var gLocation = sessionStorage.getItem('geoLocation')
    if(gLocation==null){gLocation=""}
    const [geoLocation, setgeoLocation] = useState(gLocation);


    const CategoryFilter = (category) => {
        // router.push(`/p/${product.id}` + '-' + `${titleProps}`);
			const pathname = window.location.pathname;
			setUrl(pathname);
			if(pathname==geoLocation+"/shop/six_grid")
			{
				var URL = pathname;	
			}
			else 
			{
                if(geoLocation==null)
				var URL = geoLocation+"/shop/six_grid";
                else
                var URL = "/shop/six_grid";
			}
            filterContext.setSelectedCategory(category)
        	router.push(`${URL}?${selectedCategory}`)
            // &brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}&keyword=${selectedKeyword}
    }

    return (
        <Fragment>

            {/*collection banner*/}
            <section className="pb-0">
                <Container>
                    <Row className="partition2">
                        <Col md='6'>
                             
                                <a href="/category/fashion/clothing-shoes-and-jewelry/mens-fashion" onClick={() => CategoryFilter("Men's Fashion")}><div className="collection-banner p-right text-center">
                                    <Media src={banner1} className="img-fluid" alt="" />
                                    <div className="contain-banner">
                                        <div>
                                            <h4>save 30%</h4>
                                            <h2>men</h2>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            
                        </Col>
                        <Col md='6'>
                            
                                <a href="/category/fashion/clothing-shoes-and-jewelry/womens-fashion" onClick={() => CategoryFilter("Women's Fashion")}>
                                    <div className="collection-banner p-right text-center">
                                        <Media src={banner2} className="img-fluid" alt="" />
                                        <div className="contain-banner">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*collection banner end*/}
        </Fragment>
    );
}

export default CollectionBanner;