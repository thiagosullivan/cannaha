import Image from 'next/image';
import React from 'react';
import LogoCannahaOne from '../../assets/logo-cannaha-1.png';
import Navegation from '../Navegation/Navegation';
import {FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaSearch} from 'react-icons/fa';
import { HeaderContainer } from './style';

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
                <Image src={LogoCannahaOne} alt="Cannaha logo"/>
            </div>
            <div className='header__socialM'>
                <a href="/">
                    <FaFacebookF />
                </a>
                <a href="/">
                    <FaInstagram />
                </a>
                <a href="/">
                    <FaYoutube />
                </a>
                <a href="/">
                    <FaWhatsapp />
                </a>
                <a href="/">
                    <FaEnvelope />
                </a>
            </div>
        </div>
        <Navegation />
    </HeaderContainer>
  )
}

export default Header