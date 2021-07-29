import React, {useState, useContext,Fragment} from 'react';
// import React, { useState, useContext, useEffect } from 'react';
import {Row, Col, Media} from 'reactstrap';
import FilterContext from '../../../helpers/filter/FilterContext';
import fashion from '../../../public/assets/images/mega-menu/fashion.jpg';
import Link from 'next/link'
import { useRouter } from 'next/router';


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
    var geoLocation =  sessionStorage.getItem('geoLocation');
    
    const closeNav = () => {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
    }

    const linkStyle ={
        fontSize: 12,
        cursor: 'pointer',
    }


    const CategoryFilter = (category) => {
        // router.push(`/p/${product.id}` + '-' + `${titleProps}`);
			const pathname = window.location.pathname;
			setUrl(pathname);
            var URL = ""
			if(pathname=="/shop/six_grid")
			{
				 URL = pathname;	
			}
            else if(pathname== (geoLocation+"/shop/six_grid"))
            {
                URL = pathname;	
            }
			else 
			{

				URL = geoLocation+"/shop/six_grid";
			}
            filterContext.setSelectedCategory(category)
            filterContext.setselectedKeyword("")
            filterContext.setSelectedPromaflag([])
        	router.push(`${URL}?${selectedCategory}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}&keyword=`)
    }

    const handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensub1'))
            event.target.nextElementSibling.classList.remove('opensub1')
        else {
            document.querySelectorAll('.opensub1').forEach(function (value) {
                value.classList.remove('opensub1');
            });
            event.target.nextElementSibling.classList.add('opensub1')
        }
    }

    const handleSubTwoMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensub2'))
            event.target.nextElementSibling.classList.remove('opensub2')
        else {
            document.querySelectorAll('.opensub2').forEach(function (value) {
                value.classList.remove('opensub2');
            });
            event.target.nextElementSibling.classList.add('opensub2')
        }
    }
    const handleSubThreeMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensub3'))
            event.target.nextElementSibling.classList.remove('opensub3')
        else {
            document.querySelectorAll('.opensub3').forEach(function (value) {
                value.classList.remove('opensub3');
            });
            event.target.nextElementSibling.classList.add('opensub3')
        }
    }

    const handleSubFourMenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensub4'))
            event.target.nextElementSibling.classList.remove('opensub4')
        else {
            document.querySelectorAll('.opensub4').forEach(function (value) {
                value.classList.remove('opensub4');
            });
            event.target.nextElementSibling.classList.add('opensub4')
        }
    }

    const handleMegaSubmenu = (event,menu) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensidesubmenu'))
            event.target.nextElementSibling.classList.remove('opensidesubmenu')
        else {
            event.target.nextElementSibling.classList.add('opensidesubmenu')
        }

        CategoryFilter(menu);
    }

    return (
        <Fragment>
            <div id="mySidenav" className="sidenav">
                <a href={null} className="sidebar-overlay" onClick={closeNav}>
                </a>
                <nav>
                    <a href={null} onClick={closeNav}>
                        <div className="sidebar-back text-left">
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                        </div>
                    </a>
                    <ul id="sub-menu" className="sidebar-menu">
                        <li>
                            <a href="#" onClick={(e) => handleMegaSubmenu(e,"Electronics")}>
                                Electronics
                                <span className="sub-arrow"></span>
                            </a>
                            <ul className="mega-menu electronics-menu">
                                <li>
                                    <Row m='0'>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Camera, Photo & Videos")}>Camera, Photo & Videos</div></h5>
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle} onClick={() => CategoryFilter("DSLR")}>DSLR</a>
                                                        {/* <Link href={`/shop/six_grid`} >
                                                            <a>DSLR</a>
                                                        </Link> */}
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Lenses")}>Lenses</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Mirrorless Camera")}>Mirrorless Camera</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Tripods & Monopods")}>Tripods & Monopods</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Video Cameras")}>Video Cameras</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Speakers")}>Speakers</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Ceiling Speakers")}>Ceiling Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Center Channel Speakers")}>Center Channel Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Portable Speakers")}>Portable Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Soundbars")}>Soundbars</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Subwoofers")}>Subwoofers</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Wireless & Bluetooth Speakers")}>Wireless & Bluetooth Speakers</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Desktops")}>Desktops</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("All in Ones")}>All in Ones</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Minis")}>Minis</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Towers")}>Towers</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Laptops")}>Laptops</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Phones")}>Phones</div></h5> 
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
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Film Cameras")}>Film Cameras</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Instant Cameras")}>Instant Cameras</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle}  onClick={() => CategoryFilter("Monitors")}>Monitors </div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Tablets")}>Tablets</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Video Games")}>Video Games</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Accessories")}>Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Consoles")}>Consoles</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Games")}>Games</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Nintendo")}>Nintendo</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Headphones & Earphones")}>Headphones & Earphones</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Bluetooth Headphones")}>Bluetooth Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("DJ/Professional Headphones")}>DJ/Professional Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("In Ear Earbud Headphones")}>In Ear Earbud Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Noise-Cancelling Headphones")}>Noise-Cancelling Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("On-Ear Headphones")}>On-Ear Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Over-Ear Headphones")}>Over-Ear Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Premium Audio Headphones")}>Premium Audio Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Sports & Fitness Headphones")}>Sports & Fitness Headphones</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Computer & Accessories")}>Computer & Accessories</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Chargers & Adapters")}>Chargers & Adapters</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Data Storage")}>Data Storage</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Keyboards")}>Keyboards</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleMegaSubmenu(e,"Fashion")}>
                                Fashion
                                <span className="sub-arrow"></span>
                            </a>
                            <ul className="mega-menu fashion-menu">
                                <li>
                                    <Row m='0'>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Clothing, Shoes & Jewelry")}>Clothing, Shoes & Jewelry</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Kid's Fashion")}>Kid's Fashion</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Men's Fashion")}>Men's Fashion</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Shoes")}>Shoes</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Women's Fashion")}>Women's Fashion</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Eyewear")}>Eyewear</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Eyeglass Cases")}>Eyeglass Cases</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Eyeglass Chains")}>Eyeglass Chains</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Eyeglass Frames")}>Eyeglass Frames</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Replacement Sunglass Lenses")}>Replacement Sunglass Lenses</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Sunglasses")}>Sunglasses</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Handbags")}>Handbags</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Clutches & Evening Bags")}>Clutches & Evening Bags</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Crossbody Bags")}>Crossbody Bags</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Fashion Backpacks")}>Fashion Backpacks</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Hobo Bags")}>Hobo Bags</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Satchels")}>Satchels</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Shoulder bags")}>Shoulder bags</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Top-Handle Bags")}>Top-Handle Bags</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Totes")}>Totes</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Wallets")}>Wallets</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Wristlets")}>Wristlets</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Backpacks")}>Backpacks</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Watches")}>Watches</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Pocket Watches")}>Pocket Watches</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Smartwatches")}>Smartwatches</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Watch Bands")}>Watch Bands</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Wrist Watches")}>Wrist Watches</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Jewellery")}>Jewellery</div></h5> 
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleMegaSubmenu(e,"Home & Kitchen")}>
                                Home & Kitchen
                                <span className="sub-arrow"></span>
                            </a>
                            <ul className="mega-menu home-and-kitchen-menu">
                                <li>
                                    <Row m='0'>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Bedding")}>Bedding</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Bedding & Accessories")}>Bedding & Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Bedding Sets & Collections")}>Bedding Sets & Collections</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Bedspreads, Coverlets & Sets")}>Bedspreads, Coverlets & Sets</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Kid's Bedding")}>Kid's Bedding</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Quilts & Sets")}>Quilts & Sets</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Towel Rings")}>Towel Rings</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Wall Art")}>Wall Art</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Wall Clocks")}>Wall Clocks</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Cleaning Supplies")}>Cleaning Supplies</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Bath")}>Bath</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Bathroom Accessories")}>Bathroom Accessories</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Kitchen & Dinning")}>Kitchen & Dinning</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Bakeware")}>Bakeware</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Coffee, Tea & Espresso")}>Coffee, Tea & Espresso</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Cookware")}>Cookware</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Cutlery & Knife Accessories")}>Cutlery & Knife Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Dining & Entertaining")}>Dining & Entertaining</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Small Appliances")}>Small Appliances</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Tools & Home Improvement")}>Tools & Home Improvement</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Ceramic Tiles")}>Ceramic Tiles</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Wall Plates")}>Wall Plates</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Home Appliances")}>Home Appliances</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Bar Tools & Drinkware")}>Bar Tools & Drinkware</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Home Decor")}>Home Decor</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Artificial Plants & Flowers")}>Artificial Plants & Flowers</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Candles & Holders")}>Candles & Holders</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Clocks")}>Clocks</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Decorative Pillows")}>Decorative Pillows</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Home Decor Accents")}>Home Decor Accents</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Home Fragrance")}>Home Fragrance</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Mirrors")}>Mirrors</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Nursery Decor")}>Nursery Decor</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Kids' Home Store")}>Kids' Home Store</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Seasonal Decor")}>Seasonal Decor</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Storage & Organization")}>Storage & Organization</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Tower Bars")}>Tower Bars</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Vacuum & Floor care")}>Vacuum & Floor care</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Carpet & Upholstery Cleaners & Accessories")}>Carpet & Upholstery Cleaners & Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Floor Buffers & Parts")}>Floor Buffers & Parts</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Vacuum Parts & Accessories")}>Vacuum Parts & Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Vacuum")}>Vacuum</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Coasters")}>Coasters</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Event & Party Supplies")}>Event & Party Supplies</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Furniture")}>Furniture</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Glassware & Drinkware")}>Glassware & Drinkware</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Heating, Cooling & Air Quality")}>Heating, Cooling & Air Quality</div></h5> 
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleMegaSubmenu(e,"Beauty & Personal Care")}>
                                Beauty & Personal Care
                                <span className="sub-arrow"></span>
                            </a>
                            <ul className="mega-menu beauty-and-personal-care-menu">
                                <li>
                                    <Row m='0'>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Foot, Hand & Nail Care")}>Foot, Hand & Nail Care</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Foot & Hand Care")}>Foot & Hand Care</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Nail Art & Polish")}>Nail Art & Polish</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Nail Care")}>Nail Care</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Tools & Accessories")}>Tools & Accessories</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Concealer")}>Concealer</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Foundation")}>Foundation</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Compact Powder")}>Compact Powder</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Hair Care & Styling")}>Hair Care & Styling</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Hair & Scalp Treatments")}>Hair & Scalp Treatments</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Hair Coloring Products")}>Hair Coloring Products</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Hair Dryers")}>Hair Dryers</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Shampoos")}>Shampoos</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Styling Products")}>Styling Products</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Styling Tools & Appliances")}>Styling Tools & Appliances</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Makeup")}>Makeup</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Eyebrow Color")}>Eyebrow Color</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Eyeliners")}>Eyeliners</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Eyeshadow")}>Eyeshadow</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Eyeshadow Bases & Primers")}>Eyeshadow Bases & Primers</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Lipstick")}>Lipstick</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Fragrance")}>Fragrance</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Grooming")}>Grooming</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Bleaches")}>Bleaches</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Hair Oils")}>Hair Oils</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Cleansing Creams & Milks")}>Cleansing Creams & Milks</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Skin Care")}>Skin Care</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Toners")}>Toners</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Conditioners")}>Conditioners</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Face Wash")}>Face Wash</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Bath Oils")}>Bath Oils</div></h5> 
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleMegaSubmenu(e,"Health & Wellness")}>
                                Health & Wellness
                                <span className="sub-arrow"></span>
                            </a>
                            <ul className="mega-menu beauty-and-personal-care-menu">
                                <li>
                                    <Row m='0'>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Sports Nutrition")}>Sports Nutrition</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Amino Acids")}>Amino Acids</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Endurance & Energy")}>Endurance & Energy</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Healthy Snacks & Beverages")}>Healthy Snacks & Beverages</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Hydration")}>Hydration</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Nutrition Bars")}>Nutrition Bars</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Protein")}>Protein</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Vitamins & Dietary Supplements")}>Vitamins & Dietary Supplements</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Blended Vitamin & Mineral Supplements")}>Blended Vitamin & Mineral Supplements</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Herbal Supplements")}>Herbal Supplements</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Minerals")}>Minerals</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Supplements")}>Supplements</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Vitamins")}>Vitamins</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Weight Loss")}>Weight Loss</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Baby & Child Care")}>Baby & Child Care</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Diaper Care")}>Diaper Care</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Health Care")}>Health Care</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Alternative Medicine")}>Alternative Medicine</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Diabetes Care")}>Diabetes Care</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Ear Care")}>Ear Care</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Eye Health")}>Eye Health</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Feminine Care")}>Feminine Care</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("First Aid")}>First Aid</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Personal Care")}>Personal Care</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Bath & Bathing Accessories")}>Bath & Bathing Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Deodorants & Antiperspirants")}>Deodorants & Antiperspirants</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Hair Care")}>Hair Care</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Lip Care")}>Lip Care</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Skin Care")}>Skin Care</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Aromatherapy")}>Aromatherapy</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Oral Care")}>Oral Care</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Cloth Face Mask")}>Cloth Face Mask</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Vision Care")}>Vision Care</div></h5> 
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleMegaSubmenu(e,"Grocery")}>
                                Grocery
                                <span className="sub-arrow"></span>
                            </a>
                            <ul className="mega-menu beauty-and-personal-care-menu">
                                <li>
                                    <Row m='0'>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Baby Food")}>Baby Food</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Cereal")}>Cereal</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Formula")}>Formula</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Meals")}>Meals</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Beverages")}>Beverages</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Bottled Beverages, Water & Drink Mixes")}>Bottled Beverages, Water & Drink Mixes</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Coffee, Tea & Cocoa")}>Coffee, Tea & Cocoa</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Breakfast Food")}>Breakfast Food</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Breakfast & Cereal Bars")}>Breakfast & Cereal Bars</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Breakfast Cereals")}>Breakfast Cereals</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Candy & Chocolate")}>Candy & Chocolate</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Brittle, Caramel & Toffee")}>Brittle, Caramel & Toffee</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Candied & Chocolate-Covered Snacks")}>Candied & Chocolate-Covered Snacks</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Candy & Chocolate Assortments")}>Candy & Chocolate Assortments</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Candy & Chocolate Bars")}>Candy & Chocolate Bars</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Candy & Chocolate Gifts")}>Candy & Chocolate Gifts</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Marshmallows")}>Marshmallows</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Mints")}>Mints</a>
                                                    </li>
                                                </ul>
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Canned, Dry & Packaged Food")}>Canned, Dry & Packaged Food</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Cooking Essentials")}>Cooking Essentials</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Household Supplies")}>Household Supplies</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Pet Supplies")}>Pet Supplies</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Snack Food")}>Snack Food</div></h5> 
                                                <ul>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Bars")}>Bars</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Chips & Crisps")}>Chips & Crisps</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Cookies")}>Cookies</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Crackers")}>Crackers</a>
                                                    </li>
                                                    <li>
                                                        <a style={linkStyle}  onClick={() => CategoryFilter("Dried Food & Raisins")}>Dried Food & Raisins</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleMegaSubmenu(e,"Sports & Outdoors")}>
                                Sports & Outdoors
                                <span className="sub-arrow"></span>
                            </a>
                            <ul className="mega-menu beauty-and-personal-care-menu">
                                <li>
                                    <Row m='0'>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Camping & Hiking")}>Camping & Hiking</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Cycling")}>Cycling</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Scooters & Accessories")}>Scooters & Accessories</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Strength Training")}>Strength Training</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Cardio Training")}>Cardio Training</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Yoga")}>Yoga</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Exercise Accessories")}>Exercise Accessories</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Combat Sports")}>Combat Sports</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Team Sports")}>Team Sports</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Racquet Sports")}>Racquet Sports</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Water Sports")}>Water Sports</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Sports Nutrition")}>Sports Nutrition</div></h5> 
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleMegaSubmenu(e,"Baby & Toys")}>
                                Baby & Toys
                                <span className="sub-arrow"></span>
                            </a>
                            <ul className="mega-menu beauty-and-personal-care-menu">
                                <li>
                                    <Row m='0'>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Baby & Clothing Accessories")}>Baby & Clothing Accessories</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Car Seats")}>Car Seats</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Diapering")}>Diapering</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Feeding")}>Feeding</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Gifts")}>Gifts</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Nursery")}>Nursery</div></h5> 
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Toys & Games")}>Toys & Games</div></h5> 
                                                <h5><div style={linkStyle} onClick={() => CategoryFilter("Travel Gear")}>Travel Gear</div></h5> 
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
    )
}
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