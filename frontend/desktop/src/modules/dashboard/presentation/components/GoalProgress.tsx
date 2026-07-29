import React, { useEffect, useState } from 'react';
import { DashboardMetrics } from '../../domain/types';

interface GoalProgressProps {
  metrics: DashboardMetrics | null;
}

/** Circular SVG progress ring */
const CircularProgress: React.FC<{ percentage: number }> = ({ percentage }) => {
  const [mounted, setMounted] = useState(false);
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (mounted ? (percentage / 100) * circumference : circumference);

  useEffect(() => {
    // Trigger animation after mount
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <svg width="130" height="130" style={{ transform: 'rotate(-90deg)' }}>
      {/* Track */}
      <circle
        cx="65"
        cy="65"
        r={radius}
        fill="none"
        stroke="var(--color-surface-container-high)"
        strokeWidth="10"
      />
      {/* Progress */}
      <circle
        cx="65"
        cy="65"
        r={radius}
        fill="none"
        stroke="url(#goalGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
      />
      <defs>
        <linearGradient id="goalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="var(--color-secondary-container)" />
          <stop offset="100%" stopColor="var(--color-secondary)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const GoalProgress: React.FC<GoalProgressProps> = ({ metrics }) => {
  if (!metrics) {
    return (
      <div className="goal-card loading">
        <span className="material-symbols-outlined" style={{ fontSize: 32, opacity: 0.4 }}>
          track_changes
        </span>
        <span style={{ marginTop: 8, fontSize: 13, color: 'var(--color-on-surface-variant)' }}>
          Carregando meta...
        </span>
      </div>
    );
  }

  const percentage = Math.min(
    100,
    (metrics.quarterlyGoalCurrent / metrics.quarterlyGoalTarget) * 100,
  );
  const remaining = metrics.quarterlyGoalTarget - metrics.quarterlyGoalCurrent;

  return (
    <div className="goal-card">
      <div className="goal-bg-visual" />

      {/* Header */}
      <div className="goal-header">
        <h3 className="font-headline">Meta Trimestral</h3>
        <div className="goal-icon-badge">
          <span className="material-symbols-outlined">track_changes</span>
        </div>
      </div>

      {/* Circular progress */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        margin: '8px 0 12px',
      }}>
        <CircularProgress percentage={percentage} />
        {/* Center text overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span className="font-headline" style={{
            fontSize: 22,
            fontWeight: 700,
            color: 'var(--color-on-surface)',
            lineHeight: 1,
          }}>
            {percentage.toFixed(0)}%
          </span>
          <span style={{ fontSize: 10, color: 'var(--color-on-surface-variant)', letterSpacing: '0.05em', marginTop: 2, textTransform: 'uppercase', fontWeight: 600 }}>
            atingido
          </span>
        </div>
      </div>

      {/* Values */}
      <div className="goal-current-info">
        <span className="font-headline goal-large-value">
          R$ {(metrics.quarterlyGoalCurrent / 1_000_000).toFixed(2).replace('.', ',')}M
        </span>
        <p className="goal-subtitle text-label-caps">Receita Atual</p>
      </div>

      {/* Footer */}
      <div className="goal-footer">
        <div className="goal-target-info text-label-caps">
          <span>Meta: R$ {(metrics.quarterlyGoalTarget / 1_000_000).toFixed(1).replace('.', ',')}M</span>
          <span style={{ color: 'var(--color-secondary)' }}>
            Faltam R$ {(remaining / 1_000).toLocaleString('pt-BR')}k
          </span>
        </div>
        <div className="goal-progress-bar-container">
          <div className="goal-progress-bar-fill" style={{ width: `${percentage}%` }} />
        </div>
        <p className="goal-feedback">
          "No caminho certo para superar a meta em 4,2%"
        </p>
      </div>
    </div>
  );
};
