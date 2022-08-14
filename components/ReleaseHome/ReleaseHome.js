import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ProductImg from '../../assets/product-img.png';
import { ReleaseHomeContainer } from './style';
import Link from 'next/link';

function ReleaseHome() {
  return (
    <ReleaseHomeContainer>
        <h2>Lançamentos</h2>
        <div className='release__prod__container'>
            <ProductCard
                productName="CBD Oil 2.75% - 10 ml - 275 mg cannabidiol"
                productDesc="Fusce ut fringilla quam. Pellentesque tempor placerat egestas. Suspendisse pharetra dui a fermentum eleifend"
                productImage={ProductImg}
                productUrl="/produtos/cbd-oil"
            />
            <ProductCard
                productName="CBD Oil 2.75% - 10 ml - 275 mg cannabidiol"
                productDesc="Fusce ut fringilla quam. Pellentesque tempor placerat egestas. Suspendisse pharetra dui a fermentum eleifend"
                productImage={ProductImg}
                productUrl="/produtos/cbd-oil"
            />
            <ProductCard
                productName="CBD Oil 2.75% - 10 ml - 275 mg cannabidiol"
                productDesc="Fusce ut fringilla quam. Pellentesque tempor placerat egestas. Suspendisse pharetra dui a fermentum eleifend"
                productImage={ProductImg}
                productUrl="/produtos/cbd-oil"
            />
        </div>

        <div className='seemore__btn'>
            <Link href="/">Veja mais</Link>
        </div>
    </ReleaseHomeContainer>
  )
}

export default ReleaseHome