import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Prompt:wght@300;400;700&family=Raleway:wght@300;400;700&display=swap" rel="stylesheet" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Cannaha - CBD"/>
        <meta name="description" content="Cannaha - CBD"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.ibmicrofisioterapia.com.br/"/>
        <meta property="og:title" content="Cannaha - CBD"/>
        <meta property="og:description" content="Cannaha - CBD"/>
        <meta property="og:image" content="https://i.ibb.co/gPYjZQq/cannaha-meta-img.jpg"/>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.ibmicrofisioterapia.com.br/"/>
        <meta property="twitter:title" content="Cannaha - CBD"/>
        <meta property="twitter:description" content="Cannaha - CBD"/>
        <meta property="twitter:image" content="https://i.ibb.co/gPYjZQq/cannaha-meta-img.jpg"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}