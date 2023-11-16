import React, { useState, useEffect } from 'react';
import './css/LanguagePopup.css';
import { FaMapMarker, FaMapMarkerAlt } from 'react-icons/fa';

const LanguagePopup = ({ onSelectLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  useEffect(() => {
    // Use a service to detect the user's location
    const detectUserLocation = async () => {
      try {
        // You can replace this with your preferred method for detecting user location
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        // Automatically select Indonesian if the user is detected in Indonesia
        setSelectedLanguage(data.country === 'ID' ? 'id' : 'en');
        setIsLanguageSelected(true);
      } catch (error) {
        console.error('Error detecting user location:', error);
        // Default to English if there's an error or the location cannot be determined
        setSelectedLanguage('en');
        setIsLanguageSelected(false);
      }
    };

    // Call the function to detect user location
    detectUserLocation();
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageSelected(language === 'id');
  };

  const handleConfirm = () => {
    onSelectLanguage(selectedLanguage);
  };

  // Define a style object for the button with a custom background color
  const buttonStyle = {
    backgroundColor: '#2C8E53', // Change the background color here
    color: 'white', // Text color
    borderRadius: '4px', // Border radius
    padding: '10px 20px', // Padding
    cursor: 'pointer', // Cursor on hover
  };

  return (
    <div className="language-popup-background">
      <div className="language-popup">
        {/* Display the user's location */}
        <div className='flex flex-row gap-2 justify-center items-center px-3 py-2 mb-3 bg-red-500 text-white rounded-lg'>
          <FaMapMarkerAlt className='text-white' />
          {isLanguageSelected ?
            <p className=''>
              {selectedLanguage === 'id' ? 'Lokasi Anda: ' : 'Your Location: '}
              <span className='font-semibold'>
                Indonesia
              </span>
            </p> :
            <p className=''>
              {selectedLanguage === 'id' ? 'Lokasi Anda: ' : 'Your Location: '}
              <span className='font-semibold'>
                Indonesia
              </span>
            </p>
          }
        </div>
  
        <h2>{isLanguageSelected ? 'Pilih Bahasa:' : 'Select Language:'}</h2>
        <div className="language-options">
          <label>
            <input
              type="radio"
              value="id"
              checked={selectedLanguage === 'id'}
              onChange={() => handleLanguageChange('id')}
              style={{ backgroundColor: '#2C8E53'}}
            />
            Indonesian (ID)
          </label>
          <label>
            <input
              type="radio"
              value="en"
              checked={selectedLanguage === 'en'}
              onChange={() => handleLanguageChange('en')}
              style={{ backgroundColor: '#2C8E53'}}
            />
            English (EN)
          </label>
        </div>
        {/* Apply the button style */}
        <button onClick={handleConfirm} style={buttonStyle}>
          {isLanguageSelected ? 'Konfirmasi' : 'Confirm'}
        </button>
      </div>
    </div>
  );
};

export default LanguagePopup;
