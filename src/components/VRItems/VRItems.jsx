import React, { useEffect, useRef } from "react";
import Card from "../Card/Card";
import './VRItems.css';
import img1 from "../../images/G03 (1).jpg";
import img2 from "../../images/G03 (2).jpg";
import img3 from "../../images/G03.jpg";

const VRItems = () => {
    const cardContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        });

        if (cardContainerRef.current) {
            observer.observe(cardContainerRef.current);
        }
    }, []);

    return (
        <div className="vr-items-container">
            <h1>Find <span className="vr-items-popular-text">Popular</span> VR</h1>
            <div className="vr-items-line-bar"></div>
            <div className="vr-items-card-container" ref={cardContainerRef}>
                <Card title="VR Premium" image={img1} />
                <Card title="VR Normal" image={img2} />
                <Card title="VR Set" image={img3} />
            </div>
        </div>
    );
};

export default VRItems;
