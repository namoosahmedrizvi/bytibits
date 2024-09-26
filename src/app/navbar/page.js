'use client'; // Ensure this component is treated as a client-side component

import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState
import Link from 'next/link';
import '../../../public/style/navbarStyle.css';
import Image from 'next/image';
import LogoImg from '../../../public/images/Logo.png';

const NavbarPage = () => {
  // State to manage the collapse status
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  // Toggle function to manage the collapse status
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={LogoImg} alt="LogoImg" className="LogoImg" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            {isCollapsed ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <span>&#10005;</span>
            )}
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              !isCollapsed ? 'show' : ''
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/services" className="nav-link active" aria-current="page">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/portfolio" className="nav-link" aria-current="page">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/aboutus" className="nav-link" aria-current="page">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contactus" className="nav-link" aria-current="page">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
