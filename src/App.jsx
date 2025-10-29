import React from "react";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OffersCarousel from "./components/OffersCarousel";
import Specialisation from "./components/Specialisation";
import SpecialistCarousel from "./components/Carousels/SpecialistCarousel";
import PatientCaring from "./components/PatientCaring";

const App = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <HeroSection />
            <OffersCarousel />
            <Specialisation />
            {/* <SpecialistCarousel /> */}
            <PatientCaring />
        </div>
    );
};

export default App;
