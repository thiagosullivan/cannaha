import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductCardContainer } from './style';

function ProductCard({ productName, productDesc, productImage }) {
  return (
      <Link href="/">
        <a>
            <ProductCardContainer>
                <div className='product__card__img'>
                    <Image src={productImage} width={250} height={250} />
                </div>
                <h4>{productName}</h4>
                <p>{productDesc}</p>
            </ProductCardContainer>
        </a>
    </Link>
  )
}

export default ProductCard