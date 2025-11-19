import React from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';

interface FilterPanelProps {
  departments: string[];
  selectedDepartments: string[];
  onDepartmentChange: (department: string) => void;
  tags: string[];
  selectedTags: string[];
  onTagChange: (tag: string) => void;
  minFunding: number;
  maxFunding: number;
  fundingRange: { min: number; max: number };
  onFundingRangeChange: (newRange: { min: number; max: number }) => void;
  onClearFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ 
  departments, 
  selectedDepartments, 
  onDepartmentChange,
  tags,
  selectedTags,
  onTagChange,
  minFunding,
  maxFunding,
  fundingRange,
  onFundingRangeChange,
  onClearFilters
}) => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Filters</h2>
            <button 
                onClick={onClearFilters}
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
            >
                Clear All
            </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
            <MultiSelectDropdown
                options={departments}
                selectedOptions={selectedDepartments}
                onOptionChange={onDepartmentChange}
                placeholder="Select departments"
                label="By Department"
            />
        
            <MultiSelectDropdown
                options={tags}
                selectedOptions={selectedTags}
                onOptionChange={onTagChange}
                placeholder="Select tags"
                label="By Tag"
            />

            <div>
                <h3 className="font-semibold mb-3 text-gray-600 dark:text-gray-300">By Funding Amount</h3>
                <div className="space-y-4 px-1">
                <div>
                    <label htmlFor="min-funding" className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <span>Minimum</span>
                    <span>₹{fundingRange.min.toLocaleString('en-IN')}</span>
                    </label>
                    <input
                    id="min-funding"
                    type="range"
                    min={minFunding}
                    max={maxFunding}
                    step={100000}
                    value={fundingRange.min}
                    onChange={(e) => {
                        const newMin = Number(e.target.value);
                        const newMax = Math.max(newMin, fundingRange.max);
                        onFundingRangeChange({ min: newMin, max: newMax });
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600 accent-indigo-600"
                    />
                </div>
                <div>
                    <label htmlFor="max-funding" className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    <span>Maximum</span>
                    <span>₹{fundingRange.max.toLocaleString('en-IN')}</span>
                    </label>
                    <input
                    id="max-funding"
                    type="range"
                    min={minFunding}
                    max={maxFunding}
                    step={100000}
                    value={fundingRange.max}
                    onChange={(e) => {
                        const newMax = Number(e.target.value);
                        const newMin = Math.min(newMax, fundingRange.min);
                        onFundingRangeChange({ min: newMin, max: newMax });
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600 accent-indigo-600"
                    />
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FilterPanel;