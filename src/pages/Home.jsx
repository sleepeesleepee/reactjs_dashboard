import React from "react";
import HeaderCard from "../components/HeaderCard";
import H2Card from "../components/H2Card";
import ToolsGrid from "../components/ToolsGrid";
import AdSlot from "../components/AdSlot";

const Home = () => {
  return (
    <div className="p-5">
      <HeaderCard
        title="Honor Of Kings Tools"
        subtitle="Welcome to the ultimate resource hub for Honor of Kings players! Our suite of tools is designed to enhance your gameplay experience, offering everything you need to strategize, improve, and enjoy the game even more. Whether you're looking for in-depth stats, hero builds, or game insights, you'll find it all here at your fingertips."
      />

      <ToolsGrid />

      <AdSlot position="top" />

      <H2Card
        title="Maximize Your Potential in Honor of Kings"
        content="Dive deep into the world of Honor of Kings with our comprehensive tools and resources. From novice players to seasoned veterans, our platform offers invaluable insights to elevate your gameplay."
      />

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Explore Our Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Lucky Draw Calculator: Optimize your in-game purchases</li>
          <li>Diamond Draw Simulator: Test your luck without spending real money</li>
          <li>Rank Up Calculator: Plan your journey to the top ranks</li>
          <li>Hero Guides: Master your favorite characters with in-depth strategies</li>
          <li>Meta Analysis: Stay updated with the latest game trends and top picks</li>
        </ul>
      </section>

      <AdSlot position="middle" />

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Tools?</h2>
        <p className="mb-4">
          Our tools are designed with the player in mind, offering accuracy, ease of use, and valuable insights. Whether you're preparing for ranked matches, analyzing your performance, or simply looking to improve, we've got you covered.
        </p>
        <p>
          Stay ahead of the competition with real-time updates, community-driven content, and expert analysis. Join thousands of players who have already boosted their gameplay using our resources.
        </p>
      </section>

      <H2Card
        title="Community and Support"
        content="Join our thriving community of Honor of Kings enthusiasts. Share strategies, discuss game updates, and connect with fellow players. Our dedicated support team is always here to assist you with any questions or feedback."
      />

      <AdSlot position="bottom" />

      <p className="mt-8 text-sm text-gray-500">
        Note: This is a fan-made project. All assets and intellectual properties are owned by the developers, publishers, and respective parties of Honor of Kings. We are committed to providing accurate and helpful information while respecting copyright and intellectual property rights.
      </p>
    </div>
  );
};

export default Home;