export interface Grant {
  id: string;
  title: string;
  department: string;
  description: string;
  eligibility: string[];
  fundingAmount: string;
  applicationLink: string;
  tags: string[];
  applicationDeadline?: string;
}

export type SortKey = 'title' | 'department' | 'fundingAmount';
export type SortOrder = 'asc' | 'desc';
export type Theme = 'light' | 'dark';
export type ViewMode = 'grid' | 'list';
