import React, { useState } from 'react';
import Lottie from 'react-lottie';
import CrystalIcon from '../assets/crystal.webp';
import HonorIcon from '../assets/honor.webp';
import TokenIcon from '../assets/token.webp';
import loadingAnimation from '../assets/loading.json';
import backgroundImage from '../assets/bg1.webp';

const LuckyDrawCalculator = () => {
  const [currentLuck, setCurrentLuck] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculate = () => {
    setLoading(true);
    setTimeout(() => {
      const luckNeeded = 360;
      const luckPerDraw = 1;
      const drawsPerBatch = 5;
      const honorPointsPerBatch = 270;

      if (currentLuck >= luckNeeded) {
        setResult({
          drawsNeeded: 0,
          honorPointsNeeded: 0,
          tokensNeeded: 0,
        });
        setLoading(false);
        return;
      }

      const drawsNeeded = Math.ceil((luckNeeded - currentLuck) / luckPerDraw);
      const batchesNeeded = Math.ceil(drawsNeeded / drawsPerBatch);
      const honorPointsNeeded = batchesNeeded * honorPointsPerBatch;
      const tokensNeeded = honorPointsNeeded;

      setResult({
        drawsNeeded,
        honorPointsNeeded,
        tokensNeeded,
        batchesNeeded
      });
      setLoading(false);
    }, 2000);
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
            Lucky Draw Calculator
          </h1>
          <p className="text-sm font-medium text-center mb-8 flex flex-wrap items-center justify-center">
            Calculate how much token you need to get a
            <span className="font-bold animate-gradient-text gradient-text-glow ml-1">Mythical skin!</span>
          </p>
          <div className="w-full mb-4">
            <input
              type="number"
              id="currentLuck"
              value={currentLuck}
              onChange={(e) => setCurrentLuck(e.target.value === '' ? '' : Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md font-regular text-sm"
              min="0"
              placeholder="Enter your luck (Example: 120)"
            />
          </div>
          <button
            onClick={calculate}
            className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            Calculate Mythical Skin Cost
          </button>
          {loading ? (
            <div className="flex justify-center mt-8">
              <Lottie options={defaultOptions} height={150} width={150} />
            </div>
          ) : result && (
            <div className="mt-8 w-full">
              <div className="bg-gray-100 p-3 rounded-md mb-2 flex items-center">
                <img src={CrystalIcon} alt="Crystal Icon" className="w-6 h-6 mr-2" />
                <strong>Draws needed:</strong> {result.drawsNeeded} ({result.batchesNeeded} x 5 draws)
              </div>
              <div className="bg-gray-100 p-3 rounded-md mb-2 flex items-center">
                <img src={HonorIcon} alt="Honor Icon" className="w-6 h-6 mr-2" />
                <strong>Honor points needed:</strong> {result.honorPointsNeeded}
              </div>
              <div className="bg-gray-100 p-3 rounded-md flex items-center">
                <img src={TokenIcon} alt="Token Icon" className="w-6 h-6 mr-2" />
                <strong>Tokens needed:</strong> {result.tokensNeeded}
              </div>
              <p className="text-sm text-gray-600 mt-2 italic">
                *Avoid doing single draws as it costs more. Always do 5 draws at once for better value.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ffffff] to-transparent z-10"></div>
    </div>
  );
};

export default LuckyDrawCalculator;