import React from "react";

const H2Card = ({ title, content }) => {
  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-6">
      <div className="flex justify-start">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-black pb-2">
            {title}
          </h2>
          <p className="text-base text-black-500 dark:text-black-400">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default H2Card;