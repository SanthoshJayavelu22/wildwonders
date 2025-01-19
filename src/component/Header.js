import React, { useState } from "react";
import { FiMenu, FiUser, FiShoppingCart,FiChevronDown  } from "react-icons/fi";
import logo from '../images/WW_logo.avif'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <p className=' bg-blueP text-white text-sm md:text-md font-semibold md:font-bold h-12 flex items-center justify-center'>CYBER MONDAY FREE REUSABLE TOTE WITH EVERY ORDER</p>
      <nav className="bg-white text-blueP">
      <div className="w-full px-3  md:px-10 md:py-5">
        <div className="flex items-center justify-between h-16">
    
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl"
            >
              <FiMenu />
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-6">

            <div className="relative group">
              <button className="flex items-center text-2xl font-bold">
                SHOP <FiChevronDown className="ml-2 text-2xl" />
              </button>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-blueP rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Option 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Option 2
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Option 3
                </a>
              </div>
            </div>

            <div className="relative group">
          <p className="md:relative font-bold text-2xl md:left-48">BUNDLES</p>
            </div>
          </div>


          <div className="flex justify-center ">
            <img src={logo} className="w-40 ml-12 md:ml-44 md:w-full"/>
          </div>


          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-6">
        
              <div className="relative group">
              <button className="flex items-center text-2xl font-bold">
                LEARN <FiChevronDown className="ml-2 text-2xl" />
              </button>
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Option X
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Option Y
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Option Z
                  </a>
                </div>
              </div>

              <div className="relative group">
              <p className=" font-bold text-2xl ">FIND WILDWONDER</p>
              </div>
            </div>
            
            <FiUser className="text-2xl  cursor-pointer" />
            <FiShoppingCart className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white px-4 py-2">
          <div className="space-y-2">
            <a href="#" className="block text-blueP py-2 px-4 rounded">
              SHOP
            </a>
            <a href="#" className="block text-blueP  py-2 px-4 rounded">
              VARIETY PACKS
            </a>
            <a href="#" className="block text-blueP py-2 px-4 rounded">
              FLAVORS
            </a>
            <a href="#" className="block text-blueP py-2 px-4 rounded">
              BUNDLES
            </a>
          </div>
        </div>
      )}
    </nav>
  

        
        </>
  )
}

export default Header
