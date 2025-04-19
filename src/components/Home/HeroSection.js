'use client';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://bestdubai.b-cdn.net/wp-content/uploads/2024/01/353059932_603761208520663_4059074096190015500_n1.webp')" }}
    >
      {/* Black Top Shadow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/70 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">LUXURY CAR RENTAL DUBAI</h1>
        <p className="text-sm md:text-lg mb-6">
          Looking to rent a luxury car in Dubai? BE VIP is the ultimate luxury car rental Dubai offering you a wide selection of high-end cars for rent.
        </p>

        <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full text-sm md:text-base hover:bg-yellow-500 transition mb-4">
          Rent a car 
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline" viewBox="0 0 320 512">
          <path fill="currentColor" d="M160 256L32 384c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l144-144c9.4-9.4 9.4-24.6 0-33.9L65.9 95.9c-9.4-9.4-24.6-9.4-33.9 0S22.6 120.5 32 130.9l128 125.1zM288 256L160 384c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l144-144c9.4-9.4 9.4-24.6 0-33.9L193.9 95.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L288 256z"/>
        </svg>
        </button>
      </div>
    </section>
  );
}
