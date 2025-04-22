import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa';
import { UserContext } from '../Context/UserContext';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { IsOpen, setIsOpen, light, setLight } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!IsOpen);
  };

  const toggleLight = () => {
    setLight(!light);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <nav className='w-full p-4 text-white bg-[#8E7DBE]'>
        <div className='flex items-center justify-between p-1'>
          <div>
            <h2 className='font-serif text-2xl font-bold'>Task Manager</h2>
          </div>
          <div className='items-center hidden md:flex gap-5'>
            <NavLink to='/' className='text-xl font-bold'>
              Home
            </NavLink>

   

            <button className='mx-4 text-white' onClick={toggleLight}>
              {light ? (
                <IoIosSunny className='mr-2' size={20} />
              ) : (
                <FaMoon size={20} />
              )}
            </button>

            <button
              className='text-xl text-white'
              onClick={() => setShowSearch(!showSearch)}
            >
              <FaSearch />

            </button>

            {showSearch && (
              <input
                type='text'
                className='px-2 py-1 rounded bg-white text-black'
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder='Search tasks...'
              />
            )}
          </div>

          <button
            className='text-2xl text-white md:hidden'
            onClick={toggleMenu}
          >
            {IsOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden bg-black h-screen w-1/2 ${IsOpen ? 'flex flex-col py-10 items-center' : 'hidden'}`}
      >
        <NavLink to='/' className="text-xl text-white">Home</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
