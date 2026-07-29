import { DashboardMetrics, PipelineStage, Deal } from '../domain/types';

export const fetchDashboardMetrics = async (): Promise<DashboardMetrics> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        activeProposalsValue: 1_482_000,
        activeProposalsGrowth: 12.4,
        expectedMargin: 24.8,
        expectedMarginTarget: 22.5,
        signedContractsPercentage: 75,
        quarterlyGoalCurrent: 1_820_000,
        quarterlyGoalTarget: 2_400_000,
      });
    }, 500);
  });
};

export const fetchPipelineStages = async (): Promise<PipelineStage[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', name: 'Budgeting',      dealCount: 12, totalValue: 420_000, icon: 'account_balance_wallet' },
        { id: '2', name: 'Proposed',        dealCount: 8,  totalValue: 580_000, icon: 'send'      },
        { id: '3', name: 'Negotiation',     dealCount: 4,  totalValue: 310_000, icon: 'handshake' },
        { id: '4', name: 'Final Signature', dealCount: 3,  totalValue: 172_000, icon: 'draw'      },
      ]);
    }, 500);
  });
};

export const fetchRecentDeals = async (): Promise<Deal[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'd1',
          clientName: 'Construtora Horizonte',
          projectName: 'Projeto Residencial Fase II',
          value: 342_000,
          startDate: '12 Ago',
          endDate: '30 Out',
          status: 'Contract Signed',
        },
        {
          id: 'd2',
          clientName: 'Varejo Oásis',
          projectName: 'Sistema de Gestão de Estoque',
          value: 185_000,
          startDate: '01 Set',
          endDate: '15 Dez',
          status: 'Negotiation',
        },
        {
          id: 'd3',
          clientName: 'FarmaTech Brasil',
          projectName: 'Data Lake de Conformidade',
          value: 520_000,
          startDate: '22 Jul',
          endDate: '22 Jan',
          status: 'Active',
        },
        {
          id: 'd4',
          clientName: 'Loom Analytics',
          projectName: 'Benchmarking de Modelos de IA',
          value: 125_000,
          startDate: '05 Out',
          endDate: '20 Nov',
          status: 'Budgeting',
        },
        {
          id: 'd5',
          clientName: 'Engenharia Vértice',
          projectName: 'Levantamento Estrutural – Sede',
          value: 98_500,
          startDate: '15 Out',
          endDate: '10 Dez',
          status: 'Proposed',
        },
      ]);
    }, 500);
  });
};
