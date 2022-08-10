import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection.js';
import SelfIntro from '../SelfIntro';

function Home() {
    return(
        <>
            <HeroSection />
            <Cards/>
            <SelfIntro/>
            <Footer/>
        </>
    );

}

export default Home;