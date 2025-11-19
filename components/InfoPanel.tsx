import React, { useState } from 'react';
import { ArrowDownIcon } from './Icons';

const InfoPanel: React.FC = () => {
    const [isInstructionsOpen, setInstructionsOpen] = useState(false);

    return (
        <aside className="mb-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="p-6 text-center border-b border-gray-100 dark:border-gray-700">
                <p className="text-xl font-medium text-gray-900 dark:text-white leading-relaxed">
                    Your one-stop repository for government grants and funding opportunities in India.
                </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800/50">
                <details className="group">
                    <summary 
                        className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={(e) => { e.preventDefault(); setInstructionsOpen(!isInstructionsOpen); }}
                    >
                        <span className="font-bold text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                            How to Use This Repository
                        </span>
                        <ArrowDownIcon className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isInstructionsOpen ? 'rotate-180' : ''}`} />
                    </summary>
                    <div className={`px-4 pb-4 text-sm text-gray-600 dark:text-gray-400 space-y-2 transition-all duration-300 ${isInstructionsOpen ? 'block' : 'hidden'}`}>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                            <div className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                <strong className="block text-gray-900 dark:text-white mb-1">Discover</strong>
                                Use search and filters to find relevant schemes.
                            </div>
                            <div className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                <strong className="block text-gray-900 dark:text-white mb-1">Details</strong>
                                Click rows to view eligibility and funding info.
                            </div>
                            <div className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
                                <strong className="block text-gray-900 dark:text-white mb-1">Apply</strong>
                                Follow direct links to official application portals.
                            </div>
                        </div>
                    </div>
                </details>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center px-6 py-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                 <p className="mb-2 md:mb-0">
                    <span className="font-semibold">Disclaimer:</span> Information is for awareness purposes only.
                 </p>
                 <a 
                    href="https://forms.office.com/r/DAb1pVwtne" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                    Submit Feedback / Add Grant
                </a>
            </div>
        </aside>
    );
};

export default InfoPanel;