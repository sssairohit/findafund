import React from 'react';
import { Grant } from '../types';

interface GrantCardProps {
  grant: Grant;
  onSelect: (grant: Grant) => void;
  aiReason?: string;
}

const GrantCard: React.FC<GrantCardProps> = ({ grant, onSelect, aiReason }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col hover:shadow-md transition-all duration-200 cursor-pointer h-full"
      onClick={() => onSelect(grant)}
    >
      {aiReason && (
        <div className="px-4 py-3 bg-indigo-50 dark:bg-indigo-900/20 border-b border-indigo-100 dark:border-indigo-800/30">
            <p className="text-xs text-indigo-800 dark:text-indigo-300 leading-relaxed">
                <span className="font-bold tracking-wide uppercase text-[10px] mr-1.5">AI Match:</span> 
                {aiReason}
            </p>
        </div>
      )}
      <div className="p-6 flex-grow">
        <p className="text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-2">{grant.department}</p>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{grant.title}</h3>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm line-clamp-3 leading-relaxed">{grant.description}</p>
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 dark:border-gray-700/50 pt-4">
            <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Funding</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{grant.fundingAmount}</p>
            </div>
             {grant.applicationDeadline && (
                <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                        Deadline
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{grant.applicationDeadline}</p>
                </div>
             )}
        </div>
      </div>
      <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
        <div className="flex flex-wrap gap-2">
          {grant.tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] uppercase font-bold px-2.5 py-1 rounded-sm tracking-wide">
              {tag}
            </span>
          ))}
          {grant.tags.length > 3 && (
             <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-bold px-2.5 py-1 rounded-sm tracking-wide border border-gray-200 dark:border-gray-600">
              +{grant.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GrantCard;