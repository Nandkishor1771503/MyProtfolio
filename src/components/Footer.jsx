import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* About */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Sunny NK</h2>
            <p className="mt-2 text-gray-400 max-w-xs">
              Frontend Developer | React.js | Tailwind CSS | GSAP Animations
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="tel:+918143366416"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-2">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              
              
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="mailto:andekarsunny2004@gmail.com"
                className="hover:text-white transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Nand Kishore All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
