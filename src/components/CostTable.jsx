import React from 'react';

const CostTable = () => {
  const calculateCost = (currentLuck) => {
    const drawsNeeded = 360 - currentLuck;
    const batchesNeeded = Math.ceil(drawsNeeded / 5);
    const honorPoints = batchesNeeded * 270;
    const tokens = honorPoints;
    return [currentLuck, drawsNeeded, honorPoints, tokens];
  };

  const tableData = [0, 100, 200, 300].map(calculateCost);

  return (
    <div className="overflow-x-auto bg-white rounded-xl p-2 sm:p-4 shadow-md">
      <table className="w-full text-xs sm:text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Current Luck</th>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Draws Needed</th>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Honor Points</th>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Tokens</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(([luck, draws, honor, tokens], index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{luck}</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{draws}</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{honor}</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{tokens}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CostTable;