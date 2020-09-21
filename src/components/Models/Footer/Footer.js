import React from 'react';
import { FooterWrapper, ImgBrandLogo } from './Footer.style';
import { NavLink } from 'react-router-dom';
import audiLogo from '../../../images/BrandsLogo/audi-logo.png';
import bmwLogo from '../../../images/BrandsLogo/bmw-logo.png';
import jaguarLogo from '../../../images/BrandsLogo/jaguar-logo.png';
import jeepLogo from '../../../images/BrandsLogo/jeep-logo.png';
import mercedesLogo from '../../../images/BrandsLogo/mercedes-logo.png';
import teslaLogo from '../../../images/BrandsLogo/tesla-logo.png';

const Footer = () => {
    return (
        <FooterWrapper>
            <NavLink to="/audi"><ImgBrandLogo src={audiLogo} /></NavLink>
            <NavLink to='/bmw'><ImgBrandLogo src={bmwLogo} /></NavLink>
            <NavLink to="/mercedes"><ImgBrandLogo src={mercedesLogo} /></NavLink>
            <NavLink to="/jaguar"><ImgBrandLogo src={jaguarLogo} /></NavLink>
            <NavLink to='/jeep'><ImgBrandLogo src={jeepLogo} /></NavLink>
            <NavLink to='/tesla'><ImgBrandLogo src={teslaLogo} /></NavLink>
        </FooterWrapper>
    )
}

export default Footer
