import React, { useState } from 'react';
import { Grant } from '../types';
import { findMatchingGrants } from '../services/geminiService';
import GrantCard from './GrantCard';
import Spinner from './Spinner';

interface AIAssistantProps {
  allGrants: Grant[];
  onSelectGrant: (grant: Grant) => void;
}

interface RecommendedGrant {
    grant: Grant;
    reason: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ allGrants, onSelectGrant }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedGrant[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const results = await findMatchingGrants(query, allGrants);
      
      const matchedGrants: RecommendedGrant[] = results
        .map(rec => {
          const grant = allGrants.find(g => g.id === rec.id);
          return grant ? { grant, reason: rec.reason } : null;
        })
        .filter((item): item is RecommendedGrant => item !== null);

      setRecommendations(matchedGrants);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="mb-4">
          <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 rounded">
             Beta Feature
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">AI Grant Finder</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Describe your project to receive personalized recommendations.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., 'tech startup for agriculture' or 'women-led MSME'"
          className="flex-grow block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-shadow"
          disabled={isLoading}
          aria-label="Describe your project for AI grant matching"
        />
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Searching...' : 'Find Grants'}
        </button>
      </form>

      <div className="mt-8">
        {isLoading && (
            <div className="text-center py-4">
                <Spinner />
            </div>
        )}
        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-md text-center">
            <p className="text-red-700 dark:text-red-400 font-medium text-sm">{error}</p>
          </div>
        )}
        {!isLoading && !error && recommendations.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">Top Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {recommendations.map(({ grant, reason }) => (
                <GrantCard 
                    key={grant.id} 
                    grant={grant} 
                    onSelect={onSelectGrant}
                    aiReason={reason} 
                />
              ))}
            </div>
          </div>
        )}
        {!isLoading && !error && recommendations.length === 0 && query && (
             <div className="text-center py-8 bg-gray-50 dark:bg-gray-800/50 rounded border border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 font-medium">No specific matches found.</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Try refining your description.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;