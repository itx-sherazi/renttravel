"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How expensive is it to rent a luxury car in Dubai?",
      answer:
        "The cost of luxury car Dubai is totally dependent on the brand and duration for which you're renting the luxury car. The cost of per day rental for the cars starts from AED 300 and goes up to AED 10000.",
    },
    {
      question:
        "Where can you book the best luxury car rental service in Dubai?",
      answer:
        "You can book luxury car rentals through reputable companies like Hertz Prestige, Dubai Luxury Cars, or One Click Drive. Many high-end hotels also offer luxury car rental services. Online booking platforms like RentalCars.com and Expedia also provide options for luxury vehicles in Dubai.",
    },
    {
      question:
        "Can I rent a luxury car in Dubai if I'm on a visit visa? If yes, what documents do I need to rent a luxury car in Dubai?",
      answer:
        "Yes, you can rent a luxury car on a visit visa. You'll need your passport, valid visit visa, a valid driving license from your home country or an International Driving Permit, and a credit card for security deposit. Some rental companies may require your license to be at least one year old.",
    },
    {
      question: "Is it possible to rent a luxury car for a day in Dubai?",
      answer:
        "Yes, most luxury car rental companies in Dubai offer daily rental options. This is actually a popular choice for tourists or residents who want to experience driving a high-end vehicle for a special occasion without committing to longer rental periods.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h1>
      <div className="relative flex justify-center mb-10">
        <img
          src="https://www.bevip.ae/wp-content/uploads/2022/10/line-big-light-gold.png"
          alt=""
          className="w-90 h-3"
        />
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-900 text-white">
                {openIndex === index ? <TiMinus /> : <FaPlus />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 p-5" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
