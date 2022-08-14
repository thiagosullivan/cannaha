import React from 'react';
import FilterResults from '../FilterResults/FilterResults';
import ProductCard from '../ProductCard/ProductCard';
import {resultData} from './resultData';

import { ResultPageContainer } from './style';

function ResultPageContent() {
    console.log(resultData)
    
  return (
    <ResultPageContainer>
        <FilterResults />
        <div className='Results__mapping'>
            {resultData.map((product, index) =>
                (
                    <ProductCard
                        key={index}
                        productName={product.productName}
                        productDesc={product.productDesc}
                        productImage={product.productImage}
                        productUrl={product.productUrl}
                    />       
                )
            )}
        </div>
    </ResultPageContainer>
  )
}

export default ResultPageContent