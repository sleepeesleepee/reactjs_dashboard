import React from 'react';

const CostTable = () => {
  const partnerRewards = [
    { partners: 1, reward: "80 Limited Tokens" },
    { partners: 3, reward: "120 Limited Tokens" },
    { partners: 6, reward: "600 Tokens" },
    { partners: 12, reward: "1 Epic Skin" },
    { partners: 20, reward: "1 Legendary Skin" },
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-xl p-2 sm:p-4 shadow-md">
      <table className="w-full text-xs sm:text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Number of Partners</th>
            <th scope="col" className="px-2 py-2 sm:px-4 sm:py-3">Reward</th>
          </tr>
        </thead>
        <tbody>
          {partnerRewards.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{item.partners}</td>
              <td className="px-2 py-2 sm:px-4 sm:py-3">{item.reward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CostTable;