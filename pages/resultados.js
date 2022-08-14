import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ResultPageContent from "../components/ResultPageContent/ResultPageContent";

function ResultPages(){
    return (
        <div id="results__page">
            <Head>
                <title>Resultados | Cannaha CBD</title>
                <meta name="description" content="Cannaha" />
                {/* <meta name="title" content={`${post.title} | Cannaha CBD`}/> */}
            </Head>
            <Header />
            <main>
                <h1>Resultados</h1>
                <ResultPageContent />
            </main>
            <Footer />
        </div>
    )
};

export default ResultPages;