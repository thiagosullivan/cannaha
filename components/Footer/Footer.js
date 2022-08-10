import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import FooterLogo from '../../assets/logo-cannaha-white.png';
import { FooterContainer } from './style';

function Footer() {
  return (
    <FooterContainer>
        <div className='footer__content'>
            <div className='footer__logo'>
                <Link href="/">
                    <Image src={FooterLogo} alt="Cannaha"/>
                </Link>
            </div>
            <div className='footer__nav'>
                <Link href="/">
                    Home
                </Link>
                <Link href="/">
                    Sobre
                </Link>
                <Link href="/">
                    Catálogo
                </Link>
                <Link href="/">
                    Contato
                </Link>
                <Link href="/">
                    Lorem
                </Link>
                <Link href="/">
                    Ipsum
                </Link>
            </div>
            <div className='footer__socialM'>
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
        <div className='footer__bottom'>
            <p>© 2022 <strong>Cannaha</strong> - Desenvolvido por <strong>Digital Cloud Marketing</strong>.</p>
        </div>
    </FooterContainer>
  )
}

export default Footer