import React from 'react';
import LuckyDrawCalculator from '../components/LuckyDrawCalculator';
import BlogPost from "../components/BlogPost";
import CostTable from "../components/CostTable";
import FAQ from "../components/FAQ";

const LuckyDraw = () => {
  const faqQuestions = [
    {
      question: "How is 'luck' accumulated in Honor of Kings?",
      answer: "Luck is accumulated by participating in lucky draws. Each draw typically adds a set amount of luck to your total."
    },
    {
      question: "What happens if I reach the luck threshold?",
      answer: "Once you reach the required luck threshold (typically 360), you're guaranteed to receive a mythical skin."
    },
    {
      question: "Can I use tokens or honor points for anything else?",
      answer: "Yes, tokens and honor points can be used for various in-game purchases, but they are also essential for participating in lucky draws."
    },
    {
      question: "How can I reduce the cost of getting a mythical skin?",
      answer: "The best way to reduce the cost is to participate in events or promotions that increase the amount of luck per draw or offer discounts on the number of tokens required."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fullscreen LuckyDrawCalculator Component */}
      <div className="w-full">
        <LuckyDrawCalculator />
      </div>

      {/* Content Section with Padding */}
      <div className="bg-white shadow-lg rounded-lg max-w-full p-4 sm:p-6 lg:p-8">
        {/* BlogPost Component */}
        <BlogPost
          title="How Many Draws Does It Take to Get a Mythical Skin in Honor of Kings?"
          author="Game Analyst"
          date="2024-08-11"
          content={[
            "Obtaining a mythical skin in Honor of Kings is a goal for many players, but it can be a challenge to understand exactly how many draws you need and the cost involved. In this post, we'll break down the calculation so you know exactly what to expect when aiming for that rare skin.",
            "Understanding Luck and Draws: In Honor of Kings, each time you participate in a lucky draw, you accumulate a certain amount of 'luck.' The goal is to reach a specific luck threshold (typically 360) to guarantee the acquisition of a mythical skin. Each draw contributes to this luck, and our calculator helps you estimate the number of draws and the associated costs needed to reach your goal.",
            "Calculation Breakdown: The calculation is based on the following parameters:\n• Luck Needed: 360\n• Luck per Draw: 5\n• Honor Points per Draw: 60\n• Tokens per Draw: 60",
            "Based on these parameters, the formula to calculate the number of draws required is:\nDraws Needed = ⌈(Luck Needed - Current Luck) / Luck per Draw⌉",
          ]}
        />

        {/* Cost Table Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Cost Table</h2>
        <div className="overflow-x-auto">
          <CostTable />
        </div>
        <p className="mt-4 mb-8 text-black">
          Use our Lucky Draw Calculator to input your current luck and see exactly how much more you
          need to invest to get that mythical skin!
        </p>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Frequently Asked Questions</h2>
        <FAQ questions={faqQuestions} />
      </div>
    </div>
  );
}

export default LuckyDraw;