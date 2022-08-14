import React, { useState } from 'react';
import Image from 'next/image';
import ImagesGallery from './imgData';
import { ProductGalleryContainer } from './style';

function ProductGallery() {
  const [ selectedImg, setSelectedImg ]  = useState(ImagesGallery[0]);

  return (
    <ProductGalleryContainer>
        <div className='prod__img__container'>
          <Image src={selectedImg} width={700} height={700} layout="responsive" alt="Image" />
        </div>
        <div className='prod__gallery__container'>
          {ImagesGallery.map((img, index) => {
              return (
                <div
                  key={index}
                  className='prod__gallery__item'
                  style={{
                    border: selectedImg === img ? "4px solid #579A51" : ""
                  }}
                >
                  <Image                    
                    src={img}
                    alt="CBD Oil"
                    layout="fill"                    
                    onClick={() => setSelectedImg(img)}
                  />
                </div>
              )
          })}
        </div>
    </ProductGalleryContainer>
  )
}

export default ProductGallery