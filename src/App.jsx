import React from "react";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OffersCarousel from "./components/OffersCarousel";
import Specialisation from "./components/Specialisation";

const App = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <HeroSection />
            <OffersCarousel />
            <Specialisation />
        </div>
    );
};

export default App;
