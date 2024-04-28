import React from 'react';
import './HomePage.css';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import VRItems from '../VRItems/VRItems';
import Features from '../Features/Features';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../Footer/Footer';

function HomePage() {
    return (
        <div className='HomePage'>
            <Header />
            <div className="content-container">
                <LandingPage />
                <VRItems />
            </div>
            <Features />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default HomePage;
