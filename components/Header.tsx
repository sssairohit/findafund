import React from 'react';
import { SunIcon, MoonIcon } from './Icons';
import SearchBar from './SearchBar';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, searchTerm, onSearchChange }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-20">
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
        <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white whitespace-nowrap">
            <span className="text-indigo-600 dark:text-indigo-400">find</span>afund
            </h1>
        </div>
        
        <div className="flex-1 min-w-0 flex justify-center px-4">
            <div className="w-full max-w-lg">
                <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
            </div>
        </div>

        <div className="flex-shrink-0">
            <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            aria-label="Toggle theme"
            >
            {theme === 'light' ? (
                <MoonIcon className="w-6 h-6" />
            ) : (
                <SunIcon className="w-6 h-6" />
            )}
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;