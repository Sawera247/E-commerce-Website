import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-evenly py-8 gap-8 sm:gap-0 w-11/12 mx-auto">
        {/* Logo & Subscribe */}
        <div className="flex flex-col gap-3">
          <p className="logo uppercase font-bold text-lg">Penguin</p>
          <p className="text-lg font-semibold hover:text-red-500 cursor-pointer">Subscribe</p>
          <p className="font-light text-sm text-[#8d8d8d]">Get 10% Off On Your First Order</p>
          <div className="relative w-full sm:w-[200px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full p-2 pr-10 rounded border border-[#f5f5f5] text-[#8d8d8d] focus:outline-none"
            />
            <MdSend className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold">Support</p>
          <p className="font-light text-sm text-[#8d8d8d]">fayyazamajeed@gmail.com</p>
          <p className="font-light text-sm text-[#8d8d8d]">+000 000 000</p>
        </div>

        {/* Account */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold">Account</p>
          <p className="font-light text-sm text-[#8d8d8d] cursor-pointer">Login / Register</p>
          <p className="font-light text-sm text-[#8d8d8d] cursor-pointer">Cart</p>
          <p className="font-light text-sm text-[#8d8d8d] cursor-pointer">Shop</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <p className="text-lg font-semibold">Quick Links</p>
          <p className="font-light text-sm text-[#8d8d8d] cursor-pointer">Privacy Policy</p>
          <p className="font-light text-sm text-[#8d8d8d] cursor-pointer">Terms Of Use</p>
          <p className="font-light text-sm text-[#8d8d8d] cursor-pointer">FAQ</p>
          <p className="font-light text-sm text-[#8d8d8d] cursor-pointer">Contact</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#262626] mt-5 w-11/12 mx-auto"></div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 w-11/12 mx-auto gap-4 sm:gap-0 text-[#262626]">
        <p className="text-center sm:text-left text-sm">
          <span className="border px-1 rounded-full text-xs">C</span> CopyRight{" "}
          <a href="https://my-portfolio-39ae2.web.app/" target="_blank" className="underline hover:text-white">
            Penguin
          </a>{" "}
          2025. All Rights Reserved
        </p>
        <div className="flex gap-4 text-lg justify-center sm:justify-end">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaGithub className="hover:text-gray-800 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
