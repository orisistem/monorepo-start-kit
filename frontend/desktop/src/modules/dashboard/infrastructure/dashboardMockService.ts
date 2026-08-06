import { DashboardMetrics, PipelineStage, Deal } from '../domain/types';

export const fetchDashboardMetrics = async (): Promise<DashboardMetrics> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        activeProposalsValue: 0,
        activeProposalsGrowth: 0,
        expectedMargin: 0,
        expectedMarginTarget: 0,
        signedContractsPercentage: 0,
        quarterlyGoalCurrent: 0,
        quarterlyGoalTarget: 0,
      });
    }, 500);
  });
};

export const fetchPipelineStages = async (): Promise<PipelineStage[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', name: 'Budgeting',      dealCount: 0, totalValue: 0, icon: 'account_balance_wallet' },
        { id: '2', name: 'Proposed',        dealCount: 0, totalValue: 0, icon: 'send'      },
        { id: '3', name: 'Negotiation',     dealCount: 0, totalValue: 0, icon: 'handshake' },
        { id: '4', name: 'Final Signature', dealCount: 0, totalValue: 0, icon: 'draw'      },
      ]);
    }, 500);
  });
};

export const fetchRecentDeals = async (): Promise<Deal[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 500);
  });
};
