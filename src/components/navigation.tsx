import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <div className="text-2xl font-bold">
                    <Link href="/"
                         className="hover:text-gray-200">SSC Prep
                    </Link>
                </div>
                
                {/* Links Section */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/"
                         className="hover:text-gray-200 transition duration-300">Home
                    </Link>
                    <Link href="/tests"
                         className="hover:text-gray-200 transition duration-300">Mock Tests
                    </Link>
                    <Link href="/syllabus"
                         className="hover:text-gray-200 transition duration-300">Syllabus
                    </Link>
                    <Link href="/results"
                         className="hover:text-gray-200 transition duration-300">Results
                    </Link>
                    <Link href="/contact"
                         className="hover:text-gray-200 transition duration-300">Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
