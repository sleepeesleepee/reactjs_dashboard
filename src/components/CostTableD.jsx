import React from 'react';

const CostTable = () => {
  const calculateCost = (currentLuck) => {
    const luckNeeded = 200;
    const drawsNeeded = Math.max(0, luckNeeded - currentLuck);
    const fullSets = Math.floor(drawsNeeded / 5);
    const remainingDraws = drawsNeeded % 5;
    const diamondsNeeded = (fullSets * 270) + (remainingDraws * 60);

    return [currentLuck, drawsNeeded, diamondsNeeded];
  };

  const tableData = [0, 50, 100, 150].map(calculateCost);

  return (
    <div className="overflow-x-auto bg-white rounded-xl p-2 sm:p-4 shadow-md">
      <table className="w-full text-xs sm:text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Current Luck</th>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Draws Needed</th>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Diamonds Needed</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(([luck, draws, diamonds], index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{luck}</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{draws}</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{diamonds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CostTable;