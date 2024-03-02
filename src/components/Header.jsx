import React, { useState } from 'react'
import ContentWrapper from './ContentWrapper'
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  }

  return (
    <header className='bg-black text-start left-0 right-0 p-6 fixed z-50 top-0'>
      <nav className="container mx-auto">
        <div className='flex flex-col md:flex-row md:justify-between items-center'>
          <h1 className='text-red-600 font-bold text-2xl md:text-3xl'>Film<span className='text-white'>Cube</span></h1>
          
          <div className='relative'>
            <input
              type="text"
              placeholder='Search...'
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-600 w-full pr-12"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="absolute inset-y-0 right-0 bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 focus:outline-none"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <ul className='text-white flex flex-col md:flex-row md:gap-10 mt-4 md:mt-0 cursor-pointer'>
            <li onClick={() => navigate('/')}>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
          </ul>
        </div>
      </nav>
    </header>


  )
}

export default Header