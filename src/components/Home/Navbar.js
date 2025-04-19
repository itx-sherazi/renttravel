"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, User } from "lucide-react";

const NavItem = ({ title, href, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (items.length > 0) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (items.length > 0) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className="px-4 py-2 text-gray-800 hover:text-amber-600 font-medium flex items-center gap-1"
      >
        {title}
        {items.length > 0 && <ChevronDown size={16} />}
      </Link>

      {items.length > 0 && title === "Car Brands" && (
   <div
  className={`absolute left-1/2 transform -translate-x-1/2 mt-[21px] w-[600px] bg-white shadow-2xl rounded-lg z-50 transition-all duration-200 ${
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  } p-4`}
>
  <div className="grid grid-cols-4 gap-4">
    {items.map((item, index) => (
      <Link
        key={index}
        href={item.href}
        className="block text-center hover:scale-105 transition-transform"
      >
        <div className="relative flex flex-col items-center group">
          {/* Logo as-is */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 group-hover:bg-white">
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Title hidden by default, smooth show on hover */}
          <p className="text-sm text-gray-700 mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {item.title}
          </p>
        </div>
      </Link>
    ))}
  </div>
</div>

      )}

      {items.length > 0 && title !== "Car Brands" && (
        <div
          className={`absolute left-0 w-[180px] bg-white shadow-2xl border-gray-300 rounded-b-md z-50 transition-all duration-200 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="py-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-gray-800 hover:bg-amber-100"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileNavItem = ({ title, href, items = [], isOpen, toggleOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full">
      {items.length > 0 ? (
        <>
          <button
            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-800 hover:bg-amber-100"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{title}</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`pl-4 transition-all duration-200 ${
              isDropdownOpen ? "max-h-96" : "max-h-0 overflow-hidden"
            }`}
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-gray-800 hover:bg-amber-100"
                onClick={toggleOpen}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <Link
          href={href}
          className="block px-4 py-3 text-gray-800 hover:bg-amber-100"
          onClick={toggleOpen}
        >
          {title}
        </Link>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  // const navItems = [
  //   { title: "Home", href: "/" },
  //   {
  //     title: "About",
  //     href: "/about",
  //     items: [
  //       { title: "Our Offers", href: "/about/story" },
  //       { title: "MemberShips", href: "/about/team" },
  //       { title: "Accepted DL in UAE", href: "/about/testimonials" },
  //     ],
  //   },
  //   {
  //     title: "Our Fleet",
  //     href: "/fleet",
  //     items: [
  //       { title: "Luxury Car Rental", href: "/fleet/sedans" },
  //       { title: "Sports Car Rental Dubai", href: "/fleet/suvs" },
  //       { title: "SUV Car Rental", href: "/fleet/sports" },
  //       { title: "Economy Car Rental", href: "/fleet/sports" },
  //     ],
  //   },
  //   {
  //     title: "Car Brands",
  //     href: "/brands",
  //     items: [
  //       {
  //         title: "BMW",
  //         href: "/brands/bmw",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/01/Audi-car-rental-in-dubai-1-e1728645388558.webp",
  //       },
  //       {
  //         title: "Audi",
  //         href: "/brands/audi",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/10/Bentley-car-rental-in-dubai-e1728651358316.webp",
  //       },
  //       {
  //         title: "Ferrari",
  //         href: "/brands/ferrari",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/10/BMW-car-rental-in-dubai-e1728651389538.webp",
  //       },
  //       {
  //         title: "Mercedes",
  //         href: "/brands/mercedes",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/10/BMW-car-rental-in-dubai-e1728651389538.webp",
  //       },
  //       {
  //         title: "Lamborghini",
  //         href: "/brands/lamborghini",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/10/BMW-car-rental-in-dubai-e1728651389538.webp",
  //       },
  //       {
  //         title: "Porsche",
  //         href: "/brands/porsche",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/10/CHEVROLET-car-rental-in-dubai-e1728651451862.webp",
  //       },
  //       {
  //         title: "Rolls Royce",
  //         href: "/brands/rolls",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/10/BMW-car-rental-in-dubai-e1728651389538.webp",
  //       },
  //       {
  //         title: "Bentley",
  //         href: "/brands/bentley",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/10/Ferrari-car-rental-in-dubai-e1728651470999.webp",
  //       },
  //       {
  //         title: "Nissan",
  //         href: "/brands/nissan",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/10/Ferrari-car-rental-in-dubai-e1728651470999.webp",
  //       },
  //       {
  //         title: "Kia",
  //         href: "/brands/kia",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/10/GMC-car-rental-in-dubai-e1728651526713.webp",
  //       },
  //       {
  //         title: "Toyota",
  //         href: "/brands/toyota",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/10/hundai-e1728651545982.webp",
  //       },
  //       {
  //         title: "Mazda",
  //         href: "/brands/mazda",
  //         image:
  //           "https://www.bevip.ae/wp-content/uploads/2024/09/Jaguar-car-rental-in-dubai-e1728651568774.webp",
  //       },
  //     ],
  //   },

  //   {
  //     title: "Our Services",
  //     href: "/services",
  //     items: [
  //       { title: "Mercedes", href: "/brands/mercedes" },
  //       { title: "BMW", href: "/brands/bmw" },
  //       { title: "Ferrari", href: "/brands/ferrari" },
  //     ],
  //   },
  //   { title: "Contact", href: "/contact" },
  // ];
  const navItems = [
    { title: "Home", href: "/" },
    {
      title: "About",
      href: "/about",
      items: [
        { title: "Our Offers", href: "/about/story" },
        { title: "MemberShips", href: "/about/team" },
        { title: "Accepted DL in UAE", href: "/about/testimonials" },
      ],
    },
    { title: "Cars", href: "/cars" },
    { title: "Scooters", href: "/scooters" },
    { title: "Apartments", href: "/apartments" },
    {
      title: "Our Services",
      href: "/services",
      items: [
        { title: "Mercedes", href: "/brands/mercedes" },
        { title: "BMW", href: "/brands/bmw" },
        { title: "Ferrari", href: "/brands/ferrari" },
      ],
    },
    { title: "Contact", href: "/contact" },
  ];
  
  
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="flex-shrink-0 lg:mr-8 sm:mx-auto lg:mx-0">
          <Link href="/" className="flex items-center">
            <div className="h-12 w-24 relative group">
              <div className="flex items-center justify-center">
                <img
                  className="w-30 h-10"
                  src="https://bevip.ae/wp-content/uploads/2022/05/VIP-LOGO-NEWupdate.webp"
                  alt="logo"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              title={item.title}
              href={item.href}
              items={item.items || []}
            />
          ))}
        </div>

        {/* Profile Icon */}
        <div className="flex-shrink-0">
          <button
            className="p-2 text-gray-800 shadow-md bg-white rounded-3xl hover:text-amber-600 focus:outline-none"
            aria-label="User profile"
          >
            <User size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile sidebar content */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-semibold text-lg">Menu</span>
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto h-full py-4">
          {navItems.map((item, index) => (
            <MobileNavItem
              key={index}
              title={item.title}
              href={item.href}
              items={item.items || []}
              isOpen={isOpen}
              toggleOpen={toggleMenu}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;