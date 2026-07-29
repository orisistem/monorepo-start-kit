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
  const total = stages.reduce((a, s) => a + s.totalValue, 0);
  const colors = [
    'var(--color-primary)',
    'var(--color-primary-container)',
    'var(--color-secondary)',
    'var(--color-tertiary)',
  ];

  return (
    <div className="pipeline-card">
      <div className="pipeline-header">
        <div>
          <h3 className="font-headline">Funil de Vendas</h3>
          <span className="text-body-sm text-secondary">Análise por Estágio • Q3 2026</span>
        </div>
        <span className="material-symbols-outlined pipeline-filter-icon">filter_list</span>
      </div>

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

      <div style={{ marginTop: 'auto' }}>
        <div className="pipeline-volume-header">
          <span>Volume por Estágio</span>
          <span>Total: R$ {(total / 1000).toLocaleString('pt-BR')}k</span>
        </div>
        <div className="pipeline-bars">
          {stages.map((stage, idx) => {
            const pct = (stage.totalValue / maxValue) * 100;
            return (
              <div
                key={stage.id}
                title={`${stageNameMap[stage.name] ?? stage.name}: R$ ${stage.totalValue.toLocaleString('pt-BR')}`}
                className="pipeline-bar"
                style={{
                  height: `${pct}%`,
                  background: colors[idx],
                  opacity: 0.7 + idx * 0.05,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = String(0.7 + idx * 0.05))}
              />
            );
          })}
        </div>
        <div className="pipeline-bar-labels">
          {stages.map((stage, idx) => (
            <div key={stage.id} style={{ color: colors[idx] }}>
              {stage.dealCount}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
