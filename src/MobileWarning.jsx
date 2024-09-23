import React from 'react';
import './App.css'; 

const MobileWarning = () => {
    return (
        <div className="mobile-warning">
            <div className="message">
                <h1>Warning</h1>
                <p>This project is not Mobile/Tablet friendly. Please view it on a larger screen.</p>
            </div>
        </div>
    );
};

export default MobileWarning;
