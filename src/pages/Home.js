import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PedestalLogo_White from '../icons/Pedestal-White.png';
import PedestalLogo_Green from '../icons/Pedestal-Green.png';
import InstagramLogo from '../icons/instagram.svg';
import './css/home.css'; // Import a CSS file for custom styles (create this file)
import LanguagePopup from './LanguagePopup';
import LikeButton from './LikeButton';
import './css/LoadingOverlay.css'
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isIndonesian, setIsIndonesian] = useState(() => {
    const storedValue = localStorage.getItem('isIndonesian');
    return storedValue !== null ? storedValue === 'true' : true;
  });

  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [languageChangeMessage, setLanguageChangeMessage] = useState('');

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    handleLanguageSelect(selectedLanguage);
  };

  // const toggleLanguage = () => {
  //   setIsLoading(true);
  //   const newLanguage = !isIndonesian;
  //   localStorage.setItem('isIndonesian', newLanguage);
  //   setLanguageChangeMessage(`Changing language to ${newLanguage ? 'ID' : 'EN'}, please wait...`);
  
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setLanguageChangeMessage('');
  
  //     setTimeout(() => {
  //       setIsIndonesian(newLanguage);
  //     }, 0);
  //   }, 1000);
  // };
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLanguageSelect = (selectedLanguage) => {
    setIsLoading(true);
    setLanguageChangeMessage(`Changing language to ${selectedLanguage === 'id' ? 'Indonesian' : 'English'}, please wait...`);
    setTimeout(() => {
      setIsIndonesian(selectedLanguage === 'id');
      setShowLanguagePopup(false);
      localStorage.setItem('isIndonesian', selectedLanguage === 'id');
      setIsLoading(false);
      setLanguageChangeMessage('');
    }, 1000); // Set the loading duration in milliseconds (2 seconds in this case)
  };

  useEffect(() => {
    const isIndonesianInLocalStorage = localStorage.getItem('isIndonesian') !== null;
    setShowLanguagePopup(!isIndonesianInLocalStorage);
  }, []);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenChange = () => {
    setIsFullscreen(document.fullscreenElement !== null);
  };

  const toggleFullscreen = () => {
    const element = document.documentElement;

    if (!isFullscreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);


  return (
    <div className="font-lexend-deca border-[12px] border-[#2C8E53] h-screen w-screen overflow-auto bg-[#CCE5D0] relative">
      {showLanguagePopup && (
        <LanguagePopup onSelectLanguage={handleLanguageSelect} />
      )}
      {isLoading && (
        <div className="loading-overlay">
          <p>{languageChangeMessage || 'Please wait...'}</p>
        </div>
      )}
      <div className="h-[100%] w-[100%] p-[35px]">
        <div className='flex flex-row justify-between'>
          {!isMenuOpen ? (
            <>
              <a href='/'>
                <img className='absolute top-0 left-0 mt-9 ml-9 z-20' src={PedestalLogo_Green} alt="Pedestal Logo" height={60} width={60} />
                <p className='absolute top-0 left-0 mt-[70px] ml-24 text-2xl font-bold text-[#318d57] z-20'>edestal</p>
              </a>
            </>
          ) : (
            <>
              <a href='/'>
                <img className='absolute top-0 left-0 mt-9 ml-9 z-30 transition-opacity duration-700' src={PedestalLogo_White} alt="Pedestal Logo" height={60} width={60} />
                <p className='absolute top-0 left-0 mt-[70px] ml-24 text-2xl font-bold text-white z-30'>edestal</p>
              </a>
            </>
          )}
          <div className='absolute top-0 right-0 mt-14 mr-14 flex flex-row gap-4 justify-center items-center'>
            {/* Modern Dropdown Language */}
            <div className="relative">
              <label htmlFor="languageSelect" className="text-[#3A6742] flex flex-row gap-2 justify-center items-center cursor-pointer">
                
                <select
                  id="languageSelect"
                  className="select-dropdown rounded-md px-2 py-[7px]"
                  value={isIndonesian ? 'id' : 'en'}
                  onChange={handleLanguageChange}
                >
                  <option value="en">English</option>
                  <option value="id">Indonesian</option>
                </select>
              </label>
            </div>

            {/* Fullscreen Button */}
            <button
              className="text-black bg-white rounded-md px-2 py-2 cursor-pointer"
              onClick={toggleFullscreen}
            >
              {isFullscreen ? <BsArrowsAngleContract /> : <BsArrowsAngleExpand />}
            </button> 
            {/* Hamburger Icon */}
            <div>
              <button
                className=""
                onClick={toggleMenu}
                disabled={isMenuOpen}
              >
                <div className="hamburger-line bg-black mb-[5px] mt-[5px] w-[30px] h-[3px]"></div>
                <div className="hamburger-line bg-black mb-[5px] w-[30px] h-[3px]"></div>
                <div className="hamburger-line bg-black w-[30px] h-[3px]"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Display the LikeButton component */}
        {/* <div className="ml-[200px] mt-[100px]">
          <h2>Post Title</h2>
          <p>Post content goes here...</p>
          <LikeButton postId={1} initialLikes={50} />
        </div> */}

        {/* Background Overlay */}
        <div className={`background-overlay ${isMenuOpen ? 'open' : ''}`} />

        {/* Menu Overlay */}
        <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
          <div className="text-left text-white font-bold flex flex-col" style={{ marginLeft: '35px' }}>
            <button
              className="absolute top-0 right-0 mt-[70px] mr-14 text-white"
              onClick={closeMenu}
            >
              <div className="hamburger-line rotate-45 bg-white rounded mb-[5px] w-[30px] h-[3px]"></div>
              <div className="hamburger-line -mt-2 -rotate-45 bg-white rounded mb-[5px] w-[30px] h-[3px]"></div>
            </button>
            {isIndonesian ? <Link to="/" className={location.pathname === '/' ? 'menu-item active' : 'menu-item'}>BERANDA</Link> : <Link to="/" className={location.pathname === '/' ? 'menu-item active' : 'menu-item'}>HOME</Link>}
            {isIndonesian ? <Link to="/tujuan" className={location.pathname === '/tujuan' ? 'menu-item active' : 'menu-item'}>TUJUAN</Link> : <Link to="/goals" className={location.pathname === '/goals' ? 'menu-item active' : 'menu-item'}>GOALS</Link>}
            {isIndonesian ? <Link to="/fitur" className={location.pathname === '/fitur' ? 'menu-item active' : 'menu-item'}>FITUR</Link> : <Link to="/features" className={location.pathname === '/features' ? 'menu-item active' : 'menu-item'}>FEATURES</Link>}
            {isIndonesian ? <Link to="/latar_belakang" className={location.pathname === '/latar_belakang' ? 'menu-item active' : 'menu-item'}>LATAR BELAKANG</Link> : <Link to="/backgrounds" className={location.pathname === '/backgrounds' ? 'menu-item active' : 'menu-item'}>BACKGROUNDS</Link>}
            {isIndonesian ? <Link to="/kontak" className={location.pathname === '/kontak' ? 'menu-item active' : 'menu-item'}>KONTAK</Link> : <Link to="/contacts" className={location.pathname === '/contacts' ? 'menu-item active' : 'menu-item'}>CONTACTS</Link>}
            {isIndonesian ? <Link to="/demo" className={location.pathname === '/demo' ? 'menu-item active' : 'menu-item'}>DEMO</Link> : <Link to="/demonstrations" className={location.pathname === '/demonstrations' ? 'menu-item active' : 'menu-item'}>DEMO</Link>}
            {/* {isIndonesian ? <Link to="#pengaturan" className={location.pathname === '/pengaturan' ? 'menu-item active' : 'menu-item'}>PENGATURAN</Link> : <Link to="/settings" className={location.pathname === '#settings' ? 'menu-item active' : 'menu-item'}>SETTINGS</Link>} */}
          </div>

          <a href='https://www.instagram.com/pedestal.id' className='absolute bottom-0 right-0 mb-16 mr-14 flex flex-col items-end gap-2 bg-gradient-to-b from-[#77BF82] to-[#3A6742] px-4 py-2 rounded-md'>
            {/* <p className='text-white'>Our Social Media:</p> */}
            <div className='flex flex-row justify-center items-center gap-3 text-white'>
              <p className='font-bold'>@pedestal.id</p>
              <img src={InstagramLogo} alt="Instagram Logo" height={25} width={25} />
            </div>
          </a>

          <div className='absolute bottom-0 left-0 mb-16 ml-14 text-white flex flex-row gap-2 justify-center items-center'>
            <div className="relative">
              <label label htmlFor="languageSelect" className="text-[#3A6742] flex flex-row gap-2 justify-center items-center cursor-pointer p-2">
                <select
                  id="languageSelect"
                  className="select-dropdown rounded-md p-1"
                  value={isIndonesian ? 'id' : 'en'}
                  onChange={handleLanguageChange}
                >
                  <option value="en">English</option>
                  <option value="id">Indonesian</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
