import Image from 'next/image';
import React from 'react';
import BannerHomeImg from '../../assets/banner-hero-min.webp';
import { BannerHomeContainer } from './style';

function BannerHome() {
  return (
    <BannerHomeContainer>
        <Image src={BannerHomeImg} layout="responsive" alt="Banner Home"/>
    </BannerHomeContainer>
  )
}

export default BannerHome