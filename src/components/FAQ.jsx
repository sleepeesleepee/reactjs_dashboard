import React from 'react';

const FAQ = ({ questions }) => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2 sm:space-y-4 bg-white rounded-xl p-2 sm:p-4 shadow-md">
      {questions.map((q, index) => (
        <div key={index} className="border-b border-gray-200 pb-2 sm:pb-4">
          <button
            className="flex justify-between items-center w-full text-left font-semibold text-gray-700 text-sm sm:text-base"
            onClick={() => toggleFAQ(index)}
          >
            <span className="pr-2">{q.question}</span>
            <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600 text-xs sm:text-sm">{q.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;