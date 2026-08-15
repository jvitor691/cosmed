import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrailsSection from "../components/TrailsSection/TrailsSection";
import GuideSection from "../components/GuideSection/GuideSection";
import About from "../components/About/About";
import OfferSection from "../components/OfferSection/OfferSection";
import FAQ from "../components/FAQ/FAQ";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer/Footer";
import PageMeta from "../components/PageMeta";

const Home = () => {
    return (
        <>
            <PageMeta
                title="Guia de Estudos COSMED | ENEM 2026"
                description="Organize sua preparação para o ENEM 2026 com trilhas de estudo, cronogramas, calendários, estratégias e ferramentas práticas."
            />
            <Header />

            <main>
                <Hero />
                <TrailsSection />
                <GuideSection />
                <About />
                <OfferSection />
                <FAQ />
                <FinalCTA />
            </main>

            <Footer />

        </>
    );
};

export default Home;
