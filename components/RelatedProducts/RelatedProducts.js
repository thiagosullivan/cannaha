import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ProductImg from '../../assets/product-img.png';
import { RelatedProductsContainer } from './style';
import Link from 'next/link';

function RelatedProducts() {
  return (
    <RelatedProductsContainer>
        <h2>Relacionados</h2>
        <div className='related__prod__container'>
            <ProductCard
                productName="CBD Oil 2.75% - 10 ml - 275 mg cannabidiol"
                productDesc="Fusce ut fringilla quam. Pellentesque tempor placerat egestas. Suspendisse pharetra dui a fermentum eleifend"
                productImage={ProductImg}
                producUrl="/produtos/cbd-oil"
            />
            <ProductCard
                productName="CBD Oil 2.75% - 10 ml - 275 mg cannabidiol"
                productDesc="Fusce ut fringilla quam. Pellentesque tempor placerat egestas. Suspendisse pharetra dui a fermentum eleifend"
                productImage={ProductImg}
                producUrl="/produtos/cbd-oil"
            />
            <ProductCard
                productName="CBD Oil 2.75% - 10 ml - 275 mg cannabidiol"
                productDesc="Fusce ut fringilla quam. Pellentesque tempor placerat egestas. Suspendisse pharetra dui a fermentum eleifend"
                productImage={ProductImg}
                producUrl="/produtos/cbd-oil"
            />
        </div>

        <div className='seemore__btn'>
            <Link href="/">Veja mais</Link>
        </div>
    </RelatedProductsContainer>
  )
}

export default RelatedProducts