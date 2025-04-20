"use client";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { RiSpeedUpLine } from "react-icons/ri";
import { PiGasPumpLight } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
export default function HomeLatest() {
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
      name: "citadine renault clio 5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWsymsDSLtwosA-s_L2Ta443jdO4IJenR3Q&s",
      seats: "5 Seats",
      transmission: "Auto",
      fuel: "Gasoline",
      date: 2024,
    },
    {
      id: 2,
      name: "Peugeot 208",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGzMFfU8AANo3XEKcSyMsmfzhLdRolWNP5g&s",
      price: "5,499 AED",
      seats: "5 Seats",
      transmission: "Auto",
      fuel: "Gasoline",
      date: 2024,
    },
    {
      id: 3,
      name: " Opel Corse",
      image:
        "https://feassets.bymycar.fr/vn/2/104108/0/opel-corsa-electrique-136-ch---batterie-50-kwh-neuf-2025-annecy.jpg",
      price: "3,999 AED",
      seats: "5 Seats",
      transmission: "Auto",
      fuel: "Gasoline",
      date: 2024,
    },
    {
      id: 4,
      name: "Seat Ibiza FR",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVB5U_ODKM2sXQDasMf5tFDkUad8lZnvhfrw&s",
      price: "3,499 AED",
      seats: "5 Seats",
      transmission: "Auto",
      fuel: "Gasoline",
      date: 2024,
    },
    {
      id: 5,
      name: "Skoda Scala",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYR_6an6Qneg3hKKxvQ4JPzyxsa0q62Bm4w&s",
      price: "2,999 AED",
      seats: "5 Seats",
      transmission: "Auto",
      fuel: "Gasoline",
      date: 2024,
    },
    {
      id: 6,
      name: "MG MG3",
      image:
        "https://resource.digitaldealer.com.au/image/163132090667ef700ed83ee500411468_0_0-c.jpg",
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
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Citadine Car Rentals</title>
        <meta name="description" content="Luxury Car Rentals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold text-center mb-10">
        Citadine Car Rentals
        </h1>

        <div className="max-w-6xl mx-auto">
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
  );
}

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
