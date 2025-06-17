'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    // Close dropdown on any click outside
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    // Close dropdown on scroll
    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    // Close dropdown on any touch event outside
    const handleTouchStart = (e: TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-950 backdrop-blur-sm border-b border-gray-800 top-0 sticky w-full z-50 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/hosca.jpg" width={0} height={0} sizes="100vw" alt="Logo" className="h-12 w-auto object-contain"/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">HOSCA</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800/50 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 17 14">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-800 rounded-lg text-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent"
              style={{ backgroundColor: isMobileMenuOpen ? '#111827' : 'transparent' }}>
            
            <li>
              <Link href="/" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 hover:text-blue-400 relative group transition-colors duration-300">
                Home
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </Link>
            </li>
            
            <li>
              <Link href="/club" className="block py-2 px-3 text-white rounded hover:bg-gray-800/50 md:hover:bg-transparent md:p-0 hover:text-blue-400 relative group transition-colors duration-300">
                Clubs
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-800/50 md:hover:bg-transparent md:border-0 hover:text-blue-400 md:p-0 relative group transition-colors duration-300"
              >
                Committee
                <svg className="w-2.5 h-2.5 ms-2.5 transition-transform duration-200" 
                     style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                     fill="none" viewBox="0 0 10 6">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute z-20 mt-2 w-44 bg-gray-900 rounded-lg shadow-lg border border-gray-800 backdrop-blur-sm"
                >
                  <ul className="py-2 text-sm text-white">
                    <li>
                      <Link href="/committee/gymkhana" 
                        className="block px-4 py-2 hover:bg-gray-800/70 hover:text-blue-400 transition-all duration-300 relative group">
                        Gymkhana
                        <span className="absolute inset-y-0 left-0 w-0.5 bg-blue-400 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/committee/Developers"
                        className="block px-4 py-2 hover:bg-gray-800/70 hover:text-blue-400 transition-all duration-300 relative group">
                        Developers
                        <span className="absolute inset-y-0 left-0 w-0.5 bg-blue-400 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link href="/gallery" className="block py-2 px-3 text-white rounded hover:bg-gray-800/50 md:hover:bg-transparent md:p-0 hover:text-blue-400 relative group transition-colors duration-300">
                Gallery
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </Link>
            </li>
            <li>
              <Link href="/events" className="block py-2 px-3 text-white rounded hover:bg-gray-800/50 md:hover:bg-transparent md:p-0 hover:text-blue-400 relative group transition-colors duration-300">
                Events
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 md:block hidden"></span>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;