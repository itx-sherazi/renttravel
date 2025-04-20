// components/SuvRentalSection.jsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Head from "next/head";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { RiSpeedUpLine } from "react-icons/ri";
import { PiGasPumpLight } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";

const SuvRentalSection = () => {
  // Create refs for different elements to animate them separately
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [textRef1, textInView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [textRef2, textInView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [textRef3, textInView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const decorationVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#e8ba30",
      transition: { duration: 0.2 },
    },
  };

  const [ref1, inView1] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    const [ref2, inView2] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    const carData = [
      {
        id: 1,
        name: "Dacia duster",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5e1Wi5hXvd7Ph6FfEugTcDc17laFkMUUH9Q&s",
        seats: "5 Seats",
        transmission: "Auto",
        fuel: "Gasoline",
        date: 2024,
      },
      {
        id: 2,
        name: "Peugeot 3008 ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKtVoAZ6fBxB_A9jqHXoDl1wG1Rmr9p9EPA&s",
        price: "5,499 AED",
        seats: "5 Seats",
        transmission: "Auto",
        fuel: "Gasoline",
        date: 2024,
      },
      {
        id: 3,
        name: "1-Vw Tuareg",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGeKoBW8gpZfwLhEt2dja-tg3ceDXpfO2Eg&s",
        price: "3,999 AED",
        seats: "5 Seats",
        transmission: "Auto",
        fuel: "Gasoline",
        date: 2024,
      },
      {
        id: 4,
        name: "Cupra Formentor",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGWZhcH0gPQ17UtbDhtsbvGBj6zHWXCbIUMw&s",
        price: "3,499 AED",
        seats: "5 Seats",
        transmission: "Auto",
        fuel: "Gasoline",
        date: 2024,
      },
      {
        id: 5,
        name: "Rang rover sport",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN0To33Riq2tn8db-4M7yKtgK3Dn0X_urAA&s",
        price: "2,999 AED",
        seats: "5 Seats",
        transmission: "Auto",
        fuel: "Gasoline",
        date: 2024,
      },
      {
        id: 6,
        name: "KIA shortage",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5OxqW7KsiqaXcrOUqrZ2kc6fNioR9psHMA&s",
        price: "8,999 AED",
        seats: "5 Seats",
        transmission: "Auto",
        fuel: "Gasoline",
        date: 2024,
      },
    ];
  
    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };

  return (
    <>
    <div className="bg-gray-50 py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={headerVariants}
            className="flex flex-col"
          >
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              SUV Rental in Dubai
            </h2>
            <img
            src="https://www.bevip.ae/wp-content/uploads/2022/10/line-600x32-light-gold-768x40.png"
            alt="gold line decoration"
            className="mt-2 w-50 md:w-78 h-3"
      
          />
          </motion.div>

          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            whileHover="hover"
            className="hidden md:block px-6 py-2 bg-yellow-400 rounded-full text-gray-900 font-medium transition"
          >
            View all
          </motion.button>
        </div>

        <div className="space-y-4 md:space-y-2">
          <motion.p
            ref={textRef1}
            initial="hidden"
            animate={textInView1 ? "visible" : "hidden"}
            variants={textVariants}
            className="text-base md:text-sm text-gray-400 leading-relaxed"
          >
            SUV car rental in Dubai is the best choice for people who love
            luxury with space. If you&apos;re travelling with your family or group of
            friends, then the SUV rental in Dubai is the perfect choice for you.
            If you&apos;re going for a long ride or family vacation or a business
            trip, an SUV for rent in Dubai brings versatility and comfort.
          </motion.p>

          <motion.p
            ref={textRef2}
            initial="hidden"
            animate={textInView2 ? "visible" : "hidden"}
            variants={textVariants}
            className="text-base md:text-sm text-gray-400 leading-relaxed"
          >
            BE VIP Rent A Car possesses a great variety in their fleet of SUV
            rentals in Dubai from which you can choose as per your requirement.
          </motion.p>

          <motion.p
            ref={textRef3}
            initial="hidden"
            animate={textInView3 ? "visible" : "hidden"}
            variants={textVariants}
            className="text-base md:text-sm text-gray-400 leading-relaxed"
          >
            BE VIP have top luxury SUV models to economy options, which makes
            the client choose as per their preference and budget. So, book your
            SUV for rent in Dubai today for an unforgettable adventure on
            Dubai&apos;s vibrant streets!
          </motion.p>
        </div>

        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          whileHover="hover"
          className="mt-8 px-6 py-2 bg-yellow-400 rounded-full text-gray-900 font-medium transition block md:hidden mx-auto"
        >
          View all
        </motion.button>
      </div>
      <main>
        
            <div className="max-w-6xl mx-auto mt-10">
              {/* First row of cards */}
              <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
              >
                {carData.slice(0, 3).map((car) => (
                  <LatestCard key={car.id} car={car} variants={cardVariants} />
                ))}
              </motion.div>
    
              {/* Second row of cards */}
              <motion.div
                ref={ref2}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {carData.slice(3, 6).map((car) => (
                  <LatestCard key={car.id} car={car} variants={cardVariants} />
                ))}
              </motion.div>
            </div>
          </main>
    </div>

    
          
       
    </>
  );
};

export default SuvRentalSection;


const LatestCard = ({ car, variants }) => {
    return (
      <motion.div
        variants={variants}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg overflow-hidden shadow-lg"
      >
        {/* Image with zoom effect */}
        <div className="relative h-55  overflow-hidden">
    <div className="w-full h-full transform transition-transform duration-500 hover:scale-110">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-full object-cover"
      />
    </div>
  
  
  
          <div className="absolute top-2 right-2">
            <svg
              className="w-6 h-6 text-[#FFD700]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
        </div>
  
        {/* Car info */}
        <div className="pb-2">
    {/* Car Name Center */}
    <h2 className="text-lg font-bold pt-3 text-center mb-6">{car.name}</h2>
  
    {/* Info Section: 2 columns */}
    <div className="flex pl-10 pr-10 justify-between">
      
      {/* Left Info: Seats & Transmission */}
      <div className="flex flex-col gap-4">
        {/* Seats */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full">
            <IoPersonOutline />
          </div>
          <span className="text-sm">{car.seats}</span>
        </div>
  
        {/* Transmission */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full">
            <RiSpeedUpLine />
          </div>
          <span className="text-sm">{car.transmission}</span>
        </div>
      </div>
  
      {/* Right Info: Luggage & Doors */}
      <div className="flex flex-col gap-4">
        {/* Luggage */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full">
            <PiGasPumpLight />
          </div>
          <span className="text-sm">{car.fuel}</span>
        </div>
  
        {/* Doors */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full">
            <MdDateRange />
          </div>
          <span className="text-sm">{car.date}</span>
        </div>
      </div>
    </div>
  </div>
  
        <hr/> 
  
        <div className="flex mb-3 p-3 gap-3">
    {/* Whatsapp Button */}
    <a href="https://wa.me/212663203366" target="_blank" rel="noopener noreferrer">
      <button className="flex-1 py-2 px-5  text-[10px] bg-green-500 text-white font-sm flex items-center justify-center rounded-full shadow-md hover:bg-green-600 transition">
      <FaWhatsapp  className="mr-1 text-sm"/>
        Whatsapp
      </button>
    </a>
  
    {/* Call Us Button */}
    <a href="tel:+212663203366" target="_blank" rel="noopener noreferrer">
      <button className="flex-1 py-2 px-5 text-[10px] bg-white text-black font-sm flex items-center justify-center rounded-full shadow-md  hover:bg-gray-100 transition">
      <IoCallOutline  className="mr-1 text-sm"/>
        Call Us
      </button>
    </a>
  
    {/* Book Now Button */}
    <button className="flex-1 py-2 text-[10px] bg-yellow-400 text-black font-sm flex items-center justify-center rounded-full shadow-md hover:bg-yellow-500 transition">
      <MdOutlineKeyboardDoubleArrowRight  className="mr-1 text-sm"/>
      Book now
    </button>
  </div>
  
      </motion.div>
    );
  };
