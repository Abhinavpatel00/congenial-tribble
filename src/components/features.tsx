import React from 'react';
import { FaStar, FaBook, FaUserGraduate } from 'react-icons/fa';

const Features = () => {
    return (
        <section className="relative bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full text-gray-200 dark:text-gray-700 opacity-20" fill="currentColor" viewBox="0 0 1024 1024">
                    <circle cx="200" cy="200" r="150" />
                    <circle cx="800" cy="800" r="200" />
                </svg>
            </div>
            <div className="container px-6 py-10 mx-auto text-center">
                {/* Title and Description */}
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white mb-6 animate__animated animate__fadeIn">
                    Explore Our <br />
                    Amazing <span className="underline decoration-blue-500">Features</span>
                </h1>
                <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300 mb-12 animate__animated animate__fadeIn">
                    Discover the features designed to help you excel in your SSC exams.
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="p-8 space-y-3 bg-white dark:bg-gray-900 border-2 border-blue-400 dark:border-blue-300 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
                        <span className="text-5xl mx-auto mb-4" role="img" aria-label="checkmark">✅</span>
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Authentic Mock Tests</h1>
                        <p className="text-gray-500 dark:text-gray-300">
                            Practice with tests that closely simulate real SSC exams, including detailed performance analysis.
                        </p>
                        <a href="/mock-tests" className="inline-flex items-center mt-4 text-blue-500 dark:text-blue-400 capitalize transition-colors duration-200 transform bg-blue-100 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full py-2 px-4 hover:bg-blue-200 dark:hover:bg-blue-600">
                            <span role="img" aria-label="test">📚</span>
                            Learn More
                        </a>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="p-8 space-y-3 bg-white dark:bg-gray-900 border-2 border-blue-400 dark:border-blue-300 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
                        <span className="text-5xl mx-auto mb-4" role="img" aria-label="book">📖</span>
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Comprehensive Study Material</h1>
                        <p className="text-gray-500 dark:text-gray-300">
                            Access up-to-date study materials and resources curated by experts to cover every aspect of the syllabus.
                        </p>
                        <a href="/study-material" className="inline-flex items-center mt-4 text-blue-500 dark:text-blue-400 capitalize transition-colors duration-200 transform bg-blue-100 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full py-2 px-4 hover:bg-blue-200 dark:hover:bg-blue-600">
                            <span role="img" aria-label="materials">📚</span>
                            Learn More
                        </a>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="p-8 space-y-3 bg-white dark:bg-gray-900 border-2 border-blue-400 dark:border-blue-300 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
                        <span className="text-5xl mx-auto mb-4" role="img" aria-label="graduate">🎓</span>
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Expert Guidance</h1>
                        <p className="text-gray-500 dark:text-gray-300">
                            Learn from the best with insights, tips, and strategies from top SSC mentors and educators.
                        </p>
                        <a href="/expert-guidance" className="inline-flex items-center mt-4 text-blue-500 dark:text-blue-400 capitalize transition-colors duration-200 transform bg-blue-100 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full py-2 px-4 hover:bg-blue-200 dark:hover:bg-blue-600">
                            <span role="img" aria-label="expert">🧑‍🏫</span>
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
