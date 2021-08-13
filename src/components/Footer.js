import React from 'react';
import GITHUB from '../assets/icons/github.png'
import LINKEDIN from "../assets/icons/linkedin.png"


export default function Footer() {
    return (
        <div className="container text-center">
            <div className="footer text-center">
                <a href="https://www.github.com/SamuelMontague" target="_blank" rel="noreferrer"><img src={GITHUB} alt="github" className="github-logo"></img></a>
                <a href="https://www.linkedin.com/in/samuelpmontague/" target="_blank" rel="noreferrer"><img src={LINKEDIN} alt="linkedin" className="linkedin-logo"></img></a>
            </div>
        </div>

    );
}