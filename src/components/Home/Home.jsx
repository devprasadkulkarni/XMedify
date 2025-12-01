import BlogNews from "./BlogNews";
import HeroSection from "./HeroSection";
import Marquee from "./Marquee";
import Navbar from "./Navbar";
import OffersCarousel from "./Carousels/OffersCarousel";
import OurFamilies from "./OurFamilies";
import PatientCaring from "./PatientCaring";
import Specialisation from "./Specialisation";
import Faq from "./Faq";
import SpecialistCarousel from "../Home/Carousels/SpecialistCarousel";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <HeroSection />
            <OffersCarousel />
            <Specialisation />
            <SpecialistCarousel />
            <PatientCaring />
            <BlogNews />
            <OurFamilies />
            <Faq />
            <DownloadApp />
            <Footer/>
        </div>
    );
};

export default Home;
