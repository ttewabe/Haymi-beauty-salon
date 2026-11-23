import React from 'react';
import Images from './Image';
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';
import { contactInfo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="!py-8 border-b border-gray-700">
        <div className="max-w-full mx-auto !px-4 w-full flex flex-col md:flex-row items-center justify-evenly gap-8">
          <div className="flex flex-col items-center text-center">
            <img src={Images.mobileLogo} alt="logo" className="h-10 md:h-12 !mb-4 opacity-80" />
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://www.facebook.com/haymanot.d.terefe/"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaFacebookF className="text-white text-base hover:text-blue-500" />
              </a>
              <a
                href="https://www.instagram.com/haymitewa/"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaInstagram className="text-white text-base hover:text-red-500" />
              </a>
              <a
                href="https://t.me/haymitewa"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaTelegram className="text-white text-base hover:text-blue-500" />
              </a>
              <a
                href="https://www.tiktok.com/@haymi5048?_t=ZT-90c7SidD2bn&_r=1"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FaTiktok className="text-white text-base hover:text-black" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-xl text-amber-400 font-bold !mb-3">CONTACT DETAILS</h2>

            <div className="space-y-2 text-gray-400 font-bold text-sm">
              <p>Phone: {contactInfo.phone}</p>
              <p>Email: {contactInfo.email}</p>
              <p>Address: {contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center !py-4">
        © {new Date().getFullYear()} Haymi Beauty Lounge. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
