import React from 'react';
import { Grant } from '../types';

interface GrantTableRowProps {
  grant: Grant;
  index: number;
  onSelect: (grant: Grant) => void;
}

const GrantTableRow: React.FC<GrantTableRowProps> = ({ grant, index, onSelect }) => {
  return (
    <tr 
      onClick={() => onSelect(grant)} 
      className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {index + 1}
      </td>
      <td className="px-6 py-4 whitespace-normal">
        <div className="text-sm font-medium text-gray-900 dark:text-white">{grant.title}</div>
      </td>
      <td className="px-6 py-4 whitespace-normal">
        <div className="text-sm text-gray-600 dark:text-gray-300">{grant.department}</div>
      </td>
      <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 dark:text-gray-300">
        {grant.eligibility.length > 0 ? `${grant.eligibility.length} criteria` : 'N/A'}
      </td>
      <td className="px-6 py-4 whitespace-normal">
        <div className="flex flex-wrap gap-1.5">
          {grant.tags.map(tag => (
            <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-800 dark:text-gray-200 font-semibold">{grant.fundingAmount}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
        {grant.applicationDeadline || 'N/A'}
      </td>
    </tr>
  );
};

export default GrantTableRow;