import React from "react";
import HeaderCard from "../components/HeaderCard";
import ToolsGrid from "../components/ToolsGrid"; // Import the ToolsGrid component

const Home = () => {
  return (
    <div className="p-5">
      <HeaderCard
        title="Honor Of Kings Tools"
        subtitle="Welcome to the ultimate resource hub for Honor of Kings players! Our suite of tools is designed to enhance your gameplay experience, offering everything you need to strategize, improve, and enjoy the game even more. Whether you're looking for in-depth stats, hero builds, or game insights, you'll find it all here at your fingertips."
      />
      <ToolsGrid /> {/* Add the ToolsGrid component here */}
      <p className="mt-4 text-sm text-gray-500">
        Note: This is a fan-made project. All assets and intellectual properties are owned by the developers, publishers, and respective parties of Honor of Kings.
      </p>
      {/* You can add BlogPost or other components here if needed */}
    </div>
  );
};

export default Home;
