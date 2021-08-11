import React from 'react';
import '../pages/style.css';

export default function Footer() {
    return (
        <div className="container text-center">
            <div className="footer text-center">
                <a href="https://www.github.com/SamuelMontague" target="_blank"><img src="assets/images/github.png" alt="github" className="github-logo"></img></a>
                <a href="https://www.linkedin.com/in/samuelpmontague/" target="_blank"><img src="assets/images/linkedin.png" alt="linkedin" className="linkedin-logo"></img></a>
            </div>
        </div>

    );
}