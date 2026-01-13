import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 md:px-36 text-left w-full mt-20">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-between gap-12 md:gap-16 py-16 border-b border-white/10">
        <div className="flex flex-col md:items-start items-center w-full md:w-auto">
          <img src={assets.logo_dark} alt="Skillify logo" className="h-14 md:h-16 lg:h-20 w-auto mb-6 object-contain" />
          <p className="text-center md:text-left text-sm md:text-base text-white/70 leading-relaxed max-w-sm">
            Empowering learners worldwide with world-class courses. Join thousands of students achieving their goals with Skillify.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full md:w-auto">
          <h2 className="font-bold text-white mb-6 text-lg">Company</h2>
          <ul className="flex flex-col space-y-3 text-sm text-white/70">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:items-start items-center w-full md:w-auto">
          <h2 className="font-bold text-white mb-6 text-lg">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm md:text-base text-white/70 mb-4 text-center md:text-left max-w-xs">
            Get the latest news, articles, and resources sent to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <input
              className="border border-gray-600/50 bg-gray-800/50 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:w-64 w-full h-11 rounded-lg px-4 text-sm transition-all"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center h-11 px-6 text-sm font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-6 text-center text-xs md:text-sm text-white/50">
        © 2025 Skillify. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
