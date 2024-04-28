import React, { useState } from 'react';
import './Newsletter.css'; // Import the CSS file

const Newsletter = () => {
    const [email, setEmail] = useState(''); // State for the email input

    const handleSubmit = () => {
        console.log('Submitted email:', email);
        // Here you can handle the submission logic
    };

    return (
        <div className="newsletter">
            <h1>Join our Newsletter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className="input-submit-container">
                <input id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" className="email-input-field" />
                <div className="submit-button" onClick={handleSubmit}>
                    Submit
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
