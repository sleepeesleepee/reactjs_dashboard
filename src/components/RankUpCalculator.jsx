import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { ChevronDownIcon } from 'lucide-react';
import CrystalIcon from '../assets/rank.svg';
import loadingAnimation from '../assets/loading.json';
import backgroundImage from '../assets/bg3.webp';

const ranks = [
  { name: "Bronze III", stars: 0 },
  { name: "Bronze II", stars: 3 },
  { name: "Bronze I", stars: 6 },
  { name: "Silver III", stars: 9 },
  { name: "Silver II", stars: 12 },
  { name: "Silver I", stars: 15 },
  { name: "Gold IV", stars: 18 },
  { name: "Gold III", stars: 22 },
  { name: "Gold II", stars: 26 },
  { name: "Gold I", stars: 30 },
  { name: "Platinum IV", stars: 34 },
  { name: "Platinum III", stars: 38 },
  { name: "Platinum II", stars: 42 },
  { name: "Platinum I", stars: 46 },
  { name: "Diamond V", stars: 50 },
  { name: "Diamond IV", stars: 55 },
  { name: "Diamond III", stars: 60 },
  { name: "Diamond II", stars: 65 },
  { name: "Diamond I", stars: 70 },
  { name: "Master V", stars: 75 },
  { name: "Master IV", stars: 80 },
  { name: "Master III", stars: 85 },
  { name: "Master II", stars: 90 },
  { name: "Master I", stars: 95 },
  { name: "Grandmaster", stars: 100 },
  { name: "Mythic", stars: 125 },
  { name: "Epic", stars: 175 },
  { name: "Legend", stars: 200 },
];

const RankUpCalculator = () => {
  const [currentRank, setCurrentRank] = useState(ranks[0]);
  const [desiredRank, setDesiredRank] = useState(ranks[1]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculate = () => {
    setLoading(true);
    setTimeout(() => {
      const currentStars = currentRank.stars;
      const desiredStars = desiredRank.stars;
      const totalStarsNeeded = Math.max(0, desiredStars - currentStars);

      let wins = 0;
      let remainingStars = totalStarsNeeded;

      while (remainingStars > 0) {
        if (currentRank.name.startsWith("Bronze") || currentRank.name.startsWith("Silver")) {
          wins += Math.min(3, remainingStars);
          remainingStars -= 3;
        } else if (currentRank.name.startsWith("Gold") || currentRank.name.startsWith("Platinum")) {
          wins += Math.min(4, remainingStars);
          remainingStars -= 4;
        } else {
          wins += Math.min(5, remainingStars);
          remainingStars -= 5;
        }
      }

      setResult({
        starsNeeded: totalStarsNeeded,
        winsNeeded: wins
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
            Rank Up Calculator
          </h1>
          <p className="text-sm font-medium text-center mb-8 flex flex-wrap items-center justify-center">
            Calculate how many stars and wins you need to
            <img src={CrystalIcon} alt="Crystal Icon" className="w-6 h-6 mx-2" />
            <span className="font-bold animate-gradient-text gradient-text-glow ml-1">rank up!</span>
          </p>
          <div className="w-full space-y-4 mb-4">
            <div className="relative">
              <select
                value={currentRank.name}
                onChange={(e) => setCurrentRank(ranks.find(r => r.name === e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md appearance-none pr-8 font-regular text-sm"
              >
                {ranks.map((rank) => (
                  <option key={rank.name} value={rank.name}>{rank.name}</option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="relative">
              <select
                value={desiredRank.name}
                onChange={(e) => setDesiredRank(ranks.find(r => r.name === e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md appearance-none pr-8 font-regular text-sm"
              >
                {ranks.map((rank) => (
                  <option key={rank.name} value={rank.name}>{rank.name}</option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <button
            onClick={calculate}
            className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            Calculate Rank Up
          </button>
          {loading ? (
            <div className="flex justify-center mt-8">
              <Lottie options={defaultOptions} height={150} width={150} />
            </div>
          ) : result && (
            <div className="mt-8 w-full">
              <div className="bg-gray-100 p-3 rounded-md mb-2 flex items-center">
                <img src={CrystalIcon} alt="Crystal Icon" className="w-6 h-6 mr-2" />
                <strong>Stars needed:</strong> <span className="ml-auto">{result.starsNeeded}</span>
              </div>
              <div className="bg-gray-100 p-3 rounded-md flex items-center">
                <img src={CrystalIcon} alt="Crystal Icon" className="w-6 h-6 mr-2" />
                <strong>Wins needed:</strong> <span className="ml-auto">{result.winsNeeded}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ffffff] to-transparent z-10"></div>
    </div>
  );
};

export default RankUpCalculator;