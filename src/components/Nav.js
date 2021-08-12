import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar className="navbar">
      <container className="nav-item">
        <div>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </div>
      <Nav.Link className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </Nav.Link>
      <Nav.Link className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </Nav.Link>
      <Nav.Link className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
        </Nav.Link>
      </container>
    </Navbar>
  
  );
}

export default NavTabs;
