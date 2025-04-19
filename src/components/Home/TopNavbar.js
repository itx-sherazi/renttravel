// components/TopNavbar.js
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaYoutube, FaTumblr, FaInstagram, FaPinterest, FaTiktok } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLanguage } from 'react-icons/fa';

export default function TopNavbar() {
  return (
    <div className="bg-[#1d1d1d] text-[#d3d3d3] text-sm px-4 py-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap">
        
        {/* Left Side: Phone, Email, Language */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <FaPhoneAlt className="text-xs" />
            <span>+971 52 244 7777</span>
          </div>
          <span>|</span>
          <div className="flex items-center space-x-1">
            <MdEmail className="text-lg" />
            <span>info@bevipl.ae</span>
          </div>
          <span>|</span>
          <div className="flex items-center space-x-1">
            <FaLanguage />
            <span>AR</span>
          </div>
        </div>

        {/* Right Side: Social Icons - hidden on small screens */}
        <div className="hidden sm:flex items-center space-x-4">
          <FaFacebookF />
          <span>|</span>
          <FaTwitter />
          <span>|</span>
          <FaYoutube />
          <span>|</span>
          <FaTumblr />
          <span>|</span>
          <FaInstagram />
          <span>|</span>
          <FaPinterest />
          <span>|</span>
          <FaTiktok />
        </div>
      </div>
    </div>
  );
}
