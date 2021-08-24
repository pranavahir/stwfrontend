import React from 'react';
import HeaderOne from '../headers/header-one';
import FooterOne from '../footers/footer-one';
import Breadcrubs from '../common/widgets/breadcrubs';
import Helmet from 'react-helmet';
import favicon from '../../public/assets/images/favicon/1.png'

const CommonLayout = ({ children, menu, submenu, leafMenu,title, parent ,subTitle,leafTitle }) => {
    return (
        <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href={favicon?favicon:''} />
        </Helmet>
            <HeaderOne topClass="top-header" logoName="logo.png" />
                <Breadcrubs title={title} parent={parent} subTitle={subTitle} leafTitle={leafTitle} menu={menu} submenu={submenu} leafMenu={leafMenu} />
                <>{children}</>
            <FooterOne />
        </>
    )
}

export default CommonLayout;