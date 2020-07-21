import React from 'react';
import "./loader.sass"

export default function Loader() {
    return (
        <div className="loader-wrapper">
            <div className="gooey">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}
