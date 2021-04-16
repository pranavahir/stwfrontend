import React, {Fragment} from 'react';
import {Row, Col, Media} from 'reactstrap';
import fashion from '../../../public/assets/images/mega-menu/fashion.jpg';

const SideBar = () => {

    const closeNav = () => {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide)
            closemyslide.classList.remove('open-side');
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

    const handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if (event.target.nextElementSibling.classList.contains('opensidesubmenu'))
            event.target.nextElementSibling.classList.remove('opensidesubmenu')
        else {
            event.target.nextElementSibling.classList.add('opensidesubmenu')
        }
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
                            <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
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
                                                        <a href="#">DSLR</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Lenses</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Mirrorless Camera</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Tripods & Monopods</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Video Cameras</a>
                                                    </li>
                                                </ul>
                                                <h5>Speakers</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Ceiling Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Center Channel Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Portable Speakers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Soundbars</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Subwoofers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Wireless & Bluetooth Speakers</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Desktops</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">All in Ones</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Minis</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Towers</a>
                                                    </li>
                                                </ul>
                                                <h5>Film Cameras</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Instant Cameras</a>
                                                    </li>
                                                </ul>
                                                <h5>Monitors</h5>
                                                <h5>Tablets</h5>
                                                <h5>Video Games</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Consoles</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Games</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Nintendo</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Headphones & Earphones</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Bluetooth Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">DJ/Professional Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">In Ear Earbud Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Noise-Cancelling Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">On-Ear Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Over-Ear Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Premium Audio Headphones</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sports & Fitness Headphones</a>
                                                    </li>
                                                </ul>
                                                <h5>Computer & Accessories</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Chargers & Adapters</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Data Storage</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Keyboards</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
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
                                                        <a href="#">Kid's Fashion</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Men's Fashion</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoes</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Women's Fashion</a>
                                                    </li>
                                                </ul>
                                                <h5>Eyewear</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Eyeglass Cases</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Eyeglass Chains</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Eyeglass Frames</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Replacement Sunglass Lenses</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sunglasses</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Handbags</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Clutches & Evening Bags</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Crossbody Bags</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Fashion Backpacks</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hobo Bags</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Satchels</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shoulder bags</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Top-Handle Bags</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Totes</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Wallets</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Wristlets</a>
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
                                                        <a href="#">Pocket Watches</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Smartwatches</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Watch Bands</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Wrist Watches</a>
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
                            <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
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
                                                        <a href="#">Bedding & Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Bedding Sets & Collections</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Bedspreads, Coverlets & Sets</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Kid's Bedding</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Quilts & Sets</a>
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
                                                        <a href="#">Bakeware</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Coffee, Tea & Espresso</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Cookware</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Cutlery & Knife Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Dining & Entertaining</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Small Appliances</a>
                                                    </li>
                                                </ul>
                                                <h5>Tools & Home Improvement</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Ceramic Tiles</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Wall Plates</a>
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
                                                        <a href="#">Artificial Plants & Flowers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Candles & Holders</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Clocks</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Decorative Pillows</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Home Decor Accents</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Home Fragrance</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Mirrors</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Nursery Decor</a>
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
                                                        <a href="#">Carpet & Upholstery Cleaners & Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Floor Buffers & Parts</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Vacuum Parts & Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Vacuum</a>
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
                            <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
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
                                                        <a href="#">Foot & Hand Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Nail Art & Polish</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Nail Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Tools & Accessories</a>
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
                                                        <a href="#">Hair & Scalp Treatments</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hair Coloring Products</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hair Dryers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shampoos</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Styling Products</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Styling Tools & Appliances</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="3">
                                            <div className="link-section">
                                                <h5>Makeup</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Eyebrow Color</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Eyeliners</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Eyeshadow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Eyeshadow Bases & Primers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Lipstick</a>
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
                            <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
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
                                                        <a href="#">Amino Acids</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Endurance & Energy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Healthy Snacks & Beverages</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hydration</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Nutrition Bars</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Protein</a>
                                                    </li>
                                                </ul>
                                                <h5>Vitamins & Dietary Supplements</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Blended Vitamin & Mineral Supplements</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Herbal Supplements</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Minerals</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Supplements</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Vitamins</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Weight Loss</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Baby & Child Care</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Diaper Care</a>
                                                    </li>
                                                </ul>
                                                <h5>Health Care</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Alternative Medicine</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Diabetes Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Ear Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Eye Health</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Feminine Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">First Aid</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Personal Care</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Bath & Bathing Accessories</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Deodorants & Antiperspirants</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Hair Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Lip Care</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Skin Care</a>
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
                            <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
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
                                                        <a href="#">Cereal</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Formula</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Meals</a>
                                                    </li>
                                                </ul>
                                                <h5>Beverages</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Bottled Beverages, Water & Drink Mixes</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Coffee, Tea & Cocoa</a>
                                                    </li>
                                                </ul>
                                                <h5>Breakfast Food</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Breakfast & Cereal Bars</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Breakfast Cereals</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xl="4">
                                            <div className="link-section">
                                                <h5>Candy & Chocolate</h5>
                                                <ul>
                                                    <li>
                                                        <a href="#">Brittle, Caramel & Toffee</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Candied & Chocolate-Covered Snacks</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Candy & Chocolate Assortments</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Candy & Chocolate Bars</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Candy & Chocolate Gifts</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Marshmallows</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Mints</a>
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
                                                        <a href="#">Bars</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Chips & Crisps</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Cookies</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Crackers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Dried Food & Raisins</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
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
                            <a href="#" onClick={(e) => handleMegaSubmenu(e)}>
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