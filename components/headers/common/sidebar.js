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
          
			if(pathname=="/category/")
			{
				 URL = pathname;	
			}
            else if(pathname== (geoLocation+"/category/"))
            {
                URL = pathname;	
                console.log("geolocation"+pathname+"/"+selectedCategory);
            }
			else 
			{

        console.log("else"+pathname);
        if(geoLocation==null)
        URL = "/category";
        else  
				URL = geoLocation+"/category";
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
              <Link href={`/category/electronics`}  >
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
                          <Link  style={linkStyle} href={`/category/electronics/camera-photo-and-videos`}>
                          <div style={linkStyle} >
                            Camera, Photo & Videos
                          </div>
                          </Link>
                        </h5>
                        <ul>
                          <li>
                            <Link href={`/category/electronics/camera-photo-and-videos/dslr`}>
                            <div style={linkStyle} >DSLR</div>
                            </Link>
                          </li>
                          <li>
                            {/* <a
                              style={linkStyle}
                              onClick={() => CategoryFilter("Lenses")}
                            > */}
                            <Link href={`/category/electronics/camera-photo-and-videos/lenses`}>
                            <div style={linkStyle} >Lenses</div>
                            </Link>
                              
                            {/* </a> */}
                          </li>
                          <li>
                          <Link href={`/category/electronics/camera-photo-and-videos/mirrorless-camera`}>
                            <div style={linkStyle} >Mirrorless Camera</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/camera-photo-and-videos/tripods-and-monopods`}>
                            <div style={linkStyle} >Tripods & Monopods</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/camera-photo-and-videos/video-cameras`}>
                            <div style={linkStyle} >Video Cameras</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/electronics/speakers`}>
                            <div style={linkStyle} >Speakers</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/electronics/speakers/ceiling-speakers`}>
                            <div style={linkStyle} >Ceiling Speakers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/speakers/center-channel-speakers`}>
                            <div style={linkStyle} >Center Channel Speakers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/Speakers/Portable Speakers`}>
                            <div style={linkStyle} >Portable Speakers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/speakers/soundbars`}>
                            <div style={linkStyle} >Soundbars</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/speakers/subwoofers`}>
                            <div style={linkStyle} >Subwoofers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/speakers/wireless-and-bluetooth-speakers`}>
                            <div style={linkStyle} >Wireless & Bluetooth Speakers</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/electronics/desktops`}>
                            <div style={linkStyle} >Desktops</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/electronics/desktops/all-in-Ones`}>
                            <div style={linkStyle} >All in Ones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/desktops/minis`}>
                            <div style={linkStyle} >Minis</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/desktops/towers`}>
                            <div style={linkStyle} >Towers</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/electronics/laptops`}>
                            <div style={linkStyle} >Laptops</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/electronics/phones`}>
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
                        <Link href={`/category/electronics/film-cameras`}>
                            <div style={linkStyle} >Film Cameras</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/electronics/film-Cameras/instant-Cameras`}>
                            <div style={linkStyle} >Instant Cameras</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                         <Link href={`/category/electronics/monitors`}>
                            <div style={linkStyle} >Monitors</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/electronics/tablets`}>
                            <div style={linkStyle} >Tablets</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/electronics/video-games`}>
                            <div style={linkStyle} >Video Games</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/electronics/video-games/accessories`}>
                            <div style={linkStyle} >Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/video-games/consoles`}>
                            <div style={linkStyle} >Consoles</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/video-games/games`}>
                            <div style={linkStyle} >Games</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/video-games/nintendo`}>
                            <div style={linkStyle} >Nintendo</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/electronics/headphones-and-earphones`}>
                            <div style={linkStyle} >Headphones & Earphones</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/electronics/headphones-and-earphones/bluetooth-headphones`}>
                            <div style={linkStyle} >Bluetooth Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/headphones-and-earphones/dj-Professional-Headphones`}>
                            <div style={linkStyle} >DJ & Professional Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/headphones-and-earphones/in-ear-earbud-headphones`}>
                            <div style={linkStyle} >In Ear Earbud Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/headphones-and-earphones/Noise-Cancelling Headphones`}>
                            <div style={linkStyle} >Noise-Cancelling Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/headphones-and-earphones/on-ear-headphones`}>
                            <div style={linkStyle} >On-Ear Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/headphones-and-earphones/over-ear-headphones`}>
                            <div style={linkStyle} >Over-Ear Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/headphones-and-earphones/premium-audio-headphones`}>
                            <div style={linkStyle} >Premium Audio Headphones</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/headphones-and-earphones/sports-and-fitness-headphones`}>
                            <div style={linkStyle} >Sports & Fitness Headphones</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/electronics/computer-and-accessories`}>
                            <div style={linkStyle} >Computer & Accessories</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/electronics/computer-and-accessories/chargers-and-adapters`}>
                            <div style={linkStyle} >Chargers & Adapters</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/computer-and-accessories/data-storage`}>
                            <div style={linkStyle} >Data Storage</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/electronics/computer-and-accessories/keyboards`}>
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
            <Link href={`/category/fashion`}>
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
                        <Link href={`/category/fashion/clothing-shoes-and-jewelry`}>
                            <div style={linkStyle} > Clothing, Shoes & Jewelry</div>
                            </Link>
                          
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/fashion/clothing-shoes-and-jewelry/kids-fashion`}>
                            <div style={linkStyle} >Kid's Fashion</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/clothing-Shoes-and-jewelry/mens-fashion`}>
                            <div style={linkStyle} >Men's Fashion</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/clothing-Shoes-and-jewelry/shoes`}>
                            <div style={linkStyle} >Shoes</div>
                            </Link>  
                          </li>
                          <li>
                          <Link href={`/category/fashion/clothing-Shoes-and-jewelry/womens-fashion`}>
                            <div style={linkStyle} >Women's Fashion</div>
                            </Link>
                            
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/fashion/eyewear`}>
                            <div style={linkStyle} >Eyewear</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/fashion/eyewear/eyeglass-cases`}>
                            <div style={linkStyle} >Eyeglass Cases</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/eyewear/eyeglass-Chains`}>
                            <div style={linkStyle} >Eyeglass Chains</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/eyewear/eyeglass-frames`}>
                            <div style={linkStyle} >Eyeglass Frames</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/eyewear/replacement-sunglass-lenses`}>
                            <div style={linkStyle} >Replacement Sunglass Lenses</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/eyewear/sunglasses`}>
                            <div style={linkStyle} >Sunglasses</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/fashion/handbags`}>
                            <div style={linkStyle} >Handbags</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/fashion/handbags/clutches-and-evening-bags`}>
                            <div style={linkStyle} >Clutches & Evening Bags</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/handbags/crossbody-bags`}>
                            <div style={linkStyle} >Crossbody Bags</div>
                            </Link>
                          
                          </li>
                          <li>
                          <Link href={`/category/fashion/handbags/fashion-backpacks`}>
                            <div style={linkStyle} >Fashion Backpacks</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/handbags/hobo-bags`}>
                            <div style={linkStyle} >Hobo Bags</div>
                            </Link>
                            
                          </li>
                          <li>
                          <Link href={`/category/fashion/handbags/satchels`}>
                            <div style={linkStyle} >Satchels</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/handbags/shoulder-bags`}>
                            <div style={linkStyle} >Shoulder bags</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/handbags/top-handle-bags`}>
                            <div style={linkStyle} >Top-Handle Bags</div>
                            </Link>
                            
                          </li>
                          <li>
                          <Link href={`/category/fashion/handbags/totes`}>
                            <div style={linkStyle} >Totes</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/handbags/wallets`}>
                            <div style={linkStyle} >Wallets</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/handbags/wristlets`}>
                            <div style={linkStyle} >Wristlets</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/fashion/backpacks`}>
                            <div style={linkStyle} >Backpacks</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/fashion/watches`}>
                            <div style={linkStyle} >Watches</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/fashion/watches/pocket-watches`}>
                            <div style={linkStyle} >Pocket Watches</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/watches/smartwatches`}>
                            <div style={linkStyle} >Smartwatches</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/watches/watch-bands`}>
                            <div style={linkStyle} >Watch Bands</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/fashion/watches/wrist-watches`}>
                            <div style={linkStyle} >Wrist Watches</div>
                            </Link>
                            
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/fashion/jewellery`}>
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

            <Link href={`/c/home-and-kitchen`}>
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
                        <Link href={`/c/home-and-kitchen/bedding`}>
                            <div style={linkStyle} >Bedding</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/home-&-kitchen/bedding/bedding-and-accessories`}>
                            <div style={linkStyle} >Bedding & Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/bedding/bedding-sets-and-collections`}>
                            <div style={linkStyle} >Bedding Sets & Collections</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/bedding/bedspreads-coverlets-sets`}>
                            <div style={linkStyle} >Bedspreads, Coverlets & Sets</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/bedding/kids-bedding`}>
                            <div style={linkStyle} >Kid's Bedding</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/bedding/quilts-and-sets`}>
                            <div style={linkStyle} >Quilts & Sets</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/home-and-kitchen/towel-rings`}>
                            <div style={linkStyle} >Towel Rings</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/wall-art`}>
                            <div style={linkStyle} >Wall Art</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/wall-clocks`}>
                            <div style={linkStyle} >Wall Clocks</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/cleaning-supplies`}>
                            <div style={linkStyle} >Cleaning Supplies</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/bath`}>
                            <div style={linkStyle} >Bath</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/bathroom-accessories`}>
                            <div style={linkStyle} >Bathroom Accessories</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/home-and-kitchen/kitchen-and-dining`}>
                            <div style={linkStyle} >Kitchen & Dining</div>
                            </Link> 
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/home-and-kitchen/kitchen-and-dining/bakeware`}>
                            <div style={linkStyle} >Bakeware</div>
                            </Link> 
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/kitchen-and-dining/coffee-tea-and-espresso`}>
                            <div style={linkStyle} >Coffee, Tea & Espresso</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/kitchen-and-dining/cookware`}>
                            <div style={linkStyle} >Cookware</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/kitchen-and-dining/cutlery-and-knife-accessories`}>
                            <div style={linkStyle} >Cutlery & Knife Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/kitchen-and-dining/dining-and-entertaining`}>
                            <div style={linkStyle} >Dining & Entertaining</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/kitchen-and-dining/small-appliances`}>
                            <div style={linkStyle} >Small Appliances</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/home-and-kitchen/tools-and-home-improvement`}>
                            <div style={linkStyle} >Tools & Home Improvement</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/home-and-kitchen/tools-and-home-improvement/ceramic-tiles`}>
                            <div style={linkStyle} >Ceramic Tiles</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/tools-and-home-improvement/wall plates`}>
                            <div style={linkStyle} >Wall Plates</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/home-and-kitchen/home-appliances`}>
                            <div style={linkStyle} >Home Appliances</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/bar-tools-and-drinkware`}>
                            <div style={linkStyle} >Bar Tools & Drinkware</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/home-and-kitchen/home-decor`}>
                            <div style={linkStyle} >Home Decor</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/home-and-kitchen/home-decor/artificial-plants-and-flowers`}>
                            <div style={linkStyle} >Artificial Plants & Flowers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/home-decor/candles-and-holders`}>
                            <div style={linkStyle} >Candles & Holders</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/home-decor/clocks`}>
                            <div style={linkStyle} >Clocks</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/home-decor/decorative-pillows`}>
                            <div style={linkStyle} >Decorative Pillows</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/home-decor/hom-decor-accents`}>
                            <div style={linkStyle} >Home Decor Accents</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/home-decor/home-fragrance`}>
                            <div style={linkStyle} >Home Fragrance</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/home-decor/mirrors`}>
                            <div style={linkStyle} >Mirrors</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/home-decor/nursery-decor`}>
                            <div style={linkStyle} >Nursery Decor</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/home-and-kitchen/kids-home-store`}>
                            <div style={linkStyle} >Kids' Home Store</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/seasonal-decor`}>
                            <div style={linkStyle} >Seasonal Decor</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/storage-and-organization`}>
                            <div style={linkStyle} >Storage & Organization</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/towel-bars`}>
                            <div style={linkStyle} >Towel Bars</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/home-and-kitchen/vacuum-and-floor-care`}>
                            <div style={linkStyle} >Vacuum & Floor care</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/home-and-kitchen/vacuum-and-floor care/carpet-and-upholstery-cleaners-accessories`}>
                            <div style={linkStyle} >Carpet & Upholstery Cleaners & Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/vacuum-and-floor-care/floor-buffers-parts`}>
                            <div style={linkStyle} >Floor Buffers & Parts</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/vacuum-and-floor-care/vacuum-parts-and-accessories`}>
                            <div style={linkStyle} >Vacuum Parts & Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/home-and-kitchen/vacuum-and-floor-care/vacuum`}>
                            <div style={linkStyle} >Vacuum</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/home-and-kitchen/coasters`}>
                            <div style={linkStyle} >Coasters</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/event-and-party-supplies`}>
                            <div style={linkStyle} >Event & Party Supplies</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/furniture`}>
                            <div style={linkStyle} >Furniture</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/glassware-and-drinkware`}>
                            <div style={linkStyle} >Glassware & Drinkware</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/home-and-kitchen/heating-cooling-air-quality`}>
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
            <Link href={`/c/beauty-and-personal-care`}>
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
                        <Link href={`/c/beauty-and-personal-care/foot-hand-and-nail-care`}>
                            <div style={linkStyle} >Foot-Hand & Nail Care</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/foot-hand-and-nail-care/foot-and-hand-care`}>
                            <div style={linkStyle} >Foot & Hand Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/foot-hand-and-nail-care/nail-art-and-polish`}>
                            <div style={linkStyle} >Nail Art & Polish</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/foot-hand-and-nail-care/nail-care`}>
                            <div style={linkStyle} >Nail Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/foot-hand-and-nail-care/tools-and-accessories`}>
                            <div style={linkStyle} >Tools & Accessories</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/concealer`}>
                            <div style={linkStyle} >Concealer</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/foundation`}>
                            <div style={linkStyle} >Foundation</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/compact-powder`}>
                            <div style={linkStyle} >Compact Powder</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/hair-care-and-styling`}>
                            <div style={linkStyle} >Hair Care & Styling</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/hair-care-and-styling/hair-and-scalp-treatments`}>
                            <div style={linkStyle} >Hair & Scalp Treatments</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/hair-care-and-styling/hair-coloring-products`}>
                            <div style={linkStyle} >Hair Coloring Products</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/hair-care-and-styling/hair-dryers`}>
                            <div style={linkStyle} >Hair Dryers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/hair-care-and-styling/shampoos`}>
                            <div style={linkStyle} >Shampoos</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/hair-care-and-styling/styling-products`}>
                            <div style={linkStyle} >Styling Products</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/hair-care-and-styling/styling-tools-and-appliances`}>
                            <div style={linkStyle} >Styling Tools & Appliances</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/makeup`}>
                            <div style={linkStyle} >Makeup</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/makeup/eyebrow-color`}>
                            <div style={linkStyle} >Eyebrow Color</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/makeup/eyeliners`}>
                            <div style={linkStyle} >Eyeliners</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/makeup/eyeshadow`}>
                            <div style={linkStyle} >Eyeshadow</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/makeup/eyeshadow-bases-and-primers`}>
                            <div style={linkStyle} >Eyeshadow Bases & Primers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/c/beauty-and-personal-care/makeup/lipstick`}>
                            <div style={linkStyle} >Lipstick</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/fragrance`}>
                            <div style={linkStyle} >Fragrance</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/grooming`}>
                            <div style={linkStyle} >Grooming</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/bleaches`}>
                            <div style={linkStyle} >Bleaches</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="3">
                      <div className="link-section">
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/hair-oils`}>
                            <div style={linkStyle} >Hair Oils</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/cleansing-creams-and-milks`}>
                            <div style={linkStyle} >Cleansing Creams & Milks</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/skin-care`}>
                            <div style={linkStyle} >Skin Care</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/toners`}>
                            <div style={linkStyle} >Toners</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/conditioners`}>
                            <div style={linkStyle} >Conditioners</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/face-wash`}>
                            <div style={linkStyle} >Face Wash</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/c/beauty-and-personal-care/bath-oils`}>
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
            <Link href={`/category/health-and-wellness`}>
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
                        <Link href={`/category/health-and-wellness/sports-nutrition`}>
                            <div style={linkStyle} >Sports Nutrition</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/health-and-wellness/sports-nutrition/amino-acids`}>
                            <div style={linkStyle} >Amino Acids</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/sports-nutrition/endurance-and-energy`}>
                            <div style={linkStyle} >Endurance & Energy</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/sports-nutrition/healthy-snacks-and-beverages`}>
                            <div style={linkStyle} >Healthy Snacks & Beverages</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/sports-nutrition/hydration`}>
                            <div style={linkStyle} >Hydration</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/sports-nutrition/nutrition-bars`}>
                            <div style={linkStyle} >Sports Nutrition</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/sports-nutrition/protein`}>
                            <div style={linkStyle} >Protein</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/health-and-wellness/vitamins-and-dietary-supplements`}>
                            <div style={linkStyle} >Vitamins & Dietary Supplements</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/health-and-wellness/vitamins-and-dietary-supplements/blended-vitamin-and-mineral-supplements`}>
                            <div style={linkStyle} >Blended Vitamin & Mineral Supplements</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/vitamins-and-dietary-supplements/herbal-supplements`}>
                            <div style={linkStyle} >Herbal Supplements</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/vitamins-and-dietary-supplements/minerals`}>
                            <div style={linkStyle} >Minerals</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/vitamins-and-dietary-supplements/supplements`}>
                            <div style={linkStyle} >Supplements</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/vitamins-and-dietary-supplements/vitamins`}>
                            <div style={linkStyle} >Vitamins</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/vitamins-and-dietary-supplements/weight-loss`}>
                            <div style={linkStyle} >Weight Loss</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/health-and-wellness/baby-and-child-care`}>
                            <div style={linkStyle} >Baby & Child Care</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/health-and-wellness/baby-and-child-care/diaper-care`}>
                            <div style={linkStyle} >Diaper Care</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/health-and-wellness/health-care`}>
                            <div style={linkStyle} >Health Care</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/health-and-wellness/health-care/alternative-medicine`}>
                            <div style={linkStyle} >Alternative Medicine</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/health-care/diabetes-care`}>
                            <div style={linkStyle} >Diabetes Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/health-care/ear-care`}>
                            <div style={linkStyle} >Ear Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/health-care/eye-health`}>
                            <div style={linkStyle} >Eye Health</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/health-care/feminine-care`}>
                            <div style={linkStyle} >Feminine Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/health-care/first-aid`}>
                            <div style={linkStyle} >First Aid</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/health-and-wellness/personal-care`}>
                            <div style={linkStyle} >Personal Care</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/health-and-wellness/personal-care/bath-and-bathing-accessories`}>
                            <div style={linkStyle} >Bath & Bathing Accessories</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/personal-care/deodorants-and-antiperspirants`}>
                            <div style={linkStyle} >Deodorants & Antiperspirants</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/personal-care/hair-care`}>
                            <div style={linkStyle} >Hair Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/personal-care/lip-care`}>
                            <div style={linkStyle} >Lip Care</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/health-and-wellness/personal-care/skin-care`}>
                            <div style={linkStyle} >Skin Care</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/health-and-wellness/aromatherapy`}>
                            <div style={linkStyle} >Aromatherapy</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/health-and-wellness/oral-care`}>
                            <div style={linkStyle} >Oral Care</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/health-and-wellness/cloth-face-mask`}>
                            <div style={linkStyle} >Cloth Face Mask</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/health-and-wellness/vision-care`}>
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
            <Link href={`/category/grocery`}>
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
                        <Link href={`/category/grocery/baby-food`}>
                            <div style={linkStyle} >Baby Food</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/grocery/baby-food/cereal`}>
                            <div style={linkStyle} >Cereal</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/baby-food/formula`}>
                            <div style={linkStyle} >Formula</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/baby-food/meals`}>
                            <div style={linkStyle} >Meals</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/grocery/beverages`}>
                            <div style={linkStyle} >Beverages</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/grocery/beverages/bottled-beverages-water-and-drink-mixes`}>
                            <div style={linkStyle} >Bottled Beverages, Water & Drink Mixes</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/beverages/coffee-tea-and-cocoa`}>
                            <div style={linkStyle} >Coffee, Tea & Cocoa</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/grocery/breakfast-food`}>
                            <div style={linkStyle} >Breakfast Food</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/Grocery/breakfast-food/breakfast-and-cereal-bars`}>
                            <div style={linkStyle} >Breakfast & Cereal Bars</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/breakfast-food/breakfast-cereals`}>
                            <div style={linkStyle} >Breakfast Cereals</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/grocery/candy-and-chocolate`}>
                            <div style={linkStyle} >Candy & Chocolate</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/grocery/candy-and-chocolate/brittle-caramel-and-toffee`}>
                            <div style={linkStyle} >Brittle, Caramel & Toffee</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/candy-and-chocolate/candied-and-chocolate-covered-snacks`}>
                            <div style={linkStyle} >Candied & Chocolate-Covered Snacks</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/candy-and-chocolate/candy-and-chocolate-assortments`}>
                            <div style={linkStyle} >Candy & Chocolate Assortments</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/candy-and-chocolate/candy-and-chocolate-bars`}>
                            <div style={linkStyle} >Candy & Chocolate Bars</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/candy-and-Chocolate/candy-and-chocolate-gifts`}>
                            <div style={linkStyle} >Candy & Chocolate Gifts</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/candy-and-chocolate/marshmallows`}>
                            <div style={linkStyle} >Marshmallows</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/candy-and-chocolate/mints`}>
                            <div style={linkStyle} >Mints</div>
                            </Link>
                          </li>
                        </ul>
                        <h5>
                        <Link href={`/category/grocery/canned-dry-and-packaged-Food`}>
                            <div style={linkStyle} >Canned, Dry & Packaged Food</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/grocery/cooking-essentials`}>
                            <div style={linkStyle} >Cooking Essentials</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/grocery/household-supplies`}>
                            <div style={linkStyle} >Household Supplies</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/grocery/pet-supplies`}>
                            <div style={linkStyle} >Pet Supplies</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/grocery/snack-food`}>
                            <div style={linkStyle} >Snack Food</div>
                            </Link>
                        </h5>
                        <ul>
                          <li>
                          <Link href={`/category/grocery/snack-food/bars`}>
                            <div style={linkStyle} >Bars</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/snack-food/chips-and-crisps`}>
                            <div style={linkStyle} >Chips & Crisps</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/snack-food/cookies`}>
                            <div style={linkStyle} >Cookies</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/snack-food/crackers`}>
                            <div style={linkStyle} >Crackers</div>
                            </Link>
                          </li>
                          <li>
                          <Link href={`/category/grocery/snack-food/dried-food-and-raisins`}>
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
            <Link href={`/category/sports-and-outdoors`}>
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
                        <Link href={`/category/sports-and-outdoors/camping-and-hiking`}>
                            <div style={linkStyle} >Camping & Hiking</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/sports-and-outdoors/cycling`}>
                            <div style={linkStyle} >Cycling</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/sports-and-outdoors/scooters-and-accessories`}>
                            <div style={linkStyle} >Scooters & Accessories</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/sports-and-outdoors/strength-training`}>
                            <div style={linkStyle} >Strength Training</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/sports-and-outdoors/cardio-training`}>
                            <div style={linkStyle} >Cardio Training</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/sports-and-outdoors/yoga`}>
                            <div style={linkStyle} >Yoga</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/sports-and-outdoors/exercise-accessories`}>
                            <div style={linkStyle} >Exercise Accessories</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/sports-and-outdoors/combat-sports`}>
                            <div style={linkStyle} >Combat Sports</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/sports-and-outdoors/team-sports`}>
                            <div style={linkStyle} >Team Sports</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/sports-and-outdoors/racquet-sports`}>
                            <div style={linkStyle} >Racquet Sports</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/sports-and-outdoors/water-sports`}>
                            <div style={linkStyle} >Water Sports</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/Sports & Outdoors/sports-nutrition`}>
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
            <Link href={`/category/baby-and-toys`}>
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
                        <Link  style={linkStyle} href={`/category/baby-and-toys/baby-and-clothing-accessories`}>
                          <div style={linkStyle} >
                          Baby & Clothing Accessories
                          </div>
                          </Link>
                           
                        </h5>
                        <h5>
                        <Link href={`/category/baby-and-toys/car-seats`}>
                            <div style={linkStyle} >Car Seats</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/baby-and-toys/diapering`}>
                            <div style={linkStyle} >Diapering</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/baby-and-toys/feeding`}>
                            <div style={linkStyle} >Feeding</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/baby-and-toys/gifts`}>
                            <div style={linkStyle} >Gifts</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/baby-and-toys/nursery`}>
                            <div style={linkStyle} >Sports Nutrition</div>
                            </Link>
                        </h5>
                      </div>
                    </Col>
                    <Col xl="4">
                      <div className="link-section">
                        <h5>
                        <Link href={`/category/baby-and-toys/toys-and-games`}>
                            <div style={linkStyle} >Toys & Games</div>
                            </Link>
                        </h5>
                        <h5>
                        <Link href={`/category/baby-and-toys/travel-gear`}>
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
