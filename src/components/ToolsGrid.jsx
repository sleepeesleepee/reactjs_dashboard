import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Clover, Crown, Gem, TrendingUp, Users } from 'lucide-react';

const TOOLS = [
  { id: 1, path: "/", name: "Home", icon: Crown, description: "Main dashboard" },
  { id: 2, path: "/luckydraw", name: "Lucky Draw Calculator", icon: Clover, description: "Mythical skin odds" },
  { id: 3, path: "/diamonddraw", name: "Diamond Draw Calculator", icon: Gem, description: "Han Xin draw odds" },
  { id: 4, path: "/rankup", name: "Rank Up Calculator", icon: TrendingUp, description: "Stars for ranking up" },
  { id: 5, path: "/partners", name: "Partners Project", icon: Users, description: "Share & copy codes" },
];

const ToolsGrid = () => {
  return (
    <div className="w-full bg-white rounded-xl p-4 md:p-6 mt-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-black pb-4">Our Tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {TOOLS.map((tool) => (
          <Link
            key={tool.id}
            to={tool.path}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300 h-full"
          >
            <div className="text-4xl mb-2">
              {React.createElement(tool.icon, { size: 48, color: "black" })}
            </div>
            <span className="text-sm font-bold text-center text-gray-900 mb-1">{tool.name}</span>
            <p className="text-xs text-center text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid;