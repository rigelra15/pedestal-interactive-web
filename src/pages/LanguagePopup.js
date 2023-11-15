import React, { useState, useEffect } from 'react';
import './css/LanguagePopup.css';

const LanguagePopup = ({ onSelectLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('id');
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    if (language === 'id') {
      setIsLanguageSelected(true);
    } else {
      setIsLanguageSelected(false);
    }
  };

  const handleConfirm = () => {
    onSelectLanguage(selectedLanguage);
  };

  useEffect(() => {
    setIsLanguageSelected(selectedLanguage === 'id');
  }, [selectedLanguage]);

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
