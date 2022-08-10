import React from 'react';
import Link from 'next/link';
import { NavegationContainer } from './style'

function Navegation() {
  return (
    <NavegationContainer>
        <Link href="/">Home</Link>
        <Link href="/">Sobre</Link>
        <Link href="/">Catálogo</Link>
        <Link href="/">Contato</Link>
        <Link href="/">Lorem</Link>
        <Link href="/">Ipsum</Link>
    </NavegationContainer>
  )
}

export default Navegation