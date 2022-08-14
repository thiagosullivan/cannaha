import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { BreadcrumbContainer } from './style'

function Breadcrumb() {
  return (
    <BreadcrumbContainer>
        <div className='breadcrumb__link'>
            <Link href="/">Home</Link>
            <IoIosArrowForward />
        </div>
        <div className='breadcrumb__link'>
            <Link href="/produtos">Produtos</Link>
            <IoIosArrowForward />
        </div>
        <div className='breadcrumb__link'>
            <Link href="/produtos/cbd-oil">CBD Oil</Link>
        </div>
    </BreadcrumbContainer>
  )
}

export default Breadcrumb