import React from "react";
import HeaderCard from "../components/HeaderCard";
import H2Card from "../components/H2Card";
import ToolsGrid from "../components/ToolsGrid";
import AdSlot from "../components/AdSlot";

const Container = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-4 md:p-6 my-8">
    {children}
  </div>
);

const Home = () => {
  return (
    <div className="p-5 max-w-7xl mx-auto">
      <Container>
        <HeaderCard
          title="Honor Of Kings Tools"
          subtitle="Welcome to the ultimate resource hub for Honor of Kings players! Our suite of tools is designed to enhance your gameplay experience, offering everything you need to strategize, improve, and enjoy the game even more."
        />
      </Container>

      <Container>
        <ToolsGrid />
      </Container>

      <AdSlot position="top" />

      <Container>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-black pb-4">What is Honor of Kings?</h2>
        <div className="mt-1 text-base text-black-500 dark:text-black-400">
          <p className="mb-4">
            Honor of Kings, also known as Arena of Valor in some regions, is a highly competitive MOBA game that requires strategy, skill, and in-depth knowledge. Our tools are designed to help you navigate the complexities of the game, from hero selection and item builds to understanding the meta and improving your overall performance.
          </p>
          <p>
            Whether you're looking to climb the ranked ladder, master a new hero, or simply understand the game better, our resources are here to support your journey. With regular updates reflecting the latest game changes and meta shifts, you'll always have access to the most current and relevant information to stay ahead of the competition.
          </p>
        </div>
      </Container>

      <Container>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-black pb-4">Explore Our Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-base text-black-500 dark:text-black-400">
          <li>Lucky Draw Calculator: Optimize your in-game purchases</li>
          <li>Diamond Draw Simulator: Test your luck without spending real money</li>
          <li>Rank Up Calculator: Plan your journey to the top ranks</li>
          <li>Hero Guides: Master your favorite characters with in-depth strategies</li>
          <li>Meta Analysis: Stay updated with the latest game trends and top picks</li>
        </ul>
      </Container>

      <AdSlot position="middle" />

      <Container>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-black pb-4">Why Choose Our Tools?</h2>
        <div className="text-base text-black-500 dark:text-black-400">
          <p className="mb-4">
            Our tools are designed with the player in mind, offering accuracy, ease of use, and valuable insights. Whether you're preparing for ranked matches, analyzing your performance, or simply looking to improve, we've got you covered.
          </p>
          <p>
            Stay ahead of the competition with real-time updates, community-driven content, and expert analysis. Join thousands of players who have already boosted their gameplay using our resources.
          </p>
        </div>
      </Container>

      <Container>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-black pb-4">Community & Support</h2>
        <div className="mt-6 text-base text-black-500 dark:text-black-400">
          <p className="font-semibold mb-2">Official Honor of Kings Resources:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <a href="https://www.honorofkings.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Honor of Kings Official Website
              </a>
            </li>
            <li>
              <a href="https://twitter.com/HonorOfKings" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Honor of Kings Twitter
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/HonorOfKings" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                Honor of Kings Facebook
              </a>
            </li>
          </ul>
          <p className="font-semibold mb-2">Dev:</p>
          <p>
            For inquiries, suggestions, or support, you can reach out to the developer of this site on Twitter:
            <a href="https://twitter.com/rsyx0" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
              @rsyx0
            </a>
          </p>
        </div>
      </Container>

      <AdSlot position="bottom" />

      <Container>
        <p className="text-sm text-black-500 dark:text-black-400">
          Note: This is a fan-made project. All assets and intellectual properties are owned by the developers, publishers, and respective parties of Honor of Kings. We are committed to providing accurate and helpful information while respecting copyright and intellectual property rights.
        </p>
      </Container>
    </div>
  );
};

export default Home;