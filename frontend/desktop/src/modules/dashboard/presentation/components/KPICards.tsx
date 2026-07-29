import React, { useEffect, useState } from 'react';
import { DashboardMetrics } from '../../domain/types';

interface KPICardsProps {
  metrics: DashboardMetrics | null;
}

/** Animate number counting-up on mount */
function useCountUp(target: number, duration = 900): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!target) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return value;
}

export const KPICards: React.FC<KPICardsProps> = ({ metrics }) => {
  const proposalsValue    = useCountUp(metrics?.activeProposalsValue    ?? 0);
  const marginPct         = useCountUp(metrics ? Math.round(metrics.expectedMargin * 10) : 0);
  const contractsPct      = useCountUp(metrics?.signedContractsPercentage ?? 0);

  if (!metrics) {
    return (
      <div className="kpi-grid">
        {[1, 2, 3].map((i) => (
          <div key={i} className="kpi-card skeleton-card" />
        ))}
      </div>
    );
  }

  return (
    <div className="kpi-grid">
      {/* ── Valor em Propostas Ativas ──────────────────── */}
      <div className="kpi-card">
        <div className="kpi-header">
          <span className="kpi-title text-label-caps">Propostas Ativas</span>
          <div className="kpi-icon-badge primary">
            <span className="material-symbols-outlined">payments</span>
          </div>
        </div>
        <div className="kpi-value-container">
          <span className="font-headline text-display-lg">
            R$ {proposalsValue.toLocaleString('pt-BR')}
          </span>
        </div>
        <div className="kpi-trend trend-up">
          <span className="material-symbols-outlined icon-small">trending_up</span>
          <span>+{metrics.activeProposalsGrowth}% vs mês anterior</span>
        </div>
      </div>

      {/* ── Margem Esperada ────────────────────────────── */}
      <div className="kpi-card">
        <div className="kpi-header">
          <span className="kpi-title text-label-caps">Margem Esperada</span>
          <div className="kpi-icon-badge secondary">
            <span className="material-symbols-outlined">analytics</span>
          </div>
        </div>
        <div className="kpi-value-container">
          <span className="font-headline text-display-lg">
            {(marginPct / 10).toFixed(1)}%
          </span>
        </div>
        <div className="kpi-trend trend-up">
          <span className="material-symbols-outlined icon-small">arrow_upward</span>
          <span>Acima da meta ({metrics.expectedMarginTarget}%)</span>
        </div>
      </div>

      {/* ── Contratos Assinados ────────────────────────── */}
      <div className="kpi-card">
        <div className="kpi-header">
          <span className="kpi-title text-label-caps">Contratos Assinados</span>
          <div className="kpi-icon-badge tertiary">
            <span className="material-symbols-outlined">verified</span>
          </div>
        </div>
        <div className="kpi-value-container">
          <span className="font-headline text-display-lg">{contractsPct}%</span>
        </div>
        <div className="kpi-progress-bg">
          <div
            className="kpi-progress-fill"
            style={{ width: `${metrics.signedContractsPercentage}%` }}
          />
        </div>
        <div className="kpi-trend" style={{ marginTop: '6px' }}>
          <span className="material-symbols-outlined icon-small" style={{ color: 'var(--color-tertiary)' }}>
            fact_check
          </span>
          <span style={{ color: 'var(--color-on-surface-variant)' }}>de contratos fechados no Q3</span>
        </div>
      </div>
    </div>
  );
};
