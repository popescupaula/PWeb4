import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import AboutUsSection from '../components/AboutUs';

const AboutUs = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='ABOUT US.' text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'/>
            <AboutUsSection/>
            <Footer/>
        </div>
    )
}

export default AboutUs
