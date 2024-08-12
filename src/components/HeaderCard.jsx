import React from "react";

const HeaderCard = ({ title, subtitle }) => {
  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-6">
      <div className="flex justify-start">
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-black pb-2">
            {title}
          </h1>
          <p className="text-base text-black-500 dark:text-black-400">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;