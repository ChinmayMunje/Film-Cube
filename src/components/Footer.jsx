import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white py-6'>
      <footer className='relative container mx-auto px-4'>
        <ul className='flex flex-col md:flex-row md:justify-center md:gap-8'>
          <li className="menuItem mb-4 md:mb-0">Terms Of Use</li>
          <li className="menuItem mb-4 md:mb-0">Privacy-Policy</li>
          <li className="menuItem mb-4 md:mb-0">About</li>
          <li className="menuItem mb-4 md:mb-0">Blog</li>
          <li className="menuItem mb-4 md:mb-0">FAQ</li>
        </ul>
        <div className="infoText py-5 px-6 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <div className="flex flex-row justify-center md:justify-start py-4 gap-10">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer