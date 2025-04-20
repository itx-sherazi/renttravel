"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const testimonials = [
 
    
    {
      id: 1,
      name: "Rizwan Ahmed",
      role: "Wedding Planner",
      username: "@rizwan",
      rating: 5,
      image: "https://www.bevip.ae/wp-content/uploads/2024/01/iffi-1.webp",
      text: "I would like to add about BeVip Rent a Car and must prefer outsiders to that Car house. Since, I was looking for a Car to make my journey/trip easy and they made it very easy and enjoyable for me. They have excellent conditioned vehicles with nominal rent prices and most importantly their staff is very kind, guiding and polite who helped me a lot through their friendly gesture.",
    },
    {
      id: 2,
      name: "Laraib Hussain",
      role: "IT Consultant",
      username: "@laraib",
      rating: 5,
      image: "https://www.bevip.ae/wp-content/uploads/2024/01/iffi-1.webp",
      text: "I would like to add about BeVip Rent a Car and must prefer outsiders to that Car house. Since, I was looking for a Car to make my journey/trip easy and they made it very easy and enjoyable for me. They have excellent conditioned vehicles with nominal rent prices and most importantly their staff is very kind, guiding and polite who helped me a lot through their friendly gesture.",
    },
    {
      id: 3,
      name: "MUHAMMAD MOAVIA",
      username: "@MOAVIA",
      rating: 5,
      image: "https://www.bevip.ae/wp-content/uploads/2024/01/moavia-1-1.webp",
      text: `I would like to add about BeVip Rent a Car and must prefer outsiders to that Car house. Since, I was looking for a Car to make my journey/trip easy and they made it very easy and enjoyable for me. They have excellent conditioned vehicles with nominal rent prices and most importantly their staff is very kind, guiding and polite who helped me a lot through their friendly gesture.`,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute left-4 top-[40%] -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 md:-left-12 md:text-gray-700 text-white"
    >
      <ChevronLeft size={36} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute right-4 top-[40%] -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 md:-right-12 md:text-gray-700 text-white"
    >
      <ChevronRight size={36} />
    </button>
  );

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
        <div className="flex justify-center">
          <img
            src="https://www.bevip.ae/wp-content/uploads/2022/10/line-big-light-gold.png"
            alt="Decorative line"
            width={300}
            height={20}
            className="h-4 object-contain"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2">
                <div className="bg-white p-6 rounded-xl shadow border border-gray-200 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image || "/default-user.jpg"}
                        
                        alt={testimonial.name}
                        className="rounded-full w-10 h-10 object-cover"
                      />
                      <div>
                        <p className="font-bold text-gray-900">
                          {testimonial.name}
                        </p>
                        <div className="text-yellow-500 text-sm">
                          {"★".repeat(testimonial.rating || 5)}
                        </div>
                        <p className="text-gray-500 text-sm">
                          {testimonial.username || testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 4800 4800"
                        className="w-full h-full"
                      >
                        <g opacity=".2" fill="#808285">
                          <path d="M4219.03 2537.81c0-132.1-11.19-258.61-30.23-381.75H2284.5v782.54h1094.9c-52.62 240.7-191.44 445.57-397.43 585.51l252.05 197.34 384.95 296.37c379.52-349.29 600.06-866.51 600.06-1480.01zm-3076.42 348.18c-42.54-124.27-66.05-256.37-66.05-394.07s23.51-269.8 66.05-394.07L852.5 1872.97l-367.05-284.51c-136.58 272.04-216.07 577.67-216.07 903.45s79.48 631.41 216.07 903.45l657.16-509.37z"></path>
                          <path d="M2284.51 1260.45c300.03 0 569.83 103 782.54 305.63v1.12l565.36-565.35C3283.12 676.07 2828.6 476.8 2284.51 476.8c-787.02 0-1467.68 452.28-1799.06 1111.68l657.16 509.38c162.33-481.4 612.37-837.41 1141.9-837.41z"></path>
                        </g>
                        <path
                          d="M4329.26 2476.22c0-132.1-11.19-258.61-30.23-381.75h-1904.3v782.54h1094.89c-52.62 240.7-191.44 445.57-397.43 585.51l252.05 197.34 384.95 296.37c379.52-349.29 600.07-866.51 600.07-1480.01z"
                          fill="#4285f4"
                        ></path>
                        <path
                          d="M2394.74 4445.45c544.08 0 999.73-180.24 1333.34-488.11l-637-493.71c-182.48 124.27-418.7 198.15-696.34 198.15-529.53 0-979.58-356.01-1141.91-837.4l-283.75 219.95-373.4 289.43c331.37 659.41 1012.04 1111.69 1799.06 1111.69z"
                          fill="#34a853"
                        ></path>
                        <path
                          d="M1252.83 2824.4c-42.54-124.27-66.05-256.37-66.05-394.07s23.51-269.8 66.05-394.07l-290.11-224.87-367.05-284.51c-136.58 272.04-216.07 577.67-216.07 903.45s79.48 631.41 216.07 903.45l657.16-509.38z"
                          fill="#fbbc05"
                        ></path>
                        <path
                          d="M2394.74 1198.86c300.03 0 569.83 103 782.54 305.63v1.12l565.36-565.35c-349.29-325.78-803.81-525.05-1347.9-525.05-787.02 0-1467.68 452.28-1799.06 1111.68l657.16 509.38c162.32-481.41 612.36-837.41 1141.9-837.41z"
                          fill="#ea4335"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </Slider>

          <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
