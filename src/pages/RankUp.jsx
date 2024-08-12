import React from 'react';
import RankUpCalculator from '../components/RankUpCalculator';
import BlogPost from "../components/BlogPost";
import CostTable from "../components/CostTableR";
import FAQ from "../components/FAQ";

const RankUp = () => {
  const faqQuestions = [
    {
      question: "How does the ranking system work in Honor of Kings?",
      answer: "The ranking system in Honor of Kings is tiered, with players progressing through various ranks based on their performance in ranked matches. Winning games earns you stars, while losing deducts them. Accumulating enough stars promotes you to the next rank."
    },
    {
      question: "What factors affect my rank progression?",
      answer: "Your rank progression is primarily affected by your win/loss ratio in ranked matches. Individual performance, MVP status, and win streaks can also influence the rate of progression."
    },
    {
      question: "Are there rank protection mechanisms?",
      answer: "Yes, Honor of Kings implements rank protection at certain tiers to prevent immediate demotion after reaching a new rank. This gives players a chance to stabilize at their new rank."
    },
    {
      question: "How often does the ranked season reset?",
      answer: "Ranked seasons in Honor of Kings typically last for several months. At the end of each season, players' ranks are partially reset based on their final rank, allowing for a fresh start in the new season."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fullscreen RankUpCalculator Component */}
      <div className="w-full">
        <RankUpCalculator />
      </div>
      {/* Content Section with Padding */}
      <div className="bg-white shadow-lg rounded-lg max-w-full p-4 sm:p-6 lg:p-8">
        {/* BlogPost Component */}
        <BlogPost
          title="Mastering the Rank Up System in Honor of Kings"
          author="eSports Coach"
          date="2024-08-16"
          content={[
            "Ranking up in Honor of Kings is a key goal for many players, representing their skill level and progress in the game. The ranking system is designed to be both challenging and rewarding, pushing players to improve their gameplay continuously.",
            "Understanding the System: Players progress through various ranks by winning matches and earning stars. Each rank is divided into tiers, and players must accumulate a certain number of stars to advance to the next tier or rank. Losing matches results in star deduction, with some ranks offering protection against immediate demotion.",
            "Key Factors for Ranking Up:\n• Consistency: Maintain a positive win rate over time.\n• Hero Mastery: Focus on mastering a few heroes rather than playing many at an average level.\n• Team Coordination: Effective communication and teamwork significantly impact your chances of winning.\n• Meta Awareness: Stay updated with the current meta and adapt your playstyle accordingly.\n• Mindset: Maintain a positive attitude, learn from losses, and focus on personal improvement.",
            "Our Rank Up Calculator helps estimate the number of games needed to reach your desired rank based on your current rank and win rate. Remember, while the calculator provides estimates, actual results may vary based on individual performance and the matchmaking system."
          ]}
        />
        {/* Cost Table Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Rank Progression Table</h2>
        <div className="overflow-x-auto">
          <CostTable />
        </div>
        <p className="mt-4 mb-8 text-black">
          Use our Rank Up Calculator to estimate the number of games needed to reach your desired rank!
        </p>
        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Frequently Asked Questions</h2>
        <FAQ questions={faqQuestions} />
      </div>
    </div>
  );
}

export default RankUp;