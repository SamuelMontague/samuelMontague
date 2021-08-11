import React, { useState } from 'react';
import NavTabs  from '../components/Nav';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

import '../App.css'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

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
        return <About />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return ( 
        <div> 
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}