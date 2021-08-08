import React, {useState, useContext,Fragment} from 'react';
import FilterContext from '../../../../../helpers/filter/FilterContext';
import Slider from 'react-slick';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => {

  const filterContext = useContext(FilterContext);
	const selectedKeyword = filterContext.selectedKeyword;
    const selectedBrands = filterContext.selectedBrands;
    const selectedColor = filterContext.selectedColor;
    const selectedPrice = filterContext.selectedPrice;
    const selectedCategory = filterContext.state;
    const selectedSize = filterContext.selectedSize;
    const [url, setUrl] = useState();
    const router = useRouter();
    const [geoLocation, setgeoLocation] = useState(
      sessionStorage.getItem('geoLocation')
  );

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
        console.log(selectedCategory);
      router.push(`${URL}?${selectedCategory}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}&keyword=${selectedKeyword}`)
}

  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          <div>
            <div className="home home1 text-center">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h4>welcome to Shop The World</h4>
                        <h1>Fashion</h1>
                          <a onClick={() => CategoryFilter("Fashion")} className="btn btn-solid">shop now </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div>
            <div className="home home1 text-center">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h4>welcome to Shop The World</h4>
                        <h1>women's <br/> fashion</h1>
                        <a onClick={() => CategoryFilter("women's fashion")} className="btn btn-solid">shop now </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Slider>
      </section>
    </Fragment>
  )
}

export default Banner