import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react';


const Theme = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleLightTheme = () => {
    setIsDarkMode(false);
  };

  const toggleDarkTheme = () => {
    setIsDarkMode(true);
  };
  return (
<>
<div className={`min-h-screen transition-all duration-500 ease-in-out ${
      isDarkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-5xl font-bold mb-6 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Theme Toggle Demo
          </h1>
          <p className={`text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experience the seamless transition between light and dark themes. 
            This interactive demo showcases how modern web applications can 
            provide users with personalized viewing preferences while maintaining 
            excellent readability and visual appeal in both themes.
          </p>
        </div>

        {/* Theme Toggle Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={toggleLightTheme}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
              !isDarkMode
                ? 'bg-yellow-400 text-gray-900 shadow-yellow-200 hover:bg-yellow-300'
                : 'bg-gray-700 text-white hover:bg-gray-600 shadow-gray-700/50'
            }`}
          >
            <Sun className="w-6 h-6" />
            Light Theme
          </button>

          <button
            onClick={toggleDarkTheme}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
              isDarkMode
                ? 'bg-blue-600 text-white shadow-blue-500/50 hover:bg-blue-500'
                : 'bg-gray-800 text-white hover:bg-gray-700 shadow-gray-400/50'
            }`}
          >
            <Moon className="w-6 h-6" />
            Dark Theme
          </button>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl transition-all duration-500 shadow-xl ${
            isDarkMode 
              ? 'bg-gray-800 shadow-gray-900/50' 
              : 'bg-white shadow-gray-200/50'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              Light Theme Benefits
            </h2>
            <p className={`text-base leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Light themes provide excellent readability in bright environments and 
              are often preferred for daytime use. They create a clean, professional 
              appearance that works well for productivity applications and content consumption.
            </p>
          </div>

          <div className={`p-8 rounded-2xl transition-all duration-500 shadow-xl ${
            isDarkMode 
              ? 'bg-gray-800 shadow-gray-900/50' 
              : 'bg-white shadow-gray-200/50'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Dark Theme Advantages
            </h2>
            <p className={`text-base leading-relaxed transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Dark themes reduce eye strain in low-light conditions and can help 
              conserve battery life on OLED displays. They're popular among developers 
              and users who spend long hours working on their devices.
            </p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="text-center mt-12">
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 ${
            isDarkMode 
              ? 'bg-gray-800 text-blue-400 shadow-lg shadow-gray-900/50' 
              : 'bg-white text-gray-700 shadow-lg shadow-gray-200/50'
          }`}>
            {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            <span className="font-medium">
              Currently using {isDarkMode ? 'Dark' : 'Light'} theme
            </span>
          </div>
        </div>
      </div>
    </div>
  
</>

)
}

export default Theme