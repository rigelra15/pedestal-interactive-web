import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PedestalLogo_White from '../icons/Pedestal-White.png';
import PedestalLogo_Green from '../icons/Pedestal-Green.png';
import InstagramLogo from '../icons/instagram.svg'
import { facebook } from 'fontawesome';
import './css/home.css'; // Import a CSS file for custom styles (create this file)

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location (URL)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='font-lexend-deca border-[12px] border-[#2C8E53] h-[100vh] w-[100vw] overflow-auto bg-[#CCE5D0] relative'>
      <div className="h-[100%] w-[100%] p-[35px]">
        <div className='flex flex-row justify-between'>
        {!isMenuOpen ? (
          <img className='absolute top-0 left-0 mt-9 ml-9 z-20' src={PedestalLogo_Green} alt="Pedestal Logo" height={60} width={60} />
        ) : (
          <img className='absolute top-0 left-0 mt-9 ml-9 z-30' src={PedestalLogo_White} alt="Pedestal Logo" height={60} width={60} />
        )}

          {/* Hamburger Icon */}
          {!isMenuOpen && (
            <button
              className="absolute top-0 right-0 mt-16 mr-14"
              onClick={toggleMenu}
            >
              <div className="hamburger-line bg-black mb-[5px] w-[30px] h-[3px]"></div>
              <div className="hamburger-line bg-black mb-[5px] w-[30px] h-[3px]"></div>
              <div className="hamburger-line bg-black w-[30px] h-[3px]"></div>
            </button>
          )}
          <facebook />
        </div>

        {/* Background Overlay */}
        <div className={`background-overlay ${isMenuOpen ? 'open' : ''}`} />

        {/* Menu Overlay */}
        <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
          {/* {isMenuOpen && (
            <img className='absolute top-0 left-0 mt-9 ml-9' src={PedestalLogo_White} alt="Pedestal Logo" height={60} width={60} />
          )} */}
          <div className="text-left text-white font-bold flex flex-col" style={{ marginLeft: '35px' }}>
            {/* Apply conditional styling based on the current location */}
            {/* Close Button (X Button) */}
            <button
              className="absolute top-0 right-0 mt-16 mr-14 text-white"
              onClick={closeMenu}
            >
              <div className="hamburger-line rotate-45 bg-white rounded mb-[5px] w-[30px] h-[3px]"></div>
              <div className="hamburger-line -mt-2 -rotate-45 bg-white rounded mb-[5px] w-[30px] h-[3px]"></div>
            </button>
            <Link to="/" className={location.pathname === '/' ? 'menu-item active' : 'menu-item'}>HOME</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'menu-item active' : 'menu-item'}>CONTACT</Link>
            <Link to="/technology" className={location.pathname === '/technology' ? 'menu-item active' : 'menu-item'}>TECHNOLOGY</Link>
            <Link to="/news" className={location.pathname === '/news' ? 'menu-item active' : 'menu-item'}>NEWS</Link>
            <Link to="/partners" className={location.pathname === '/partners' ? 'menu-item active' : 'menu-item'}>PARTNERS</Link>
            <Link to="/connect" className={location.pathname === '/connect' ? 'menu-item active' : 'menu-item'}>CONNECT</Link>
          </div>

          <a href='https://www.instagram.com/pedestal_id' className='absolute bottom-0 right-0 mb-16 mr-14 flex flex-col items-end gap-2 bg-gradient-to-b from-[#77BF82] to-[#3A6742] px-4 py-2 rounded-md'>
            {/* <p className='text-white'>Our Social Media:</p> */}
            <div className='flex flex-row justify-center items-center gap-3 text-white'>
              <p className='font-bold'>@pedestal.id</p>
              <img src={InstagramLogo} alt="Instagram Logo" height={25} width={25} />
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Home;
