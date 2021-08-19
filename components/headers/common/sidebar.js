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

    if (event.target.nextElementSibling.classList.contains("opensub2"))
      event.target.nextElementSibling.classList.remove("opensub2");
    else {
      document.querySelectorAll(".opensub2").forEach(function (value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  };
  const handleSubThreeMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub3"))
      event.target.nextElementSibling.classList.remove("opensub3");
    else {
      document.querySelectorAll(".opensub3").forEach(function (value) {
        value.classList.remove("opensub3");
      });
      event.target.nextElementSibling.classList.add("opensub3");
    }
  };

  const handleSubFourMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub4"))
      event.target.nextElementSibling.classList.remove("opensub4");
    else {
      document.querySelectorAll(".opensub4").forEach(function (value) {
        value.classList.remove("opensub4");
      });
      event.target.nextElementSibling.classList.add("opensub4");
    }
  };

  const handleMegaSubmenu = (event, menu) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensidesubmenu"))
      event.target.nextElementSibling.classList.remove("opensidesubmenu");
    else {
      event.target.nextElementSibling.classList.add("opensidesubmenu");
    }

    CategoryFilter(menu);
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
            <li>
              <Link href={`/c/Electronics`}>
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
                            <div style={linkStyle} > DSLR</div>
                            </Link>
                          </li>
                          <li>
                            {/* <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Lenses")}
                            > */}
                            <Link href={`/c/Electronics/Camera, Photo & Videos/DSLR`}>
                            Lenses
                            </Link>
                              
                            {/* </a> */}
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Mirrorless Camera")
                              }
                            >
                              Mirrorless Camera
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Tripods & Monopods")
                              }
                            >
                              Tripods & Monopods
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Video Cameras")}
                            >
                              Video Cameras
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Speakers")}
                          >
                            Speakers
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Ceiling Speakers")}
                            >
                              Ceiling Speakers
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Center Channel Speakers")
                              }
                            >
                              Center Channel Speakers
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Portable Speakers")
                              }
                            >
                              Portable Speakers
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Soundbars")}
                            >
                              Soundbars
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Subwoofers")}
                            >
                              Subwoofers
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Wireless & Bluetooth Speakers")
                              }
                            >
                              Wireless & Bluetooth Speakers
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Desktops")}
                          >
                            Desktops
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("All in Ones")}
                            >
                              All in Ones
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Minis")}
                            >
                              Minis
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Towers")}
                            >
                              Towers
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Laptops")}
                          >
                            Laptops
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Phones")}
                          >
                            Phones
                          </div>
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
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Film Cameras")}
                          >
                            Film Cameras
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Instant Cameras")}
                            >
                              Instant Cameras
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Monitors")}
                          >
                            Monitors{" "}
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Tablets")}
                          >
                            Tablets
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Video Games")}
                          >
                            Video Games
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Accessories")}
                            >
                              Accessories
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Consoles")}
                            >
                              Consoles
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Games")}
                            >
                              Games
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Nintendo")}
                            >
                              Nintendo
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() =>
                              CategoryFilter("Headphones & Earphones")
                            }
                          >
                            Headphones & Earphones
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Bluetooth Headphones")
                              }
                            >
                              Bluetooth Headphones
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("DJ/Professional Headphones")
                              }
                            >
                              DJ/Professional Headphones
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("In Ear Earbud Headphones")
                              }
                            >
                              In Ear Earbud Headphones
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Noise-Cancelling Headphones")
                              }
                            >
                              Noise-Cancelling Headphones
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("On-Ear Headphones")
                              }
                            >
                              On-Ear Headphones
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Over-Ear Headphones")
                              }
                            >
                              Over-Ear Headphones
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Premium Audio Headphones")
                              }
                            >
                              Premium Audio Headphones
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Sports & Fitness Headphones")
                              }
                            >
                              Sports & Fitness Headphones
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() =>
                              CategoryFilter("Computer & Accessories")
                            }
                          >
                            Computer & Accessories
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Chargers & Adapters")
                              }
                            >
                              Chargers & Adapters
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Data Storage")}
                            >
                              Data Storage
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Keyboards")}
                            >
                              Keyboards
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li>
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
                            <div style={linkStyle} >Hobo Bags</div>
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
            <li>

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
                        <Link href={`/c/Home & Kitchen/Kitchen & Dinning`}>
                            <div style={linkStyle} >Kitchen & Dinning</div>
                            </Link> 
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dinning/Bakeware`}>
                            <div style={linkStyle} >Bakeware</div>
                            </Link> 
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dinning/Coffee, Tea & Espresso`}>
                            <div style={linkStyle} >Coffee, Tea & Espresso</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dinning/Cookware`}>
                            <div style={linkStyle} >Cookware</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dinning/Cutlery & Knife Accessories`}>
                            <div style={linkStyle} >Cutlery & Knife Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dinning/Dining & Entertaining`}>
                            <div style={linkStyle} >Dining & Entertaining</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Home & Kitchen/Kitchen & Dinning/Small Appliances`}>
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
                            <div style={linkStyle} >Floor Buffers & Parts</div>
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
            <li>
              <a
                href="#"
                onClick={(e) => handleMegaSubmenu(e, "Beauty & Personal Care")}
              >
                Beauty & Personal Care
                <span className="sub-arrow"></span>
              </a>
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
                          <Link href={`/c/Beauty & Personal Care/Hair Care & Styling/Hair & Scalp Treatments`}>
                            <div style={linkStyle} >Hair & Scalp Treatments</div>
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
                            <div style={linkStyle} >Makeup</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Makeup/Eyeshadow Bases & Primers`}>
                            <div style={linkStyle} >Makeup</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/Beauty & Personal Care/Makeup/Lipstick`}>
                            <div style={linkStyle} >Makeup</div>
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
            <li>
              <a
                href="#"
                onClick={(e) => handleMegaSubmenu(e, "Health & Wellness")}
              >
                Health & Wellness
                <span className="sub-arrow"></span>
              </a>
              <ul className="mega-menu beauty-and-personal-care-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/Health & Wellness/Sports Nutrition`}>
                            <div style={linkStyle} >Sports Nutrition</div>
                            </Link>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Sports Nutrition")}
                          >
                            Sports Nutrition
                          </div>
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
            <li>
              <a href="#" onClick={(e) => handleMegaSubmenu(e, "Grocery")}>
                Grocery
                <span className="sub-arrow"></span>
              </a>
              <ul className="mega-menu beauty-and-personal-care-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Baby Food")}
                          >
                            Baby Food
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Cereal")}
                            >
                              Cereal
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Formula")}
                            >
                              Formula
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Meals")}
                            >
                              Meals
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Beverages")}
                          >
                            Beverages
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter(
                                  "Bottled Beverages, Water & Drink Mixes"
                                )
                              }
                            >
                              Bottled Beverages, Water & Drink Mixes
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Coffee, Tea & Cocoa")
                              }
                            >
                              Coffee, Tea & Cocoa
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Breakfast Food")}
                          >
                            Breakfast Food
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Breakfast & Cereal Bars")
                              }
                            >
                              Breakfast & Cereal Bars
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Breakfast Cereals")
                              }
                            >
                              Breakfast Cereals
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Candy & Chocolate")}
                          >
                            Candy & Chocolate
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Brittle, Caramel & Toffee")
                              }
                            >
                              Brittle, Caramel & Toffee
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter(
                                  "Candied & Chocolate-Covered Snacks"
                                )
                              }
                            >
                              Candied & Chocolate-Covered Snacks
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Candy & Chocolate Assortments")
                              }
                            >
                              Candy & Chocolate Assortments
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Candy & Chocolate Bars")
                              }
                            >
                              Candy & Chocolate Bars
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Candy & Chocolate Gifts")
                              }
                            >
                              Candy & Chocolate Gifts
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Marshmallows")}
                            >
                              Marshmallows
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Mints")}
                            >
                              Mints
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() =>
                              CategoryFilter("Canned, Dry & Packaged Food")
                            }
                          >
                            Canned, Dry & Packaged Food
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Cooking Essentials")}
                          >
                            Cooking Essentials
                          </div>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Household Supplies")}
                          >
                            Household Supplies
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Pet Supplies")}
                          >
                            Pet Supplies
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Snack Food")}
                          >
                            Snack Food
                          </div>
                        </h5>
                        <ul>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Bars")}
                            >
                              Bars
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Chips & Crisps")}
                            >
                              Chips & Crisps
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Cookies")}
                            >
                              Cookies
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Crackers")}
                            >
                              Crackers
                            </a>
                          </li>
                          <li>
                            <a
                              style={linkStyle}
                              onClick={() =>
                                CategoryFilter("Dried Food & Raisins")
                              }
                            >
                              Dried Food & Raisins
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => handleMegaSubmenu(e, "Sports & Outdoors")}
              >
                Sports & Outdoors
                <span className="sub-arrow"></span>
              </a>
              <ul className="mega-menu beauty-and-personal-care-menu">
                <li>
                  <Row m="0">
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Camping & Hiking")}
                          >
                            Camping & Hiking
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Cycling")}
                          >
                            Cycling
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() =>
                              CategoryFilter("Scooters & Accessories")
                            }
                          >
                            Scooters & Accessories
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Strength Training")}
                          >
                            Strength Training
                          </div>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Cardio Training")}
                          >
                            Cardio Training
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Yoga")}
                          >
                            Yoga
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() =>
                              CategoryFilter("Exercise Accessories")
                            }
                          >
                            Exercise Accessories
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Combat Sports")}
                          >
                            Combat Sports
                          </div>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Team Sports")}
                          >
                            Team Sports
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Racquet Sports")}
                          >
                            Racquet Sports
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Water Sports")}
                          >
                            Water Sports
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Sports Nutrition")}
                          >
                            Sports Nutrition
                          </div>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li>
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
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Car Seats")}
                          >
                            Car Seats
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Diapering")}
                          >
                            Diapering
                          </div>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Feeding")}
                          >
                            Feeding
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Gifts")}
                          >
                            Gifts
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Nursery")}
                          >
                            Nursery
                          </div>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Toys & Games")}
                          >
                            Toys & Games
                          </div>
                        </h5>
                        <h5>
                          <div
                            style={linkStyle}
                            onClick={() => CategoryFilter("Travel Gear")}
                          >
                            Travel Gear
                          </div>
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </li>
              </ul>
            </li>
            <li>
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
