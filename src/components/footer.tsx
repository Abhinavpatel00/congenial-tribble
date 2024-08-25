
import React from 'react';

const Footer = () => {
    return (

<footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
    <div className="container mx-auto text-center">
        {/* Footer Logo or Title */}
        <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">SSC Prep</h2>
            <p className="text-sm font-light">Your Path to SSC Success</p>
        </div>

        {/* Footer Links */}
        <div className="mb-8">
            <div className="flex justify-center flex-wrap gap-6">
                <a href="#" className="text-lg font-semibold hover:text-gray-400 transition duration-300">Privacy Policy</a>
                <a href="#" className="text-lg font-semibold hover:text-gray-400 transition duration-300">Terms of Service</a>
                <a href="#" className="text-lg font-semibold hover:text-gray-400 transition duration-300">Contact Us</a>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-4">
            <p className="text-sm">&copy; 2024 SSC Prep. All rights reserved.</p>
            <div className="mt-4">
                <a href="https://twitter.com/yourprofile" className="text-blue-400 hover:text-blue-300 mx-2 transition duration-300" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://facebook.com/yourprofile" className="text-blue-600 hover:text-blue-500 mx-2 transition duration-300" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com/yourprofile" className="text-pink-500 hover:text-pink-400 mx-2 transition duration-300" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://linkedin.com/in/yourprofile" className="text-blue-700 hover:text-blue-600 mx-2 transition duration-300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    </div>
</footer>
    );
}

export default Footer;