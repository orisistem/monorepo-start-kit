export interface Deal {
  id: string;
  clientName: string;
  projectName: string;
  value: number;
  startDate: string;
  endDate: string;
  status: 'Budgeting' | 'Proposed' | 'Negotiation' | 'Contract Signed' | 'Active';
}

export interface PipelineStage {
  id: string;
  name: string;
  dealCount: number;
  totalValue: number;
  icon: string;
}

export interface DashboardMetrics {
  activeProposalsValue: number;
  activeProposalsGrowth: number;
  expectedMargin: number;
  expectedMarginTarget: number;
  signedContractsPercentage: number;
  quarterlyGoalCurrent: number;
  quarterlyGoalTarget: number;
}
