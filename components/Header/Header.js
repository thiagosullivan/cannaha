import Image from 'next/image';
import React from 'react';
import LogoCannahaOne from '../../assets/logo-cannaha-1.png';
import Navegation from '../Navegation/Navegation';
import {FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaSearch} from 'react-icons/fa';
import { HeaderContainer } from './style';
import Link from 'next/link';

function Header() {
  return (
    <HeaderContainer>
        <div className='header__content'>
            <div className='header__search'>
                <input
                    type="search"
                    placeholder='Pesquise nossos produtos...'
                />
                <FaSearch />
            </div>
            <div className='header__logo'>
                <Link href="/">
                    <Image src={LogoCannahaOne} alt="Cannaha logo"/>
                </Link>
            </div>
            <div className='header__socialM'>
                <a href="www.facebook.com">
                    <FaFacebookF />
                </a>
                <a href="www.facebook.com">
                    <FaInstagram />
                </a>
                <a href="www.facebook.com">
                    <FaYoutube />
                </a>
                <a href="www.facebook.com">
                    <FaWhatsapp />
                </a>
                <a href="www.facebook.com">
                    <FaEnvelope />
                </a>
            </div>
        </div>
        <Navegation />
    </HeaderContainer>
  )
}

export default Header