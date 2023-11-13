import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PedestalLogo from '../icons/pedestal.png';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='font-lexend-deca border-8 border-[#2C8E53] h-[100vh] w-[100vw] overflow-auto bg-[#CCE5D0] relative'>
      <div className="h-[100%] w-[100%] p-[35px]">

        <img src={PedestalLogo} alt="Pedestal Logo" height={60} width={60} />

        {/* Hamburger Icon */}
        <button 
          className="absolute top-0 right-0 mt-[30px] mr-[30px] hamburger" 
          onClick={toggleMenu}
        >
          <div className="hamburger-line bg-black mb-[5px] w-[30px] h-[3px]"></div>
          <div className="hamburger-line bg-black mb-[5px] w-[30px] h-[3px]"></div>
          <div className="hamburger-line bg-black w-[30px] h-[3px]"></div>
        </button>

        {/* Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75 flex justify-center items-center">
            <div className="text-center">
              <Link to="/" className="text-white text-xl">HOME</Link>
              <Link to="/mission" className="text-white text-xl">MISSION</Link>
              <Link to="/technology" className="text-white text-xl">TECHNOLOGY</Link>
              <Link to="/news" className="text-white text-xl">NEWS</Link>
              <Link to="/partners" className="text-white text-xl">PARTNERS</Link>
              <Link to="/connect" className="text-white text-xl">CONNECT</Link>
            </div>
          </div>
        )}
      </div>
      <style>
        {`
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 20;
        }
        
        .hamburger-line {
          transition: all 0.3s ease;
        }
        
        /* When the menu is open, you can add animations or transformations to the hamburger lines */
        .hamburger-open .line1 {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger-open .line2 {
          opacity: 0;
        }
        
        .hamburger-open .line3 {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        
        /* Menu overlay */
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }
        
        .menu-item {
          color: white;
          font-size: 1.5rem;
          margin: 1rem;
          text-decoration: none;
        }        
        `}
      </style>
    </div>
  );
}

export default Home;
