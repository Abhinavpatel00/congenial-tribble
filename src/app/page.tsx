import React from 'react';
import Navbar from '@/components/navigation'; // Ensure this path matches your structure
import { FaCheckCircle, FaBookOpen, FaUserGraduate } from 'react-icons/fa';
import CallToAction from '@/components/calltoaction';
import Features from '@/components/features';
const HomePage = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white h-screen flex flex-col justify-center items-center text-center">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 max-w-4xl px-4">
                    <h1 className="text-6xl font-extrabold leading-tight mb-6 animate__animated animate__fadeInDown">
                        Excel in Your SSC Exams with Confidence
                    </h1>
                    <p className="text-xl mb-8 animate__animated animate__fadeInUp">
                        Access the most comprehensive resources, expert guidance, and real-time exam simulations.
                    </p>
                    <a href="/tests" className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105 animate__animated animate__pulse animate__infinite">
                        Start Your Journey
                    </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 mb-4">
                    <svg className="w-full h-20 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fillOpacity="1" d="M0,224L48,240C96,256,192,288,288,277.3C384,267,480,213,576,213.3C672,213,768,267,864,293.3C960,320,1056,320,1152,282.7C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
            </section>

            {/* Features Section
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Choose Our Platform?</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="feature-box bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <FaCheckCircle className="text-indigo-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">Authentic Mock Tests</h3>
                            <p className="text-gray-600">Practice with tests that simulate the real SSC exams, with detailed performance analysis.</p>
                        </div>
                        <div className="feature-box bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <FaBookOpen className="text-green-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">Comprehensive Study Material</h3>
                            <p className="text-gray-600">Access up-to-date study materials and resources curated by experts to cover every aspect of the syllabus.</p>
                        </div>
                        <div className="feature-box bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <FaUserGraduate className="text-purple-600 text-5xl mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold mb-4">Expert Guidance</h3>
                            <p className="text-gray-600">Learn from the best with insights, tips, and strategies from top SSC mentors and educators.</p>
                        </div>
                    </div>
                </div>
            </section> */}
<Features/>
            {/* Call to Action Section */}
         <CallToAction/>

       
        </div>
    );
}

export default HomePage;
