import React from 'react'
import ProductGallery from '../ProductGallery/ProductGallery'
import { ProductInfosText, ProductPageInfosContainer } from './style'

function ProductPageInfos() {
  return (
    <ProductPageInfosContainer>
        <ProductGallery />
        <ProductInfosText>
            <h1>EUPHORIA CBD CANNABIS OIL 10% 10ML 1000 MG CBD</h1>
            <p>Phasellus blandit, dolor nec maximus malesuada, magna nulla auctor sapien, id placerat metus lacus quis dui. Sed gravida, nisl sit amet semper finibus, augue nunc consequat nibh, sed ultricies tortor urna nec lorem. Phasellus ullamcorper aliquam arcu, et aliquam enim elementum vel. Fusce ut fringilla quam. Pellentesque tempor placerat egestas. Suspendisse pharetra dui a fermentum eleifend. Ut tempus, dolor in scelerisque aliquam, lectus est ornare enim, et sagittis felis orci sit amet massa. Mauris a sagittis nibh. Nunc nisi est, tincidunt at eleifend posuere, laoreet id ligula. Fusce sed leo in sapien volutpat pharetra ut eu risus. Donec porttitor purus ut cursus condimentum.</p>
            <a href='www.facebook.com'>Peça Já!</a>
        </ProductInfosText>
    </ProductPageInfosContainer>
  )
}

export default ProductPageInfos