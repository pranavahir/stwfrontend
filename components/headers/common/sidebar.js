import React, {useState, useContext,Fragment} from 'react';
// import React, { useState, useContext, useEffect } from 'react';
import {Row, Col, Media} from 'reactstrap';
import FilterContext from '../../../helpers/filter/FilterContext';
import fashion from '../../../public/assets/images/mega-menu/fashion.jpg';
import Link from 'next/link'
import { useRouter } from 'next/router';


const SideBar = () => {

    const filterContext = useContext(FilterContext);
	const selectedKeyword = filterContext.selectedKeyword;
    const selectedBrands = filterContext.selectedBrands;
    const selectedColor = filterContext.selectedColor;
    const selectedPrice = filterContext.selectedPrice;
    const selectedCategory = filterContext.state;
    const selectedSize = filterContext.selectedSize;
    const [url, setUrl] = useState();
    const router = useRouter();
    
    const closeNav = () => {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
    }


    const CategoryFilter = (category) => {
        // router.push(`/product-details/${product.id}` + '-' + `${titleProps}`);
			const pathname = window.location.pathname;
			setUrl(pathname);
			if(pathname=="/shop/six_grid")
			{
				var URL = pathname;	
			}
			else 
			{
				var URL = "/shop/six_grid";
			}
			console.log(category)
            filterContext.setSelectedCategory(category)
            console.log(selectedCategory);
        	router.push(`${URL}?${selectedCategory}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}&keyword=${selectedKeyword}`)
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
                                                <h5>Camera, Photo & Videos</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("DSLR")}>DSLR</a>
                                                        {/* <Link href={`/shop/six_grid`} >
                                                            <a>DSLR</a>
                                                        </Link> */}
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Lenses")}>Lenses</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Mirrorless Camera")}>Mirrorless Camera</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Tripods & Monopods")}>Tripods & Monopods</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Video Cameras")}>Video Cameras</a>
                                                    </li>
                                                </ul>
                                                <h5>Speakers</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Ceiling Speakers")}>Ceiling Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Center Channel Speakers")}>Center Channel Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Portable Speakers")}>Portable Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Soundbars")}>Soundbars</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Subwoofers")}>Subwoofers</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Wireless & Bluetooth Speakers")}>Wireless & Bluetooth Speakers</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Desktops</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("All in Ones")}>All in Ones</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Minis")}>Minis</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Towers")}>Towers</a>
                                                    </li>
                                                </ul>
                                                <h5>Film Cameras</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Instant Cameras")}>Instant Cameras</a>
                                                    </li>
                                                </ul>
                                                <h5><a onClick={() => CategoryFilter("Monitors")}>Monitors</a></h5>
                                                <h5>Tablets</h5>
                                                <h5>Video Games</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Accessories")}>Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Consoles")}>Consoles</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Games")}>Games</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Nintendo")}>Nintendo</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Headphones & Earphones</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Bluetooth Headphones")}>Bluetooth Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("DJ/Professional Headphones")}>DJ/Professional Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("In Ear Earbud Headphones")}>In Ear Earbud Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Noise-Cancelling Headphones")}>Noise-Cancelling Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("On-Ear Headphones")}>On-Ear Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Over-Ear Headphones")}>Over-Ear Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Premium Audio Headphones")}>Premium Audio Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Sports & Fitness Headphones")}>Sports & Fitness Headphones</a>
                                                    </li>
                                                </ul>
                                                <h5>Computer & Accessories</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Chargers & Adapters")}>Chargers & Adapters</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Data Storage")}>Data Storage</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Keyboards")}>Keyboards</a>
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
                                                <h5>Clothing, Shoes & Jewelry</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Kid's Fashion")}>Kid's Fashion</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Men's Fashion")}>Men's Fashion</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Shoes")}>Shoes</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Women's Fashion")}>Women's Fashion</a>
                                                    </li>
                                                </ul>
                                                <h5>Eyewear</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Eyeglass Cases")}>Eyeglass Cases</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Eyeglass Chains")}>Eyeglass Chains</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Eyeglass Frames")}>Eyeglass Frames</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Replacement Sunglass Lenses")}>Replacement Sunglass Lenses</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Sunglasses")}>Sunglasses</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Handbags</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Clutches & Evening Bags")}>Clutches & Evening Bags</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Crossbody Bags")}>Crossbody Bags</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Fashion Backpacks")}>Fashion Backpacks</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Hobo Bags")}>Hobo Bags</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Satchels")}>Satchels</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Shoulder bags")}>Shoulder bags</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Top-Handle Bags")}>Top-Handle Bags</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Totes")}>Totes</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Wallets")}>Wallets</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Wristlets")}>Wristlets</a>
                                                    </li>
                                                </ul>
                                                <h5>Backpacks</h5>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Watches</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Pocket Watches")}>Pocket Watches</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Smartwatches")}>Smartwatches</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Watch Bands")}>Watch Bands</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Wrist Watches")}>Wrist Watches</a>
                                                    </li>
                                                </ul>
                                                <h5>Jewellery</h5>
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
                                                <h5>Bedding</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Bedding & Accessories")}>Bedding & Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Bedding Sets & Collections")}>Bedding Sets & Collections</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Bedspreads, Coverlets & Sets")}>Bedspreads, Coverlets & Sets</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Kid's Bedding")}>Kid's Bedding</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Quilts & Sets")}>Quilts & Sets</a>
                                                    </li>
                                                </ul>
                                                <h5>Tower Rings</h5>
                                                <h5>Wall Art</h5>
                                                <h5>Wall Clocks</h5>
                                                <h5>Cleaning Supplies</h5>
                                                <h5>Bath</h5>
                                                <h5>Bathroom Accessories</h5>
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5>Kitchen & Dinning</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Bakeware")}>Bakeware</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Coffee, Tea & Espresso")}>Coffee, Tea & Espresso</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Cookware")}>Cookware</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Cutlery & Knife Accessories")}>Cutlery & Knife Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Dining & Entertaining")}>Dining & Entertaining</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Small Appliances")}>Small Appliances</a>
                                                    </li>
                                                </ul>
                                                <h5>Tools & Home Improvement</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Ceramic Tiles")}>Ceramic Tiles</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Wall Plates")}>Wall Plates</a>
                                                    </li>
                                                </ul>
                                                <h5>Home Appliances</h5>
                                                <h5>Bar Tools & Drinkware</h5>
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5>Home Decor</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Artificial Plants & Flowers")}>Artificial Plants & Flowers</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Candles & Holders")}>Candles & Holders</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Clocks")}>Clocks</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Decorative Pillows")}>Decorative Pillows</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Home Decor Accents")}>Home Decor Accents</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Home Fragrance")}>Home Fragrance</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Mirrors")}>Mirrors</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Nursery Decor")}>Nursery Decor</a>
                                                    </li>
                                                </ul>
                                                <h5>Kids' Home Store</h5>
                                                <h5>Seasonal Decor</h5>
                                                <h5>Storage & Organization</h5>
                                                <h5>Tower Bars</h5>
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5>Vacuum & Floor care</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Carpet & Upholstery Cleaners & Accessories")}>Carpet & Upholstery Cleaners & Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Floor Buffers & Parts")}>Floor Buffers & Parts</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Vacuum Parts & Accessories")}>Vacuum Parts & Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Vacuum")}>Vacuum</a>
                                                    </li>
                                                </ul>
                                                <h5>Coasters</h5>
                                                <h5>Event & Party Supplies</h5>
                                                <h5>Furniture</h5>
                                                <h5>Glassware & Drinkware</h5>
                                                <h5>Heating, Cooling & Air Quality</h5>
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
                                                <h5>Foot, Hand & Nail Care</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Foot & Hand Care")}>Foot & Hand Care</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Nail Art & Polish")}>Nail Art & Polish</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Nail Care")}>Nail Care</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Tools & Accessories")}>Tools & Accessories</a>
                                                    </li>
                                                </ul>
                                                <h5>Concealer</h5>
                                                <h5>Foundation</h5>
                                                <h5>Compact Powder</h5>
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5>Hair Care & Styling</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Hair & Scalp Treatments")}>Hair & Scalp Treatments</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Hair Coloring Products")}>Hair Coloring Products</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Hair Dryers")}>Hair Dryers</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Shampoos")}>Shampoos</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Styling Products")}>Styling Products</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Styling Tools & Appliances")}>Styling Tools & Appliances</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5>Makeup</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Eyebrow Color")}>Eyebrow Color</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Eyeliners")}>Eyeliners</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Eyeshadow")}>Eyeshadow</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Eyeshadow Bases & Primers")}>Eyeshadow Bases & Primers</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Lipstick")}>Lipstick</a>
                                                    </li>
                                                </ul>
                                                <h5>Fragrance</h5>
                                                <h5>Grooming</h5>
                                                <h5>Bleaches</h5>
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5>Hair Oils</h5>
                                                <h5>Cleansing Creams & Milks</h5>
                                                <h5>Skin Care</h5>
                                                <h5>Toners</h5>
                                                <h5>Conditioners</h5>
                                                <h5>Face Wash</h5>
                                                <h5>Bath Oils</h5>
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
                                                <h5>Sports Nutrition</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Amino Acids")}>Amino Acids</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Endurance & Energy")}>Endurance & Energy</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Healthy Snacks & Beverages")}>Healthy Snacks & Beverages</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Hydration")}>Hydration</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Nutrition Bars")}>Nutrition Bars</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Protein")}>Protein</a>
                                                    </li>
                                                </ul>
                                                <h5>Vitamins & Dietary Supplements</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Blended Vitamin & Mineral Supplements")}>Blended Vitamin & Mineral Supplements</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Herbal Supplements")}>Herbal Supplements</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Minerals")}>Minerals</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Supplements")}>Supplements</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Vitamins")}>Vitamins</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Weight Loss")}>Weight Loss</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Baby & Child Care</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Diaper Care")}>Diaper Care</a>
                                                    </li>
                                                </ul>
                                                <h5>Health Care</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Alternative Medicine")}>Alternative Medicine</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Diabetes Care")}>Diabetes Care</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Ear Care")}>Ear Care</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Eye Health")}>Eye Health</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Feminine Care")}>Feminine Care</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("First Aid")}>First Aid</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Personal Care</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Bath & Bathing Accessories")}>Bath & Bathing Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Deodorants & Antiperspirants")}>Deodorants & Antiperspirants</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Hair Care")}>Hair Care</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Lip Care")}>Lip Care</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Skin Care")}>Skin Care</a>
                                                    </li>
                                                </ul>
                                                <h5>Aromatherapy</h5>
                                                <h5>Oral Care</h5>
                                                <h5>Cloth Face Mask</h5>
                                                <h5>Vision Care</h5>
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
                                                <h5>Baby Food</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Cereal")}>Cereal</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Formula")}>Formula</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Meals")}>Meals</a>
                                                    </li>
                                                </ul>
                                                <h5>Beverages</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Bottled Beverages, Water & Drink Mixes")}>Bottled Beverages, Water & Drink Mixes</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Coffee, Tea & Cocoa")}>Coffee, Tea & Cocoa</a>
                                                    </li>
                                                </ul>
                                                <h5>Breakfast Food</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Breakfast & Cereal Bars")}>Breakfast & Cereal Bars</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Breakfast Cereals")}>Breakfast Cereals</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Candy & Chocolate</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Brittle, Caramel & Toffee")}>Brittle, Caramel & Toffee</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Candied & Chocolate-Covered Snacks")}>Candied & Chocolate-Covered Snacks</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Candy & Chocolate Assortments")}>Candy & Chocolate Assortments</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Candy & Chocolate Bars")}>Candy & Chocolate Bars</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Candy & Chocolate Gifts")}>Candy & Chocolate Gifts</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Marshmallows")}>Marshmallows</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Mints")}>Mints</a>
                                                    </li>
                                                </ul>
                                                <h5>Canned, Dry & Packaged Food</h5>
                                                <h5>Cooking Essentials</h5>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Household Supplies</h5>
                                                <h5>Pet Supplies</h5>
                                                <h5>Snack Food</h5>
                                                <ul>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Bars")}>Bars</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Chips & Crisps")}>Chips & Crisps</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Cookies")}>Cookies</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Crackers")}>Crackers</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => CategoryFilter("Dried Food & Raisins")}>Dried Food & Raisins</a>
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
                                                <h5>Camping & Hiking</h5>
                                                <h5>Cycling</h5>
                                                <h5>Scooters & Accessories</h5>
                                                <h5>Strength Training</h5>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Cardio Training</h5>
                                                <h5>Yoga</h5>
                                                <h5>Exercise Accessories</h5>
                                                <h5>Combat Sports</h5>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Team Sports</h5>
                                                <h5>Racquet Sports</h5>
                                                <h5>Water Sports</h5>
                                                <h5>Sports Nutrition</h5>
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
                                                <h5>Baby & Clothing Accessories</h5>
                                                <h5>Car Seats</h5>
                                                <h5>Diapering</h5>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Feeding</h5>
                                                <h5>Gifts</h5>
                                                <h5>Nursery</h5>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Toys & Games</h5>
                                                <h5>Travel Gear</h5>
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