import React from 'react';

const CostTable = () => {
  const ranks = [
    { name: "Bronze III", stars: 0 },
    { name: "Silver III", stars: 9 },
    { name: "Gold IV", stars: 18 },
    { name: "Platinum IV", stars: 34 },
    { name: "Diamond V", stars: 50 },
    { name: "Master V", stars: 75 },
    { name: "Grandmaster", stars: 100 },
    { name: "Mythic", stars: 125 },
    { name: "Epic", stars: 175 },
    { name: "Legend", stars: 200 },
  ];

  const calculateWins = (startStars, endStars) => {
    let remainingStars = endStars - startStars;
    let wins = 0;

    while (remainingStars > 0) {
      if (startStars < 9) { // Bronze
        wins += Math.min(3, remainingStars);
        remainingStars -= 3;
      } else if (startStars < 18) { // Silver
        wins += Math.min(3, remainingStars);
        remainingStars -= 3;
      } else if (startStars < 34) { // Gold
        wins += Math.min(4, remainingStars);
        remainingStars -= 4;
      } else if (startStars < 50) { // Platinum
        wins += Math.min(4, remainingStars);
        remainingStars -= 4;
      } else { // Diamond and above
        wins += Math.min(5, remainingStars);
        remainingStars -= 5;
      }
      startStars++;
    }

    return wins;
  };

  const tableData = ranks.slice(0, -1).map((rank, index) => {
    const nextRank = ranks[index + 1];
    const starsNeeded = nextRank.stars - rank.stars;
    const winsNeeded = calculateWins(rank.stars, nextRank.stars);
    return [rank.name, nextRank.name, starsNeeded, winsNeeded];
  });

  return (
    <div className="overflow-x-auto bg-white rounded-xl p-2 sm:p-4 shadow-md">
      <table className="w-full text-xs sm:text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Current Rank</th>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Next Rank</th>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Stars Needed</th>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Estimated Wins</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(([currentRank, nextRank, stars, wins], index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{currentRank}</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{nextRank}</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{stars}</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CostTable;