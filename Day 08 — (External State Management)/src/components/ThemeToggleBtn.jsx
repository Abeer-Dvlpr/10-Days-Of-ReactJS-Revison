import React from 'react';
import useThemeStore from '../store/useThemeStore';

const ThemeToggleBtn = () => {
    const { isDark, toggleTheme } = useThemeStore();
    
    return (
        <button 
            className={`
                px-4 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer
                ${isDark 
                    ? 'bg-white text-gray-900 hover:bg-gray-100' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }
            `} 
            onClick={toggleTheme}
        >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}

export default ThemeToggleBtn;