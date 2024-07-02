import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fourthpart">
      <p className="p1">Frequently asked questions</p>
      <div className="layout bg-black text-white w-full">
        {faqData.map((faq, index) => (
          <div
            className={`accordion ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion__question bg-transparent">
              <p>{faq.question}</p>
            </div>
            {activeIndex === index && (
              <div className="accordion__answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [];

export default FAQ;
