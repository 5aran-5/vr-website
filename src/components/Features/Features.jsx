import React, { useEffect } from "react";
import './Features.css';

import img1 from "../../images/289jpXiaomi-VR.jpg"
import img2 from "../../images/Sep20_18_1171377963.jpg"

const Features = () => {
    const featuresData = [
        {
            title: "New Experience In Playing Game",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: img1,
        },
        {
            title: "More Fun Enjoying Entertainment",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: img2,
        }
    ];

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: '0px 0px -100px 0px', // Adjust the rootMargin as needed
        });

        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => observer.observe(card));

        return () => {
            featureCards.forEach(card => observer.unobserve(card));
        };
    }, []);


    return (
        <section className="features">
            <div className="feature-cards">
                {featuresData.map((feature, index) => (
                    <div key={index} className={`feature-card ${index % 2 === 0 ? 'even' : 'odd'}`}>
                        <div className="feature-image">
                            <img src={feature.image} alt={feature.title} />
                        </div>
                        <div className="feature-content">
                            <h1>{feature.title}</h1>
                            <p>{feature.description}</p>
                            <div className="features-button">Get Now</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
