import React from "react";

export default function CarRentalOffers() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
        Latest Car Rental Offers In Dubai
      </h1>

      {/* Gold line image */}
      <div className="flex justify-center mb-4">
        <img
          src="https://www.bevip.ae/wp-content/uploads/2022/10/line-big-light-gold.png"
          alt="Decorative gold line"
   
          className="h-1 md:h-3 w-auto"
        />
      </div>

      {/* Description text */}
      <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
        BE VIP is the best place to rent luxury cars in Dubai. Prices start at
        1000 AED per day. Choose from our big selection of new sports and luxury
        cars. We have Ferrari, Lamborghini, Bentley, Mercedes, Porsche, Rolls
        Royce, and BMW. Enjoy driving in Dubai with our 24/7 delivery service
        and competitive prices. Book your luxury car rental in Dubai today!
      </p>
    </div>
  );
}
