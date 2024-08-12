import React from "react";

const AdSlot = ({ position }) => {
  return (
    <div className="my-8 p-4 bg-gray-100 rounded-lg">
      <p className="text-center text-gray-600">Advertisement</p>
      {/* Placeholder for actual ad content */}
      <div className="h-32 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400">Ad Space - {position}</span>
      </div>
    </div>
  );
};

export default AdSlot;