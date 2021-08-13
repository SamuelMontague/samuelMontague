import React, { useState } from 'react';
import NavTabs  from './Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';
import Resume from './pages/Resume'

import '../App.css'

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume'){
            return <Resume />
        }
        return <About />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return ( 
        <>
        <header className="header text-center">
            <div> 
                <h1>Samuel Montague</h1>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
        </header>
        < Footer />
        </>
    );
}

