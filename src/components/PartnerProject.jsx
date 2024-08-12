import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { ClipboardIcon, CheckIcon } from 'lucide-react';
import CrystalIcon from '../assets/crystal.webp';
import loadingAnimation from '../assets/love.json';
import backgroundImage from '../assets/bg4.webp';

const PartnersProject = () => {
  const [partnerCode, setPartnerCode] = useState('');
  const [partnerCodes, setPartnerCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [notification, setNotification] = useState('');
  const [copiedStates, setCopiedStates] = useState({});

  useEffect(() => {
    loadCodes();
    const interval = setInterval(cleanupOldCodes, 60000);
    return () => clearInterval(interval);
  }, []);

  const loadCodes = () => {
    const storedCodes = JSON.parse(localStorage.getItem('partnerCodes') || '[]');
    const validCodes = storedCodes.filter(code => {
      return (new Date().getTime() - code.timestamp) < 24 * 60 * 60 * 1000;
    });
    setPartnerCodes(validCodes);
  };

  const cleanupOldCodes = () => {
    const updatedCodes = partnerCodes.filter(code => {
      return (new Date().getTime() - code.timestamp) < 24 * 60 * 60 * 1000;
    });
    setPartnerCodes(updatedCodes);
    localStorage.setItem('partnerCodes', JSON.stringify(updatedCodes));
  };

  const isValidCode = (code) => {
    return code.length === 7 && /^\d+$/.test(code) && !/^(\d)\1{6}$/.test(code);
  };

  const handleSubmit = () => {
    if (!isValidCode(partnerCode)) {
      setSubmitMessage('Please enter a valid 7-digit partner code. Repeated digits are not allowed.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const newCode = {
        code: partnerCode,
        timestamp: new Date().getTime()
      };
      const updatedCodes = [newCode, ...partnerCodes].slice(0, 6);
      setPartnerCodes(updatedCodes.filter(code => code.code !== partnerCode).slice(0, 5));
      localStorage.setItem('partnerCodes', JSON.stringify(updatedCodes));
      setPartnerCode('');
      setLoading(false);
      setSubmitMessage('Your code has been submitted. Please copy all the required codes to get a Partner Project link.');
    }, 2000);
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedStates(prev => ({ ...prev, [code]: true }));
      setNotification('Code copied to clipboard!');
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [code]: false }));
        setNotification('');
      }, 2000);
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-6" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
      <div className="relative w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-xl p-4 md:p-6 shadow-md z-10 border-t-2 border-b-2 border-white">
        <div className="flex flex-col items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/7/7d/Honor_of_Kings_logo.png?20240617122519" 
            alt="Honor of Kings Logo" 
            className="w-48 mb-6"
          />
          <h1 className="text-3xl text-center font-bold text-gray-900 dark:text-gray pb-4">
            Partners Project
          </h1>
          <p className="text-sm font-medium text-center mb-8 flex flex-wrap items-center justify-center">
            Enter your partner code to find
            <img src={CrystalIcon} alt="Crystal Icon" className="w-6 h-6 mx-2" />
            <span className="font-bold animate-gradient-text gradient-text-glow ml-1">matching partners!</span>
          </p>
          <div className="w-full mb-4">
            <input
              type="text"
              value={partnerCode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 7);
                setPartnerCode(value);
              }}
              className="w-full p-2 border border-gray-300 rounded-md font-regular text-sm"
              maxLength={7}
              placeholder="Enter 7-digit partner code"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            Submit Partner Code
          </button>
          {submitMessage && (
            <p className="mt-4 text-sm text-center text-red-500">{submitMessage}</p>
          )}
          {loading ? (
            <div className="flex justify-center mt-8">
              <Lottie options={defaultOptions} height={150} width={150} />
            </div>
          ) : partnerCodes.length > 0 && (
            <div className="mt-8 w-full">
              <h2 className="text-xl font-bold mb-4">Recent Partner Codes:</h2>
              {partnerCodes.map((codeObj, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-md mb-2 flex items-center justify-between">
                  <span className="font-medium">{codeObj.code}</span>
                  <button
                    onClick={() => copyToClipboard(codeObj.code)}
                    className={`flex items-center justify-center w-20 h-8 rounded transition-all duration-300 ${
                      copiedStates[codeObj.code]
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    {copiedStates[codeObj.code] ? (
                      <CheckIcon size={16} />
                    ) : (
                      <ClipboardIcon size={16} />
                    )}
                    <span className="ml-1">{copiedStates[codeObj.code] ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300">
          {notification}
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ffffff] to-transparent z-10"></div>
    </div>
  );
};

export default PartnersProject;