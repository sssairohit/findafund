import React from 'react';
import { Grant } from '../types';
import { CloseIcon, ExternalLinkIcon } from './Icons';

interface GrantDetailModalProps {
  grant: Grant;
  onClose: () => void;
}

const GrantDetailModal: React.FC<GrantDetailModalProps> = ({ grant, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col transform transition-all duration-300"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="pr-8">
              <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">{grant.department}</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">{grant.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 -mr-2 -mt-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="overflow-y-auto p-6 space-y-8 no-scrollbar">
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-2">Description</h4>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{grant.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Funding Amount</h4>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{grant.fundingAmount}</p>
             </div>
             {grant.applicationDeadline && (
                 <div className="p-5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                        Application Deadline
                    </h4>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{grant.applicationDeadline}</p>
                 </div>
             )}
          </div>
           
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">Eligibility Criteria</h4>
            <ul className="space-y-2">
              {grant.eligibility.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                   <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span>
                   <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-3">Tags</h4>
             <div className="flex flex-wrap gap-2">
                {grant.tags.map(tag => (
                    <span key={tag} className="border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                    {tag}
                    </span>
                ))}
             </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg">
          <a
            href={grant.applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Apply on Official Website
            <ExternalLinkIcon className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GrantDetailModal;