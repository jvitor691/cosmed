import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrailsSection from "../components/TrailsSection/TrailsSection";
import GuideSection from "../components/GuideSection/GuideSection";
import About from "../components/About/About";
import OfferSection from "../components/OfferSection/OfferSection";
import FAQ from "../components/FAQ/FAQ";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA/MobileStickyCTA";

const Home = () => {
    return (
        <>
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