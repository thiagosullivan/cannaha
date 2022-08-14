import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import ProductPageInfos from '../../components/ProductPageInfos/ProductPageInfos';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';

function ProductPage(){
    return (
        <div id="product__page">
            <Head>
                <title>Produto X | Cannaha CBD</title>
                <meta name="description" content="Cannaha" />
                {/* <meta name="title" content={`${post.title} | Cannaha CBD`}/> */}
            </Head>
            <Header />
            <main>
                <Breadcrumb />
                <ProductPageInfos />
                <RelatedProducts />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
};

export default ProductPage;