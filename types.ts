
export interface ProjectEstimate {
  projectName: string;
  estimatedCostLow: number;
  estimatedCostHigh: number;
  timelineMonths: number;
  breakdown: {
    category: string;
    percentage: number;
    amount: number;
  }[];
  recommendations: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial';
  image: string;
  location: string;
}

export interface NavLink {
  label: string;
  href: string;
}
