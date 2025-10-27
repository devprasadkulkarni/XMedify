import React from "react";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
    return (
        <div>
            <Marquee />
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default App;
