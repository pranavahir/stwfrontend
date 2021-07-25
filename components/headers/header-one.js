import React, { useState, useContext, useEffect } from 'react';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import Cart from '../containers/Cart';
import CartContainer from '../containers/CartContainer';
import TopBarDark from "./common/topbar-dark";
import { Media, Container, Row, Col, Input, Button, Form } from 'reactstrap';
import LogoImage from './common/logo'
import search from '../../public/assets/images/icon/search.png';
import { useForm } from "react-hook-form";
import settings from '../../public/assets/images/icon/setting.png';
import cart from '../../public/assets/images/icon/cart.png';
import FilterContext from '../../helpers/filter/FilterContext';
import Currency from './common/currency';
import { useRouter } from 'next/router';
import classes from './Header-one.module.css';

const HeaderOne = ({ logoName, headerClass, topClass, noTopBar ,direction }) => {
	const [isLoading, setIsLoading] = useState(false);
	// eslint-disable-next-line
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const { register, handleSubmit, errors } = useForm(); // initialise the hook
	const filterContext = useContext(FilterContext);
	const selectedKeyword = filterContext.selectedKeyword;
    const selectedBrands = filterContext.selectedBrands;
    const selectedColor = filterContext.selectedColor;
    const selectedPrice = filterContext.selectedPrice;
    const selectedCategory = filterContext.state;
    const selectedSize = filterContext.selectedSize
	const [url, setUrl] = useState();
	/*=====================
		 Pre loader
		 ==========================*/
	useEffect(() => {
		setTimeout(function () {
			document.querySelectorAll(".loader-wrapper").style = 'display:none';
		}, 2000);

		setOpen(true)
		if (router.asPath !== '/layouts/Christmas')
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}

	}, []);

	const onSubmit = (data,e) => {

		if(e.target[0].value!=null && e.target[0].value!=undefined && e.target[0].value!="")
		{
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
			
			filterContext.setselectedKeyword(e.target[0].value)
			var category = ""
        	router.push(`${URL}?${category}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}&keyword=${selectedKeyword}`)
			closeSearch();
		}

	};
	const handleScroll = () => {
		let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (number >= 300) {
			if (window.innerWidth < 576) {
				document.getElementById("sticky").classList.remove('fixed');
			} else
				document.getElementById("sticky").classList.add('fixed');
		} else {
			document.getElementById("sticky").classList.remove('fixed');
		}
	}

	const openNav = () => {
		var openmyslide = document.getElementById("mySidenav");
		if (openmyslide) {
			openmyslide.classList.add('open-side')
		}
	}
	const openSearch = () => {
		document.getElementById("search-overlay").style.display = "block";
	}

	const closeSearch = () => {
		document.getElementById("search-overlay").style.display = "none";
	}

	// eslint-disable-next-line
	const load = () => {
		setIsLoading(true)
		fetch().then(() => {
			// deal with data fetched
			setIsLoading(false)
		})
	};

	return (
		<div>
			<header id="sticky" className={`sticky ${classes.desktopHeader} ${headerClass}`}>
				{noTopBar ?
					'' :
					<TopBarDark topClass={topClass} />
				}

				<Container>
							<div className="row">
								<div className="col-6 d-flex align-items-center justify-content-start">
									<div className={classes.burgerMenuParent}>
										<a href={null} onClick={openNav}>
											<div className="bar-style"> <i className={"fa fa-bars sidebar-bar " + classes.burgerMenu} aria-hidden="true"></i></div>
										</a>
										{/*SideBar Navigation Component*/}
										<SideBar />
									</div>
									<div className={classes.logoParent}>
										<LogoImage logo={logoName} />
										</div>
								</div>
								<div className="col-6">
									{/*Top Navigation Bar Component*/}
									{/* <NavBar /> */}
									
						
											<ul class="d-flex align-items-center justify-content-end">
												<li className="onhover-div mobile-search">
													{/* <div><Media src={search} onClick={openSearch} className="img-fluid" alt="" />
														<i className="fa fa-search" onClick={openSearch}></i></div> */}
														<section className="search-block">
																<Container>
																	<Row>
																		<Col lg="12">
																			<form className="form-header" onSubmit={handleSubmit(onSubmit)}>
																				<div className="input-group">
																					<Input type="text" className={"form-control " + classes.inputContainer} aria-label="Amount (to the nearest dollar)"
																						placeholder="Search Products......" name="keyword"  />
																					<div className="input-group-append">
																						<div className={classes.searchMobile}>
																						<button className={classes.mobileButton}><i className={"fa fa-search " + classes.searchIcon}></i></button>
																						</div>
																						<div className={classes.searchDesktop}>
																						<button className={classes.desktopButton}><i className={"fa fa-search "}></i>Search</button>
																						</div>
																					</div>
																				</div>
																			</form>
																		</Col>
																	</Row>
																</Container>
															</section>	
															
														 
												</li>
												{/* <Currency icon={settings} /> */}
												{/*Header Cart Component */}
												{
													direction === undefined ?
													<CartContainer layout={direction} icon={cart} />
													:
													<Cart layout={direction} icon={cart} />	
												}
											</ul>
							
								</div>
							</div>
				</Container>
			</header>
			<header id="sticky" className={`sticky ${classes.mobileHeader} ${headerClass}`}>
				<Container>
							<div className="row">
								<div className="col-6 d-flex align-items-center justify-content-start">
									<div className={classes.burgerMenuParent}>
										<a href={null} onClick={openNav}>
											<div className="bar-style"> <i className={"fa fa-bars sidebar-bar " + classes.burgerMenu} aria-hidden="true"></i></div>
										</a>
										{/*SideBar Navigation Component*/}
										<SideBar />
									</div>
									<div className={classes.logoParent}>
										<LogoImage logo={logoName} />
										</div>
								</div>
								<div className="col-6">
									{/*Top Navigation Bar Component*/}
									{/* <NavBar /> */}
											<ul class="d-flex align-items-center justify-content-end">
												<li className="onhover-div mobile-search">
												<TopBarDark topClass={topClass} />
												</li>
												{/* <Currency icon={settings} /> */}
												{/*Header Cart Component */}
												{
													direction === undefined ?
													<CartContainer layout={direction} icon={cart} />
													:
													<Cart layout={direction} icon={cart} />	
												}
											</ul>
							
								</div>
							</div>
				</Container>
			</header>
			<div id="search-overlay" className="search-overlay">
				<div>
					<span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
					<div className="overlay-content">
						<Container>
							<Row>
								<Col>
									{/* <Form onSubmit={handleSubmit(onSubmit)}>
										<div className="form-group">
											<Input type="text" className="form-control" name="keyword" id="exampleInputPassword1" placeholder="Search a Product" />
										</div>
										<Button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></Button>
									</Form> */}
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</div>

			
		</div>
	)
}

export default HeaderOne;