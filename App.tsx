import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Grant, SortKey, SortOrder, Theme, ViewMode } from './types';
import { grantsData } from './data/grants';
import Header from './components/Header';
import GrantCard from './components/GrantCard';
import GrantDetailModal from './components/GrantDetailModal';
import SortControls from './components/SortControls';
import ViewSwitcher from './components/ViewSwitcher';
import InfoPanel from './components/InfoPanel';
import AIAssistant from './components/AIAssistant';
import FilterPanel from './components/FilterPanel';
import GrantTable from './components/GrantTable';

// Helper to parse funding strings into comparable numbers
const parseFundingAmount = (amountStr: string): number => {
    if (!amountStr) return 0;
    // Handle ranges by taking the first number
    const firstAmount = amountStr.split('-')[0];
    const cleanedStr = firstAmount.replace(/₹|,|Up to|upto|INR|approx\.|\+/gi, '').trim();
    const parts = cleanedStr.split(/[\s-]+/); 
    let value = parseFloat(parts[0]);

    if (isNaN(value)) return 0;

    const unit = parts.find(p => /lakh|crore/i.test(p));

    if (unit) {
        if (/lakh/i.test(unit)) {
            value *= 100000;
        } else if (/crore/i.test(unit)) {
            value *= 10000000;
        }
    }
    return value;
};

const amounts = grantsData.map(grant => parseFundingAmount(grant.fundingAmount)).filter(amount => amount > 0);
const MIN_FUNDING = 0;
const MAX_FUNDING = Math.max(...amounts, 0);


function App() {
  const [allGrants] = useState<Grant[]>(grantsData);
  const [filteredGrants, setFilteredGrants] = useState<Grant[]>([]);
  const [selectedGrant, setSelectedGrant] = useState<Grant | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [fundingRange, setFundingRange] = useState<{ min: number; max: number }>({ min: MIN_FUNDING, max: MAX_FUNDING });
  const [isFilterPanelOpen, setFilterPanelOpen] = useState<boolean>(false);
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; order: SortOrder }>({ key: 'title', order: 'asc' });
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'light';
  });
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const departments = useMemo(() => {
    const depts = new Set(allGrants.map(grant => grant.department));
    return Array.from(depts).sort();
  }, [allGrants]);

  const tags = useMemo(() => {
    const allTags = new Set(allGrants.flatMap(grant => grant.tags));
    return Array.from(allTags).sort();
  }, [allGrants]);

  const handleFilterAndSort = useCallback(() => {
    let grants = [...allGrants];
    
    // Filtering
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      grants = grants.filter(grant =>
        grant.title.toLowerCase().includes(lowercasedTerm) ||
        grant.description.toLowerCase().includes(lowercasedTerm) ||
        grant.tags.some(tag => tag.toLowerCase().includes(lowercasedTerm))
      );
    }

    if (selectedDepartments.length > 0) {
      grants = grants.filter(grant => selectedDepartments.includes(grant.department));
    }

    if (selectedTags.length > 0) {
      grants = grants.filter(grant => 
        grant.tags.some(tag => selectedTags.includes(tag))
      );
    }
    
    // Filter by funding amount
    grants = grants.filter(grant => {
        const amount = parseFundingAmount(grant.fundingAmount);
        if (amount === 0) {
            // Include grants without a specified amount only if the user hasn't raised the minimum
            return fundingRange.min === MIN_FUNDING;
        }
        return amount >= fundingRange.min && amount <= fundingRange.max;
    });

    // Sorting
    grants.sort((a, b) => {
        let comparison = 0;
        if (sortConfig.key === 'fundingAmount') {
            comparison = parseFundingAmount(a.fundingAmount) - parseFundingAmount(b.fundingAmount);
        } else {
            // Handles 'title' and 'department'
            const key = sortConfig.key as 'title' | 'department';
            comparison = a[key].localeCompare(b[key]);
        }
        return sortConfig.order === 'asc' ? comparison : -comparison;
    });


    setFilteredGrants(grants);
  }, [allGrants, searchTerm, selectedDepartments, selectedTags, sortConfig, fundingRange]);


  useEffect(() => {
    handleFilterAndSort();
  }, [handleFilterAndSort]);
  
  const handleSelectGrant = (grant: Grant) => {
    setSelectedGrant(grant);
  };

  const handleCloseModal = () => {
    setSelectedGrant(null);
  };

  const toggleDepartment = (department: string) => {
    setSelectedDepartments(prev =>
      prev.includes(department)
        ? prev.filter(d => d !== department)
        : [...prev, department]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  const handleFundingRangeChange = (newRange: { min: number; max: number }) => {
    setFundingRange(newRange);
  };

  const handleClearFilters = () => {
    setSelectedDepartments([]);
    setSelectedTags([]);
    setFundingRange({ min: MIN_FUNDING, max: MAX_FUNDING });
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Header theme={theme} toggleTheme={toggleTheme} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="px-4 sm:px-6 lg:px-8 py-6">
        <InfoPanel />
        <AIAssistant allGrants={allGrants} onSelectGrant={handleSelectGrant} />
        
        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6 sticky top-[68px] lg:top-[68px] z-10">
                <div className="flex flex-col sm:flex-row items-center sm:justify-end gap-4">
                    <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2 flex-shrink-0">
                        <button 
                            onClick={() => setFilterPanelOpen(!isFilterPanelOpen)}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-left text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            aria-label="Toggle filters"
                            aria-expanded={isFilterPanelOpen}
                        >
                            <span>Filters</span>
                        </button>
                        <SortControls sortConfig={sortConfig} onSortChange={setSortConfig} />
                        <ViewSwitcher currentView={viewMode} onViewChange={setViewMode} />
                    </div>
                </div>
                {isFilterPanelOpen && (
                     <FilterPanel 
                        departments={departments}
                        selectedDepartments={selectedDepartments}
                        onDepartmentChange={toggleDepartment}
                        tags={tags}
                        selectedTags={selectedTags}
                        onTagChange={toggleTag}
                        minFunding={MIN_FUNDING}
                        maxFunding={MAX_FUNDING}
                        fundingRange={fundingRange}
                        onFundingRangeChange={handleFundingRangeChange}
                        onClearFilters={handleClearFilters}
                    />
                )}
            </div>

            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">{filteredGrants.length} of {allGrants.length} grants found</p>
                {filteredGrants.length > 0 ? (
                    viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                            {filteredGrants.map(grant => (
                                <GrantCard key={grant.id} grant={grant} onSelect={handleSelectGrant} />
                            ))}
                        </div>
                    ) : (
                        <GrantTable grants={filteredGrants} onSelect={handleSelectGrant} />
                    )
                ) : (
                    <div className="text-center py-16 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No Grants Found</h3>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>
        </div>
      </main>
      
      {selectedGrant && <GrantDetailModal grant={selectedGrant} onClose={handleCloseModal} />}
    </div>
  );
}

export default App;