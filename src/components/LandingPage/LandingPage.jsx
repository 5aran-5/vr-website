import React from "react";
import './LandingPage.css'
import img from "../../images/VR-World-header-2023-2-color.jpg"

const LandingPage = () => {
    return (
        <section className="landing-page">
            <div className="text-content">
                <h1>Let's explore the mind world with your own VR</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="buttons">
                    <button>Explore Device</button>
                    <button>Find Popular VR</button>
                </div>
            </div>
            <div className="image-content">
                <img
                    src={img}
                    alt="VR Premium"
                />
            </div>
        </section>
    );
};

export default LandingPage;