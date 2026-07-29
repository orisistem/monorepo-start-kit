import React from 'react';
import { PipelineStage } from '../../domain/types';

interface SalesPipelineProps {
  stages: PipelineStage[] | null;
}

const stageNameMap: Record<string, string> = {
  Budgeting:          'Orçamento',
  Proposed:           'Proposta Enviada',
  Negotiation:        'Negociação',
  'Final Signature':  'Assinatura Final',
};

export const SalesPipeline: React.FC<SalesPipelineProps> = ({ stages }) => {
  if (!stages) {
    return (
      <div className="pipeline-card loading">
        <span className="material-symbols-outlined" style={{ fontSize: 32, opacity: 0.4 }}>
          waterfall_chart
        </span>
        <span style={{ marginTop: 8, fontSize: 13, color: 'var(--color-on-surface-variant)' }}>
          Carregando funil...
        </span>
      </div>
    );
  }

  const maxValue = Math.max(...stages.map((s) => s.totalValue));

  // Assign week-level mock bars per stage
  const barsData = [
    [0.15, 0.25, 0.40, 0.55, 0.75, 1.0],
    [0.20, 0.30, 0.55, 0.45, 0.85, 0.70],
    [0.10, 0.20, 0.30, 0.15, 0.45, 0.35],
    [0.05, 0.10, 0.20, 0.10, 0.25, 0.18],
  ];

  return (
    <div className="pipeline-card">
      {/* Header */}
      <div className="pipeline-header">
        <div>
          <h3 className="font-headline">Funil de Vendas</h3>
          <span className="text-body-sm text-secondary">Análise por Estágio • Q3 2026</span>
        </div>
        <span className="material-symbols-outlined" style={{ color: 'var(--color-on-surface-variant)', fontSize: 20, cursor: 'pointer' }}>
          filter_list
        </span>
      </div>

      {/* Stage steps */}
      <div className="pipeline-stages-container">
        <div className="pipeline-connecting-line" />
        {stages.map((stage, index) => (
          <div key={stage.id} className="pipeline-stage">
            <div className={`stage-icon-container ${index < 2 ? 'active' : 'inactive'}`}>
              <span className="material-symbols-outlined">{stage.icon}</span>
            </div>
            <p className={`stage-name text-label-caps ${index < 2 ? 'active-text' : 'inactive-text'}`}>
              {stageNameMap[stage.name] ?? stage.name}
            </p>
            <p className="stage-stats">
              {stage.dealCount} Oport.
              <br />
              <span style={{ fontVariantNumeric: 'tabular-nums' }}>
                R$ {(stage.totalValue / 1000).toLocaleString('pt-BR')}k
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Proportional value bars */}
      <div style={{ marginTop: 'auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 8,
          fontSize: 11,
          color: 'var(--color-on-surface-variant)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontWeight: 600,
        }}>
          <span>Volume por Estágio</span>
          <span>Total: R$ {((stages.reduce((a, s) => a + s.totalValue, 0)) / 1000).toLocaleString('pt-BR')}k</span>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 72 }}>
          {stages.map((stage, idx) => {
            const pct = (stage.totalValue / maxValue) * 100;
            const colors = [
              'var(--color-primary)',
              'var(--color-primary-container)',
              'var(--color-secondary)',
              'var(--color-tertiary)',
            ];
            return (
              <div
                key={stage.id}
                title={`${stageNameMap[stage.name] ?? stage.name}: R$ ${stage.totalValue.toLocaleString('pt-BR')}`}
                style={{
                  flex: 1,
                  height: `${pct}%`,
                  background: colors[idx],
                  borderRadius: '6px 6px 0 0',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s, height 0.8s cubic-bezier(0.16,1,0.3,1)',
                  opacity: 0.7 + idx * 0.05,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = String(0.7 + idx * 0.05))}
              />
            );
          })}
        </div>
        <div style={{
          display: 'flex',
          gap: 6,
          borderTop: '1px solid var(--color-outline-variant)',
          paddingTop: 4,
        }}>
          {stages.map((stage, idx) => {
            const colors = [
              'var(--color-primary)',
              'var(--color-primary-container)',
              'var(--color-secondary)',
              'var(--color-tertiary)',
            ];
            return (
              <div key={stage.id} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: colors[idx], fontWeight: 600 }}>
                {stage.dealCount}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
