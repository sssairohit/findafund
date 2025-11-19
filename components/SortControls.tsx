import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon, ChevronUpDownIcon } from './Icons';
import { SortKey, SortOrder } from '../types';

interface SortControlsProps {
  sortConfig: { key: SortKey; order: SortOrder };
  onSortChange: (config: { key: SortKey; order: SortOrder }) => void;
}

const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'title', label: 'Title' },
  { key: 'department', label: 'Department' },
  { key: 'fundingAmount', label: 'Funding Amount' },
];

const SortControls: React.FC<SortControlsProps> = ({ sortConfig, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const currentLabel = sortOptions.find(opt => opt.key === sortConfig.key)?.label;

  const handleSortKeyChange = (key: SortKey) => {
    onSortChange({ key, order: sortConfig.order });
    setIsOpen(false);
  };

  const toggleSortOrder = () => {
    const newOrder = sortConfig.order === 'asc' ? 'desc' : 'asc';
    onSortChange({ key: sortConfig.key, order: newOrder });
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  return (
    <div className="flex items-center gap-2" ref={wrapperRef}>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full sm:w-44 px-3 py-2 text-sm font-medium text-left text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <span>Sort by: {currentLabel}</span>
          <ChevronUpDownIcon className="w-5 h-5 ml-2 -mr-1 text-gray-400" />
        </button>
        {isOpen && (
          <div className="absolute right-0 w-44 mt-2 origin-top-right bg-white dark:bg-gray-700 divide-y divide-gray-100 dark:divide-gray-600 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1">
              {sortOptions.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => handleSortKeyChange(key)}
                  className={`${
                    sortConfig.key === key ? 'font-bold text-indigo-600 dark:text-indigo-400' : 'font-normal text-gray-700 dark:text-gray-200'
                  } group flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-600`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <button
        onClick={toggleSortOrder}
        className="p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        aria-label={`Sort in ${sortConfig.order === 'asc' ? 'descending' : 'ascending'} order`}
      >
        {sortConfig.order === 'asc' ? (
          <ArrowUpIcon className="w-5 h-5" />
        ) : (
          <ArrowDownIcon className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default SortControls;