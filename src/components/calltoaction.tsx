import React from 'react';

const CallToAction = () => {
    return (
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 text-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <svg className="absolute inset-0 w-full h-full text-white opacity-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                    <circle cx="200" cy="200" r="150" fill="currentColor" />
                    <circle cx="800" cy="800" r="200" fill="currentColor" />
                </svg>
            </div>
            <div className="relative z-10 container mx-auto">
                {/* Heading */}
                <h2 className="text-5xl font-extrabold mb-6 animate__animated animate__fadeInUp">
                    Ready to Achieve Your Goals?
                </h2>
                {/* Subheading */}
                <p className="text-xl mb-8 animate__animated animate__fadeInUp">
                    Join thousands of successful candidates who prepared with us.
                </p>
                {/* Call to Action Button */}
                <a 
                    href="/signup" 
                    className="relative inline-block bg-white text-purple-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
                >
                    <span className="relative z-10">Sign Up Today</span>
                    {/* Animated Background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-50 rounded-full blur-lg transform scale-110"></span>
                </a>
            </div>
        </section>
    );
}

export default CallToAction;
