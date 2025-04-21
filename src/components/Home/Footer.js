"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1. Logo + Contact */}
        <div>
          <Link href="/" className=" ">
            <img src="/images/logo.png" alt="Logo" className="w-50 h-20" />
          </Link>
          <div className="space-y-2 text-sm mt-3 ml-7">
            <p className="flex items-center gap-2">
              <MdPhone /> +971 52 244 7777
            </p>
            <p className="flex items-center gap-2">
              <MdPhone /> +971 56 322 2266
            </p>
            <p className="flex items-center gap-2">
              <MdEmail /> info@yourdomain.com
            </p>
            <p className="flex items-center gap-2">
              <MdLocationOn /> Get Directions
            </p>
          </div>
        </div>

        {/* 2. About Us */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <ul className="space-y-2 text-sm">
            <li>Company Overview</li>
            <li>Our Mission</li>
            <li>Why Choose Us</li>
            <li>Testimonials</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* 3. Contact Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>Sports Car Rental</li>
            <li>SUV Car Rental</li>
            <li>Luxury Cars</li>
            <li>Rent a Car Dubai</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* 4. Social + Map */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href="#" className="bg-yellow-400 p-2 rounded text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-yellow-400 p-2 rounded text-white">
              <FaTwitter />
            </a>
            <a href="#" className="bg-yellow-400 p-2 rounded text-white">
              <FaInstagram />
            </a>
            <a href="#" className="bg-yellow-400 p-2 rounded text-white">
              <FaYoutube />
            </a>
            <a href="#" className="bg-yellow-400 p-2 rounded text-white">
              <FaPinterest />
            </a>
            <a href="#" className="bg-yellow-400 p-2 rounded text-white">
              <FaTiktok />
            </a>
          </div>
          <div className="w-full h-40 md:h-48 lg:h-56 rounded overflow-hidden">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.375221249103!2d55.14117947434281!3d25.08557143413956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c86da2da56b%3A0x597781fa0427c1a3!2sBe%20VIP%20Rent%20a%20Car!5e0!3m2!1sen!2sae!4v1713692312345!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
