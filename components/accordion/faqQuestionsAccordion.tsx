"use client";

import React, { useState } from "react";
import { faqQuestionsData } from "./data/faqData";
import { HiChevronDown } from "react-icons/hi";

const FaqQuestionsAccordion: React.FC = () => {
  const [activeQuestions, setActiveQuestions] = useState<number[]>([]);

  const handleClick = (questionId: number) => {
    if (activeQuestions.includes(questionId)) {
      setActiveQuestions(activeQuestions.filter((id) => id !== questionId));
    } else {
      setActiveQuestions([...activeQuestions, questionId]);
    }
  };

  return (
    <div className="mx-5 mt-16 lg:mx-48 ">
      {faqQuestionsData?.map((item) => (
        <div key={item.id}>
          <div
            onClick={() => handleClick(item.id)}
            className="flex justify-between items-center space-x-5 cursor-pointer "
          >
            <p className="font-bold text-xs sm:text-sm">{item.question}</p>
            <HiChevronDown
              className={`text-sm sm:text-xl ${
                activeQuestions.includes(item.id) && "rotate-180"
              }`}
            />
          </div>
          {activeQuestions.includes(item.id) && (
            <p className="pt-5 text-gray-700 leading-loose text-xs sm:text-sm">
              {item.response}
            </p>
          )}
          <div className="border w-full my-5"></div>
        </div>
      ))}
    </div>
  );
};

export default FaqQuestionsAccordion;
