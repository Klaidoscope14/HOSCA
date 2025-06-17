'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 top-0 sticky w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/Hosca_logo.png" width={32} height={32} alt="Logo" className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HOSCA</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 17 14">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Nav Links */}
        <div className={`w-full md:block md:w-auto ${isDropdownOpen ? '' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
                Home
              </Link>
            </li>
            
            <li>
              <Link href="/club" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                Clubs
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
              >
                Committee
                <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-20 mt-2 w-44 bg-white rounded-lg shadow dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link href="/committee/gymkhana" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Gymkhana
                      </Link>
                    </li>
                    <li>
                      <Link href="/committee/hoscaa" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Hoscaa
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link href="/gallery" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/events" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500">
                Events
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;