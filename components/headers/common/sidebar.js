import React, { useState, useContext, Fragment } from "react";
// import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Media } from "reactstrap";
import FilterContext from "../../../helpers/filter/FilterContext";
import fashion from "../../../public/assets/images/mega-menu/fashion.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const filterContext = useContext(FilterContext);
  const selectedKeyword = "";
  const selectedBrands = filterContext.selectedBrands;
  const selectedColor = filterContext.selectedColor;
  const selectedPrice = filterContext.selectedPrice;
  const selectedCategory = filterContext.state;
  const selectedSize = filterContext.selectedSize;
  const [url, setUrl] = useState();
  const router = useRouter();

  const closeAllNavs = () => {
    closeNav();
    closeNavMobile();
  };
  const closeNav = () => {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  };
  const closeNavMobile = () => {
    var closemyslide = document.getElementsByClassName("openHandlerSidenav");
    if (closemyslide) closemyslide[1].classList.remove("open-side");
  };
  const linkStyle = {
    fontSize: 12,
    cursor: "pointer",
  };
    
  var geoLocation =  sessionStorage.getItem('geoLocation');
    
    // const closeNav = () => {
    //     var closemyslide = document.getElementById("mySidenav");
    //     if (closemyslide)
    //         closemyslide.classList.remove('open-side');
    // }

  // const CategoryFilter = (category) => {
  //   // router.push(`/p/${product.id}` + '-' + `${titleProps}`);
  //   const pathname = window.location.pathname;
  //   setUrl(pathname);
  //   if (pathname == "/shop/six_grid") {
  //     var URL = pathname;
  //   } else {
  //     var URL = "/shop/six_grid";
  //   }
  //   filterContext.setSelectedCategory(category);
  //   filterContext.setselectedKeyword("");
  //   filterContext.setSelectedPromaflag([]);
  //   router.push(
  //     `${URL}?${selectedCategory}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}&keyword=`
  //   );
  // };

  const handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub1"))
      event.target.nextElementSibling.classList.remove("opensub1");
    else {
      document.querySelectorAll(".opensub1").forEach(function (value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  }
    const CategoryFilter = (category) => {
        // router.push(`/p/${product.id}` + '-' + `${titleProps}`);
			const pathname = window.location.pathname;
			setUrl(pathname);
            var URL = ""
          
			if(pathname=="/c/")
			{
				 URL = pathname;	
			}
            else if(pathname== (geoLocation+"/c/"))
            {
                URL = pathname;	
                console.log("geolocation"+pathname+"/"+selectedCategory);
            }
			else 
			{

        console.log("else"+pathname);
        if(geoLocation==null)
        URL = "/c";
        else  
				URL = geoLocation+"/c";
			}
            filterContext.setSelectedCategory(category)
            filterContext.setselectedKeyword("")
            filterContext.setSelectedPromaflag([])
        	  // router.push(`${URL}`)
            router.push(`${URL}/${selectedCategory}`);
            // ?&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}&keyword=`)


    }


  const handleSubTwoMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if(event.target.nextElementSibling !=null){
    if (event.target.nextElementSibling.classList.contains("opensub2"))
      event.target.nextElementSibling.classList.remove("opensub2");
    else {
      document.querySelectorAll(".opensub2").forEach(function (value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  }
  };
  const handleSubThreeMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if(event.target.nextElementSibling !=null){
    if (event.target.nextElementSibling.classList.contains("opensub3"))
      event.target.nextElementSibling.classList.remove("opensub3");
    else {
      document.querySelectorAll(".opensub3").forEach(function (value) {
        value.classList.remove("opensub3");
      });
      event.target.nextElementSibling.classList.add("opensub3");
    }
  }
  };

  const handleSubFourMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if(event.target.nextElementSibling !=null){
    if (event.target.nextElementSibling.classList.contains("opensub4"))
      event.target.nextElementSibling.classList.remove("opensub4");
    else {
      document.querySelectorAll(".opensub4").forEach(function (value) {
        value.classList.remove("opensub4");
      });
      event.target.nextElementSibling.classList.add("opensub4");
    }
  }
  };

  const handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if(event.target.nextElementSibling !=null){
      if (event.target.nextElementSibling.classList.contains("opensidesubmenu"))
      event.target.nextElementSibling.classList.remove("opensidesubmenu");
    else {
      event.target.nextElementSibling.classList.add("opensidesubmenu");
    }
    }
   


  };
  return (
    <Fragment>
      <div id="mySidenav" className="sidenav openHandlerSidenav">
        <a href={null} className="sidebar-overlay" onClick={closeAllNavs}></a>
        <nav>
          <a href={null} onClick={closeAllNavs}>
            <div className="sidebar-back text-left">
              <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
            </div>
          </a>
          <ul id="sub-menu" className="sidebar-menu">
            <li  onClick={(e) => handleMegaSubmenu(e)}>
              <Link href={`/c/Electronics`}  >
                        <a>Electronics
                        <span className="sub-arrow"></span>
                        </a>
              </Link>
              <ul className="mega-menu electronics-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <Link  style={linkStyle} href={`/c/Electronics/Camera, Photo & Videos`}>
                          <div style={linkStyle} >
                            Camera, Photo & Videos
                          </div>
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href={`/c/Electronics/Camera, Photo & Videos/DSLR`}>
                            <div style={linkStyle} >DSLR</div>
                            </Link>
                          </li>
                          <li>
                            {/* <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Lenses")}
                            > */}
                            <Link href={`/c/Electronics/Camera, Photo & Videos/Lenses`}>
                            <div style={linkStyle} >Lenses</div>
                            </Link>
                              
                            {/* </a> */}
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Camera, Photo & Videos/Mirrorless Camera`}>
                            <div style={linkStyle} >Mirrorless Camera</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Camera, Photo & Videos/Tripods & Monopods`}>
                            <div style={linkStyle} >Tripods & Monopods</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Camera, Photo & Videos/Video Cameras`}>
                            <div style={linkStyle} >Video Cameras</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Electronics/Speakers`}>
                            <div style={linkStyle} >Speakers</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Electronics/Speakers/Ceiling Speakers`}>
                            <div style={linkStyle} >Ceiling Speakers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Speakers/Center Channel Speakers`}>
                            <div style={linkStyle} >Center Channel Speakers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Speakers/Portable Speakers`}>
                            <div style={linkStyle} >Portable Speakers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Speakers/Soundbars`}>
                            <div style={linkStyle} >Soundbars</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Speakers/Subwoofers`}>
                            <div style={linkStyle} >Subwoofers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Speakers/Wireless & Bluetooth Speakers`}>
                            <div style={linkStyle} >Wireless & Bluetooth Speakers</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Electronics/Desktops`}>
                            <div style={linkStyle} >Desktops</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Electronics/Desktops/All in Ones`}>
                            <div style={linkStyle} >All in Ones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Desktops/Minis`}>
                            <div style={linkStyle} >Minis</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Desktops/Towers`}>
                            <div style={linkStyle} >Towers</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Electronics/Laptops`}>
                            <div style={linkStyle} >Laptops</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Electronics/Phones`}>
                            <div style={linkStyle} >Phones</div>
                            </Link>
                        </h5>
                        {/* <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Light use")}>All in Ones</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Medium use")}>Minis</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Heavy and Demanding use")}>Towers</a>
                                                    </li>
                                                </ul> */}
                        <h5>
                        <Link href={`/c/Electronics/Film Cameras`}>
                            <div style={linkStyle} >Film Cameras</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Electronics/Film Cameras/Instant Cameras`}>
                            <div style={linkStyle} >Instant Cameras</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                         <Link href={`/c/Electronics/Monitors`}>
                            <div style={linkStyle} >Monitors</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Electronics/Tablets`}>
                            <div style={linkStyle} >Tablets</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Electronics/Video Games`}>
                            <div style={linkStyle} >Video Games</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Electronics/Video Games/Accessories`}>
                            <div style={linkStyle} >Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Video Games/Consoles`}>
                            <div style={linkStyle} >Consoles</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Video Games/Games`}>
                            <div style={linkStyle} >Games</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Video Games/Nintendo`}>
                            <div style={linkStyle} >Nintendo</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Electronics/Headphones & Earphones`}>
                            <div style={linkStyle} >Headphones & Earphones</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Electronics/Headphones & Earphones/Bluetooth Headphones`}>
                            <div style={linkStyle} >Bluetooth Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Headphones & Earphones/DJ & Professional Headphones`}>
                            <div style={linkStyle} >DJ & Professional Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Headphones & Earphones/In Ear Earbud Headphones`}>
                            <div style={linkStyle} >In Ear Earbud Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Headphones & Earphones/Noise-Cancelling Headphones`}>
                            <div style={linkStyle} >Noise-Cancelling Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Headphones & Earphones/On-Ear Headphones`}>
                            <div style={linkStyle} >On-Ear Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Headphones & Earphones/Over-Ear Headphones`}>
                            <div style={linkStyle} >Over-Ear Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Headphones & Earphones/Premium Audio Headphones`}>
                            <div style={linkStyle} >Premium Audio Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Headphones & Earphones/Sports & Fitness Headphones`}>
                            <div style={linkStyle} >Sports & Fitness Headphones</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Electronics/Computer & Accessories`}>
                            <div style={linkStyle} >Computer & Accessories</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Electronics/Computer & Accessories/Chargers & Adapters`}>
                            <div style={linkStyle} >Chargers & Adapters</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Computer & Accessories/Data Storage`}>
                            <div style={linkStyle} >Data Storage</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Electronics/Computer & Accessories/Keyboards`}>
                            <div style={linkStyle} >Keyboards</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li onClick={(e) => handleMegaSubmenu(e)}>
            <Link href={`/c/Fashion`}>
                        <a>Fashion
                        <span className="sub-arrow"></span>
                        </a>
              </Link>
              <ul className="mega-menu fashion-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Fashion/Clothing, Shoes & Jewelry`}>
                            <div style={linkStyle} > Clothing, Shoes & Jewelry</div>
                            </Link>
                          
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Fashion/Clothing, Shoes & Jewelry/Kid's Fashion`}>
                            <div style={linkStyle} >Kid's Fashion</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Clothing, Shoes & Jewelry/Men's Fashion`}>
                            <div style={linkStyle} >Men's Fashion</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Clothing, Shoes & Jewelry/Shoes`}>
                            <div style={linkStyle} >Shoes</div>
                            </Link>  
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Clothing, Shoes & Jewelry/Women's Fashion`}>
                            <div style={linkStyle} >Women's Fashion</div>
                            </Link>
                            
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Fashion/Eyewear`}>
                            <div style={linkStyle} >Eyewear</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Fashion/Eyewear/Eyeglass Cases`}>
                            <div style={linkStyle} >Eyeglass Cases</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Eyewear/Eyeglass Chains`}>
                            <div style={linkStyle} >Eyeglass Chains</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Eyewear/Eyeglass Frames`}>
                            <div style={linkStyle} >Eyeglass Frames</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Eyewear/Replacement Sunglass Lenses`}>
                            <div style={linkStyle} >Replacement Sunglass Lenses</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Eyewear/Sunglasses`}>
                            <div style={linkStyle} >Sunglasses</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Fashion/Handbags`}>
                            <div style={linkStyle} >Handbags</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Fashion/Handbags/Clutches & Evening Bags`}>
                            <div style={linkStyle} >Clutches & Evening Bags</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Handbags/Crossbody Bags`}>
                            <div style={linkStyle} >Crossbody Bags</div>
                            </Link>
                          
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Handbags/Fashion Backpacks`}>
                            <div style={linkStyle} >Fashion Backpacks</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Handbags/Hobo Bags`}>
                            <div style={linkStyle} >Hobo Bags</div>
                            </Link>
                            
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Handbags/Satchels`}>
                            <div style={linkStyle} >Satchels</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Handbags/Shoulder bags`}>
                            <div style={linkStyle} >Shoulder bags</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Handbags/Top-Handle Bags`}>
                            <div style={linkStyle} >Top-Handle Bags</div>
                            </Link>
                            
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Handbags/Totes`}>
                            <div style={linkStyle} >Totes</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Handbags/Wallets`}>
                            <div style={linkStyle} >Wallets</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Handbags/Wristlets`}>
                            <div style={linkStyle} >Wristlets</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Fashion/Backpacks`}>
                            <div style={linkStyle} >Backpacks</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Fashion/Watches`}>
                            <div style={linkStyle} >Watches</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Fashion/Watches/Pocket Watches`}>
                            <div style={linkStyle} >Pocket Watches</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Watches/Smartwatches`}>
                            <div style={linkStyle} >Smartwatches</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Watches/Watch Bands`}>
                            <div style={linkStyle} >Watch Bands</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Fashion/Watches/Wrist Watches`}>
                            <div style={linkStyle} >Wrist Watches</div>
                            </Link>
                            
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Fashion/Jewellery`}>
                            <div style={linkStyle} >Jewellery</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li onClick={(e) => handleMegaSubmenu(e)}>

            <Link href={`/c/Home & Kitchen`}>
                        <a>Home & Kitchen
                        <span className="sub-arrow"></span>
                        </a>
              </Link>
              <ul className="mega-menu home-and-kitchen-menu">
                <li>
                  <Row m="0">
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Home & Kitchen/Bedding`}>
                            <div style={linkStyle} >Bedding</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Home & Kitchen/Bedding/Bedding & Accessories`}>
                            <div style={linkStyle} >Bedding & Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Bedding/Bedding Sets & Collections`}>
                            <div style={linkStyle} >Bedding Sets & Collections</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Bedding/Bedspreads, Coverlets & Sets`}>
                            <div style={linkStyle} >Bedspreads, Coverlets & Sets</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Bedding/Kid's Bedding`}>
                            <div style={linkStyle} >Kid's Bedding</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Bedding/Quilts & Sets`}>
                            <div style={linkStyle} >Quilts & Sets</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Towel Rings`}>
                            <div style={linkStyle} >Towel Rings</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Wall Art`}>
                            <div style={linkStyle} >Wall Art</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Wall Clocks`}>
                            <div style={linkStyle} >Wall Clocks</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Cleaning Supplies`}>
                            <div style={linkStyle} >Cleaning Supplies</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Bath`}>
                            <div style={linkStyle} >Bath</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Bathroom Accessories`}>
                            <div style={linkStyle} >Bathroom Accessories</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Home & Kitchen/Kitchen & Dining`}>
                            <div style={linkStyle} >Kitchen & Dining</div>
                            </Link> 
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dining/Bakeware`}>
                            <div style={linkStyle} >Bakeware</div>
                            </Link> 
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dining/Coffee, Tea & Espresso`}>
                            <div style={linkStyle} >Coffee, Tea & Espresso</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dining/Cookware`}>
                            <div style={linkStyle} >Cookware</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dining/Cutlery & Knife Accessories`}>
                            <div style={linkStyle} >Cutlery & Knife Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dining/Dining & Entertaining`}>
                            <div style={linkStyle} >Dining & Entertaining</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dining/Small Appliances`}>
                            <div style={linkStyle} >Small Appliances</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Tools & Home Improvement`}>
                            <div style={linkStyle} >Tools & Home Improvement</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Home & Kitchen/Tools & Home Improvement/Ceramic Tiles`}>
                            <div style={linkStyle} >Ceramic Tiles</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Tools & Home Improvement/Wall Plates`}>
                            <div style={linkStyle} >Wall Plates</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Home Appliances`}>
                            <div style={linkStyle} >Home Appliances</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Bar Tools & Drinkware`}>
                            <div style={linkStyle} >Bar Tools & Drinkware</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Home & Kitchen/Home Decor`}>
                            <div style={linkStyle} >Home Decor</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Home & Kitchen/Home Decor/Artificial Plants & Flowers`}>
                            <div style={linkStyle} >Artificial Plants & Flowers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Home Decor/Candles & Holders`}>
                            <div style={linkStyle} >Candles & Holders</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Home Decor/Clocks`}>
                            <div style={linkStyle} >Clocks</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Home Decor/Decorative Pillows`}>
                            <div style={linkStyle} >Decorative Pillows</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Home Decor/Home Decor Accents`}>
                            <div style={linkStyle} >Home Decor Accents</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Home Decor/Home Fragrance`}>
                            <div style={linkStyle} >Home Fragrance</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Home Decor/Mirrors`}>
                            <div style={linkStyle} >Mirrors</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Home Decor/Nursery Decor`}>
                            <div style={linkStyle} >Nursery Decor</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Kids' Home Store`}>
                            <div style={linkStyle} >Kids' Home Store</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Seasonal Decor`}>
                            <div style={linkStyle} >Seasonal Decor</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Storage & Organization`}>
                            <div style={linkStyle} >Storage & Organization</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Towel Bars`}>
                            <div style={linkStyle} >Towel Bars</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Home & Kitchen/Vacuum & Floor care`}>
                            <div style={linkStyle} >Vacuum & Floor care</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Home & Kitchen/Vacuum & Floor care/Carpet & Upholstery Cleaners & Accessories`}>
                            <div style={linkStyle} >Carpet & Upholstery Cleaners & Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Vacuum & Floor care/Floor Buffers & Parts`}>
                            <div style={linkStyle} >Floor Buffers & Parts</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Vacuum & Floor care/Vacuum Parts & Accessories`}>
                            <div style={linkStyle} >Vacuum Parts & Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Vacuum & Floor care/Vacuum`}>
                            <div style={linkStyle} >Vacuum</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Coasters`}>
                            <div style={linkStyle} >Coasters</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Event & Party Supplies`}>
                            <div style={linkStyle} >Event & Party Supplies</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Furniture`}>
                            <div style={linkStyle} >Furniture</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Glassware & Drinkware`}>
                            <div style={linkStyle} >Glassware & Drinkware</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Home & Kitchen/Heating, Cooling & Air Quality`}>
                            <div style={linkStyle} >Heating, Cooling & Air Quality</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li onClick={(e) => handleMegaSubmenu(e)}>
            <Link href={`/c/Beauty & Personal Care`}>
                        <a>Beauty & Personal Care
                        <span className="sub-arrow"></span>
                        </a>
              </Link>
              {/* <a
                href="#"
                onClick={(e) => handleMegaSubmenu(e, "Beauty & Personal Care")}
              >
                Beauty & Personal Care
                <span className="sub-arrow"></span>
              </a> */}
              <ul className="mega-menu beauty-and-personal-care-menu">
                <li>
                  <Row m="0">
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Foot, Hand & Nail Care`}>
                            <div style={linkStyle} >Foot, Hand & Nail Care</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Foot, Hand & Nail Care/Foot & Hand Care`}>
                            <div style={linkStyle} >Foot & Hand Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Foot, Hand & Nail Care/Nail Art & Polish`}>
                            <div style={linkStyle} >Nail Art & Polish</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Foot, Hand & Nail Care/Nail Care`}>
                            <div style={linkStyle} >Nail Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Foot, Hand & Nail Care/Tools & Accessories`}>
                            <div style={linkStyle} >Tools & Accessories</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Concealer`}>
                            <div style={linkStyle} >Concealer</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Foundation`}>
                            <div style={linkStyle} >Foundation</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Compact Powder`}>
                            <div style={linkStyle} >Compact Powder</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Hair Care & Styling`}>
                            <div style={linkStyle} >Hair Care & Styling</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Hair Care & Styling/Hair & Scalp Treatments`}>
                            <div style={linkStyle} >Hair & Scalp Treatments</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Hair Care & Styling/Hair Coloring Products`}>
                            <div style={linkStyle} >Hair Coloring Products</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Hair Care & Styling/Hair Dryers`}>
                            <div style={linkStyle} >Hair Dryers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Hair Care & Styling/Shampoos`}>
                            <div style={linkStyle} >Shampoos</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Hair Care & Styling/Styling Products`}>
                            <div style={linkStyle} >Styling Products</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Hair Care & Styling/Styling Tools & Appliances`}>
                            <div style={linkStyle} >Styling Tools & Appliances</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Makeup`}>
                            <div style={linkStyle} >Makeup</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Makeup/Eyebrow Color`}>
                            <div style={linkStyle} >Eyebrow Color</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Makeup/Eyeliners`}>
                            <div style={linkStyle} >Eyeliners</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Makeup/Eyeshadow`}>
                            <div style={linkStyle} >Eyeshadow</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Makeup/Eyeshadow Bases & Primers`}>
                            <div style={linkStyle} >Eyeshadow Bases & Primers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Makeup/Lipstick`}>
                            <div style={linkStyle} >Lipstick</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Fragrance`}>
                            <div style={linkStyle} >Fragrance</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Grooming`}>
                            <div style={linkStyle} >Grooming</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Bleaches`}>
                            <div style={linkStyle} >Bleaches</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Hair Oils`}>
                            <div style={linkStyle} >Hair Oils</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Cleansing Creams & Milks`}>
                            <div style={linkStyle} >Cleansing Creams & Milks</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Skin Care`}>
                            <div style={linkStyle} >Skin Care</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Toners`}>
                            <div style={linkStyle} >Toners</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Conditioners`}>
                            <div style={linkStyle} >Conditioners</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Face Wash`}>
                            <div style={linkStyle} >Face Wash</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Beauty & Personal Care/Bath Oils`}>
                            <div style={linkStyle} >Bath Oils</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li onClick={(e) => handleMegaSubmenu(e)}>
            <Link href={`/c/Health & Wellness`}>
                        <a>Health & Wellness
                        <span className="sub-arrow"></span>
                        </a>
              </Link>
              {/* <a
                href="#"
                onClick={(e) => handleMegaSubmenu(e, "Health & Wellness")}
              >
                Health & Wellness
                <span className="sub-arrow"></span>
              </a> */}
              <ul className="mega-menu beauty-and-personal-care-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Health & Wellness/Sports Nutrition`}>
                            <div style={linkStyle} >Sports Nutrition</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Health & Wellness/Sports Nutrition/Amino Acids`}>
                            <div style={linkStyle} >Amino Acids</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Sports Nutrition/Endurance & Energy`}>
                            <div style={linkStyle} >Endurance & Energy</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Sports Nutrition/Healthy Snacks & Beverages`}>
                            <div style={linkStyle} >Healthy Snacks & Beverages</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Sports Nutrition/Hydration`}>
                            <div style={linkStyle} >Hydration</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Sports Nutrition/Nutrition Bars`}>
                            <div style={linkStyle} >Sports Nutrition</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Sports Nutrition/Protein`}>
                            <div style={linkStyle} >Protein</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Health & Wellness/Vitamins & Dietary Supplements`}>
                            <div style={linkStyle} >Vitamins & Dietary Supplements</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Health & Wellness/Vitamins & Dietary Supplements/Blended Vitamin & Mineral Supplements`}>
                            <div style={linkStyle} >Blended Vitamin & Mineral Supplements</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Vitamins & Dietary Supplements/Herbal Supplements`}>
                            <div style={linkStyle} >Herbal Supplements</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Vitamins & Dietary Supplements/Minerals`}>
                            <div style={linkStyle} >Minerals</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Vitamins & Dietary Supplements/Supplements`}>
                            <div style={linkStyle} >Supplements</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Vitamins & Dietary Supplements/Vitamins`}>
                            <div style={linkStyle} >Vitamins</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Vitamins & Dietary Supplements/Weight Loss`}>
                            <div style={linkStyle} >Weight Loss</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Health & Wellness/Baby & Child Care`}>
                            <div style={linkStyle} >Baby & Child Care</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Health & Wellness/Baby & Child Care/Diaper Care`}>
                            <div style={linkStyle} >Diaper Care</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Health & Wellness/Health Care`}>
                            <div style={linkStyle} >Health Care</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Health & Wellness/Health Care/Alternative Medicine`}>
                            <div style={linkStyle} >Alternative Medicine</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Health Care/Diabetes Care`}>
                            <div style={linkStyle} >Diabetes Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Health Care/Ear Care`}>
                            <div style={linkStyle} >Ear Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Health Care/Eye Health`}>
                            <div style={linkStyle} >Eye Health</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Health Care/Feminine Care`}>
                            <div style={linkStyle} >Feminine Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Health Care/First Aid`}>
                            <div style={linkStyle} >First Aid</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Health & Wellness/Personal Care`}>
                            <div style={linkStyle} >Personal Care</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Health & Wellness/Personal Care/Bath & Bathing Accessories`}>
                            <div style={linkStyle} >Bath & Bathing Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Personal Care/Deodorants & Antiperspirants`}>
                            <div style={linkStyle} >Deodorants & Antiperspirants</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Personal Care/Hair Care`}>
                            <div style={linkStyle} >Hair Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Personal Care/Lip Care`}>
                            <div style={linkStyle} >Lip Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Health & Wellness/Personal Care/Skin Care`}>
                            <div style={linkStyle} >Skin Care</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Health & Wellness/Aromatherapy`}>
                            <div style={linkStyle} >Aromatherapy</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Health & Wellness/Oral Care`}>
                            <div style={linkStyle} >Oral Care</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Health & Wellness/Cloth Face Mask`}>
                            <div style={linkStyle} >Cloth Face Mask</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Health & Wellness/Vision Care`}>
                            <div style={linkStyle} >Vision Care</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li onClick={(e) => handleMegaSubmenu(e)}>
            <Link href={`/c/Grocery`}>
                        <a>Grocery
                        <span className="sub-arrow"></span>
                        </a>
              </Link>
              {/* <a href="#" onClick={(e) => handleMegaSubmenu(e, "Grocery")}>
                Grocery
                <span className="sub-arrow"></span>
              </a> */}
              <ul className="mega-menu beauty-and-personal-care-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Grocery/Baby Food`}>
                            <div style={linkStyle} >Baby Food</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Grocery/Baby Food/Cereal`}>
                            <div style={linkStyle} >Cereal</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Baby Food/Formula`}>
                            <div style={linkStyle} >Formula</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Baby Food/Meals`}>
                            <div style={linkStyle} >Meals</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Grocery/Beverages`}>
                            <div style={linkStyle} >Beverages</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Grocery/Beverages/Bottled Beverages, Water & Drink Mixes`}>
                            <div style={linkStyle} >Bottled Beverages, Water & Drink Mixes</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Beverages/Coffee, Tea & Cocoa`}>
                            <div style={linkStyle} >Coffee, Tea & Cocoa</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Grocery/Breakfast Food`}>
                            <div style={linkStyle} >Breakfast Food</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Grocery/Breakfast Food/Breakfast & Cereal Bars`}>
                            <div style={linkStyle} >Breakfast & Cereal Bars</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Breakfast Food/Breakfast Cereals`}>
                            <div style={linkStyle} >Breakfast Cereals</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Grocery/Candy & Chocolate`}>
                            <div style={linkStyle} >Candy & Chocolate</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Grocery/Candy & Chocolate/Brittle, Caramel & Toffee`}>
                            <div style={linkStyle} >Brittle, Caramel & Toffee</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Candy & Chocolate/Candied & Chocolate-Covered Snacks`}>
                            <div style={linkStyle} >Candied & Chocolate-Covered Snacks</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Candy & Chocolate/Candy & Chocolate Assortments`}>
                            <div style={linkStyle} >Candy & Chocolate Assortments</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Candy & Chocolate/Candy & Chocolate Bars`}>
                            <div style={linkStyle} >Candy & Chocolate Bars</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Candy & Chocolate/Candy & Chocolate Gifts`}>
                            <div style={linkStyle} >Candy & Chocolate Gifts</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Candy & Chocolate/Marshmallows`}>
                            <div style={linkStyle} >Marshmallows</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Candy & Chocolate/Mints`}>
                            <div style={linkStyle} >Mints</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/Grocery/Canned, Dry & Packaged Food`}>
                            <div style={linkStyle} >Canned, Dry & Packaged Food</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Grocery/Cooking Essentials`}>
                            <div style={linkStyle} >Cooking Essentials</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Grocery/Household Supplies`}>
                            <div style={linkStyle} >Household Supplies</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Grocery/Pet Supplies`}>
                            <div style={linkStyle} >Pet Supplies</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Grocery/Snack Food`}>
                            <div style={linkStyle} >Snack Food</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Grocery/Snack Food/Bars`}>
                            <div style={linkStyle} >Bars</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Snack Food/Chips & Crisps`}>
                            <div style={linkStyle} >Chips & Crisps</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Snack Food/Cookies`}>
                            <div style={linkStyle} >Cookies</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Snack Food/Crackers`}>
                            <div style={linkStyle} >Crackers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Grocery/Snack Food/Dried Food & Raisins`}>
                            <div style={linkStyle} >Dried Food & Raisins</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li onClick={(e) => handleMegaSubmenu(e)}>
            <Link href={`/c/Sports & Outdoors`}>
                        <a>Sports & Outdoors
                        <span className="sub-arrow"></span>
                        </a>
              </Link>
              {/* <a
                href="#"
                onClick={(e) => handleMegaSubmenu(e, "Sports & Outdoors")}
              >
                Sports & Outdoors
                <span className="sub-arrow"></span>
              </a> */}
              <ul className="mega-menu beauty-and-personal-care-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Camping & Hiking`}>
                            <div style={linkStyle} >Camping & Hiking</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Cycling`}>
                            <div style={linkStyle} >Cycling</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Scooters & Accessories`}>
                            <div style={linkStyle} >Scooters & Accessories</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Strength Training`}>
                            <div style={linkStyle} >Strength Training</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Cardio Training`}>
                            <div style={linkStyle} >Cardio Training</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Yoga`}>
                            <div style={linkStyle} >Yoga</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Exercise Accessories`}>
                            <div style={linkStyle} >Exercise Accessories</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Combat Sports`}>
                            <div style={linkStyle} >Combat Sports</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Team Sports`}>
                            <div style={linkStyle} >Team Sports</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Racquet Sports`}>
                            <div style={linkStyle} >Racquet Sports</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Water Sports`}>
                            <div style={linkStyle} >Water Sports</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Sports & Outdoors/Sports Nutrition`}>
                            <div style={linkStyle} >Sports Nutrition</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li onClick={(e) => handleMegaSubmenu(e)}>
            <Link href={`/c/Baby & Toys`}>
                        <a>Baby & Toys
                        <span className="sub-arrow"></span>
                        </a>
              </Link>
            
              <ul className="mega-menu beauty-and-personal-care-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link  style={linkStyle} href={`/c/Baby & Toys/Baby & Clothing Accessories`}>
                          <div style={linkStyle} >
                          Baby & Clothing Accessories
                          </div>
                          </Link>
                           
                        </h5>
                        <h5>
                        <Link href={`/c/Baby & Toys/Car Seats`}>
                            <div style={linkStyle} >Car Seats</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Baby & Toys/Diapering`}>
                            <div style={linkStyle} >Diapering</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Baby & Toys/Feeding`}>
                            <div style={linkStyle} >Feeding</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Baby & Toys/Gifts`}>
                            <div style={linkStyle} >Gifts</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Baby & Toys/Nursery`}>
                            <div style={linkStyle} >Sports Nutrition</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Baby & Toys/Toys & Games`}>
                            <div style={linkStyle} >Toys & Games</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/Baby & Toys/Travel Gear`}>
                            <div style={linkStyle} >Travel Gear</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li onClick={(e) => handleMegaSubmenu(e)}>
              <a href="#">Next Day Delivery</a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};
//
// <li>
//     <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
//         purses
//         <span className="sub-arrow"></span>
//     </a>
//     <ul>
//         <li>
//             <a href="#">purses</a>
//         </li>
//         <li>
//             <a href="#">wallets</a>
//         </li>
//         <li>
//             <a href="#">leathers</a>
//         </li>
//         <li>
//             <a href="#">satchels</a>
//         </li>
//     </ul>
// </li>

export default SideBar;
