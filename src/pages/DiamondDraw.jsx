import React from 'react';
import DiamondDrawCalculator from '../components/DiamondDrawCalculator';
import BlogPost from "../components/BlogPost";
import CostTable from "../components/CostTableD";
import FAQ from "../components/FAQ";

const DiamondDraw = () => {
  const faqQuestions = [
    {
      question: "How does the Diamond Draw system work in Honor of Kings?",
      answer: "The Diamond Draw system allows players to spend diamonds for a chance to win rare skins and items. Each draw costs a set amount of diamonds, and there's often a pity system that guarantees a high-tier reward after a certain number of draws."
    },
    {
      question: "Are the odds of getting a rare item the same for each draw?",
      answer: "The odds may vary depending on the specific event or draw. Some events have increasing odds with each draw, while others maintain consistent probabilities. Always check the event details for specific odds."
    },
    {
      question: "Can I get duplicate items from Diamond Draws?",
      answer: "Yes, it's possible to get duplicate items. Some events offer a system to exchange duplicates for other rewards or currency."
    },
    {
      question: "How often do new Diamond Draw events occur?",
      answer: "New Diamond Draw events typically occur with major updates or special in-game events. The frequency can vary, but there's usually at least one active at any given time."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fullscreen DiamondDrawCalculator Component */}
      <div className="w-full">
        <DiamondDrawCalculator />
      </div>
      {/* Content Section with Padding */}
      <div className="bg-white shadow-lg rounded-lg max-w-full p-4 sm:p-6 lg:p-8">
        {/* BlogPost Component */}
        <BlogPost
          title="Understanding the Diamond Draw System in Honor of Kings"
          author="Game Analyst"
          date="2024-08-15"
          content={[
            "The Diamond Draw system in Honor of Kings is a premium feature that allows players to obtain rare skins and valuable items using the game's premium currency, diamonds. Unlike the Lucky Draw, Diamond Draws often offer more exclusive rewards but at a higher cost.",
            "How it Works: Each Diamond Draw costs a set amount of diamonds. Players have a chance to win various rewards, with rarer items having lower probabilities. Many Diamond Draw events include a pity system, guaranteeing a high-tier reward after a certain number of draws.",
            "Strategy Considerations:\n• Budget: Determine how many diamonds you're willing to spend before participating.\n• Event Duration: Consider if you have enough time to accumulate the necessary diamonds.\n• Reward Value: Evaluate if the potential rewards are worth the diamond investment.\n• Pity System: Understand how the pity system works for the specific event.",
            "Our Diamond Draw Calculator helps you estimate the potential cost and number of draws needed to obtain desired items. Remember, while these draws can be exciting, it's important to participate responsibly and within your means."
          ]}
        />
        {/* Cost Table Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Diamond Cost Table</h2>
        <div className="overflow-x-auto">
          <CostTable />
        </div>
        <p className="mt-4 mb-8 text-black">
          Use our Diamond Draw Calculator to estimate the number of draws and diamonds needed to get your desired rewards!
        </p>
        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Frequently Asked Questions</h2>
        <FAQ questions={faqQuestions} />
      </div>
    </div>
  );
}

export default DiamondDraw;