import React from 'react';
import PartnerProject from '../components/PartnerProject';
import BlogPost from "../components/BlogPost";
import CostTable from "../components/CostTableP";
import FAQ from "../components/FAQ";

const Partners = () => {
  const faqQuestions = [
    {
      question: "What are partner projects in Honor of Kings?",
      answer: "Partner projects in Honor of Kings are collaborations with other brands, games, or media franchises. These often result in special events, unique skins, or limited-time game modes that blend elements from both Honor of Kings and the partner."
    },
    {
      question: "How long do partner events typically last?",
      answer: "The duration of partner events can vary, but they usually last between two to four weeks. Some major collaborations might extend longer or have multiple phases."
    },
    {
      question: "Are partner skins available after the event ends?",
      answer: "In most cases, partner skins are exclusive to their respective events and are not available for purchase afterwards. However, some popular collaborations might see a re-run in the future."
    },
    {
      question: "How can I participate in partner events?",
      answer: "Participation methods vary by event. Some might require you to complete specific in-game tasks, while others might involve special draws or direct purchases. Always check the event details for specific participation instructions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fullscreen PartnerProject Component */}
      <div className="w-full">
        <PartnerProject />
      </div>
      {/* Content Section with Padding */}
      <div className="bg-white shadow-lg rounded-lg max-w-full p-4 sm:p-6 lg:p-8">
        {/* BlogPost Component */}
        <BlogPost
          title="The Impact of Partnerships in Honor of Kings"
          author="Gaming Industry Analyst"
          date="2024-08-17"
          content={[
            "Partnerships have become an integral part of the gaming industry, and Honor of Kings is at the forefront of this trend. These collaborations bring fresh content, exciting crossovers, and unique experiences to players, enhancing the overall gaming experience.",
            "Types of Partnerships:\n• Gaming Crossovers: Collaborations with other popular games, bringing characters or elements into Honor of Kings.\n• Media Franchises: Partnerships with movies, TV shows, or anime series, often resulting in themed skins or events.\n• Real-world Brands: Collaborations with fashion brands, sports teams, or other companies, creating unique in-game items or events.\n• Celebrities and Influencers: Partnerships that bring real-world personalities into the game, either as playable characters or through special events.",
            "Impact on the Game: These partnerships not only provide exciting new content for players but also help in expanding the game's audience. They can introduce Honor of Kings to fans of the partner brand and vice versa, contributing to the game's growth and cultural relevance.",
            "Our Partner Project calculator aims to help players navigate these special events by providing insights into the potential costs and rewards associated with partnership-related content. By understanding the value proposition of these limited-time offers, players can make informed decisions about their in-game investments."
          ]}
        />
        {/* Cost Table Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Partner Event Cost Estimates</h2>
        <div className="overflow-x-auto">
          <CostTable />
        </div>
        <p className="mt-4 mb-8 text-black">
          Use our Partner Project Calculator to estimate the costs and rewards of participating in special partner events!
        </p>
        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4 text-black">Frequently Asked Questions</h2>
        <FAQ questions={faqQuestions} />
      </div>
    </div>
  );
}

export default Partners;