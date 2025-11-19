import React from 'react';
import { GridIcon, ListIcon } from './Icons';
import { ViewMode } from '../types';

interface ViewSwitcherProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ currentView, onViewChange }) => {
  const baseClasses = "p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500";
  const activeClasses = "bg-indigo-600 text-white";
  const inactiveClasses = "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600";

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onViewChange('grid')}
        className={`${baseClasses} ${currentView === 'grid' ? activeClasses : inactiveClasses}`}
        aria-label="Grid view"
        aria-pressed={currentView === 'grid'}
      >
        <GridIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`${baseClasses} ${currentView === 'list' ? activeClasses : inactiveClasses}`}
        aria-label="List view"
        aria-pressed={currentView === 'list'}
      >
        <ListIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ViewSwitcher;