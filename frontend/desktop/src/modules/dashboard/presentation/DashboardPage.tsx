import React, { useEffect, useState } from 'react';
import { KPICards } from './components/KPICards';
import { SalesPipeline } from './components/SalesPipeline';
import { GoalProgress } from './components/GoalProgress';
import { RecentDeals } from './components/RecentDeals';
import {
  fetchDashboardMetrics,
  fetchPipelineStages,
  fetchRecentDeals,
} from '../infrastructure/dashboardMockService';
import { DashboardMetrics, PipelineStage, Deal } from '../domain/types';

export const DashboardPage: React.FC = () => {
  const [metrics, setMetrics]             = useState<DashboardMetrics | null>(null);
  const [pipelineStages, setPipelineStages] = useState<PipelineStage[] | null>(null);
  const [recentDeals, setRecentDeals]     = useState<Deal[] | null>(null);

  useEffect(() => {
    fetchDashboardMetrics().then(setMetrics);
    fetchPipelineStages().then(setPipelineStages);
    fetchRecentDeals().then(setRecentDeals);
  }, []);

  return (
    <>
      <div className="dashboard-header">
        <div>
          <h2 className="text-display-lg font-headline mb-xs">
            Visão Geral Operacional
          </h2>
          <p className="text-body-md">
            Métricas em tempo real do pipeline comercial e projetos da OriDeal.
          </p>
        </div>
        <button className="new-proposal-btn">
          <span className="material-symbols-outlined">add</span>
          Nova Proposta
        </button>
      </div>

      {/* ── KPI cards ───────────────────────────────── */}
      <KPICards metrics={metrics} />

      {/* ── Bento grid: pipeline + goal ─────────────── */}
      <div className="dashboard-bento-grid">
        <div className="bento-col-span-2">
          <SalesPipeline stages={pipelineStages} />
        </div>
        <div className="bento-col-span-1">
          <GoalProgress metrics={metrics} />
        </div>
      </div>

      {/* ── Recent deals table ──────────────────────── */}
      <RecentDeals deals={recentDeals} />
    </>
  );
};
