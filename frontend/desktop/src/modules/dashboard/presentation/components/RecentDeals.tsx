import React from 'react';
import { Deal } from '../../domain/types';

interface RecentDealsProps {
  deals: Deal[] | null;
}

const statusMap: Record<Deal['status'], { label: string; classStyle: string; icon: string }> = {
  'Contract Signed': { label: 'Contrato Assinado',  classStyle: 'status-signed',      icon: 'task_alt'    },
  Negotiation:       { label: 'Em Negociação',       classStyle: 'status-negotiation', icon: 'handshake'   },
  Active:            { label: 'Ativo',               classStyle: 'status-active',      icon: 'bolt'        },
  Budgeting:         { label: 'Em Orçamento',        classStyle: 'status-budgeting',   icon: 'calculate'   },
  Proposed:          { label: 'Proposta Enviada',    classStyle: 'status-proposed',    icon: 'send'        },
};

const avatarColors = [
  { bg: 'linear-gradient(135deg, #4d8eff, #adc6ff)', fg: '#001a42' },
  { bg: 'linear-gradient(135deg, #00a572, #4edea3)', fg: '#002113' },
  { bg: 'linear-gradient(135deg, #df7412, #ffb786)', fg: '#311400' },
  { bg: 'linear-gradient(135deg, #7e57c2, #b39ddb)', fg: '#1a0050' },
  { bg: 'linear-gradient(135deg, #e91e63, #f48fb1)', fg: '#4a0020' },
];

export const RecentDeals: React.FC<RecentDealsProps> = ({ deals }) => {
  if (!deals) {
    return (
      <div className="recent-deals-card loading" style={{ padding: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span className="material-symbols-outlined" style={{ fontSize: 32, opacity: 0.4 }}>receipt_long</span>
        <span style={{ fontSize: 13 }}>Carregando oportunidades...</span>
      </div>
    );
  }

  return (
    <div className="recent-deals-card">
      <div className="recent-deals-header">
        <div>
          <h3 className="font-headline">Atividade Recente de Negócios</h3>
          <p style={{ margin: '2px 0 0', fontSize: 12, color: 'var(--color-on-surface-variant)' }}>
            {deals.length} oportunidades ativas este trimestre
          </p>
        </div>
        <button className="view-all-btn">Ver Todos</button>
      </div>

      <div className="table-container">
        <table className="deals-table">
          <thead>
            <tr>
              <th className="text-label-caps">Cliente</th>
              <th className="text-label-caps">Valor da Proposta</th>
              <th className="text-label-caps">Cronograma</th>
              <th className="text-label-caps">Status</th>
              <th className="text-label-caps" style={{ textAlign: 'right' }}>Ação</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal, i) => {
              const statusInfo = statusMap[deal.status] ?? {
                label: deal.status,
                classStyle: 'status-default',
                icon: 'circle',
              };
              const color = avatarColors[i % avatarColors.length];

              return (
                <tr key={deal.id} className="deal-row">
                  {/* Client */}
                  <td className="deals-cell">
                    <div className="client-info">
                      <div
                        className="client-avatar font-headline"
                        style={{ background: color.bg, color: color.fg }}
                      >
                        {deal.clientName.charAt(0)}
                      </div>
                      <div>
                        <p className="client-name">{deal.clientName}</p>
                        <p className="client-project">{deal.projectName}</p>
                      </div>
                    </div>
                  </td>

                  {/* Value */}
                  <td className="deals-cell text-data-tabular">
                    <span style={{ fontWeight: 600, color: 'var(--color-on-surface)' }}>
                      R$ {deal.value.toLocaleString('pt-BR')}
                    </span>
                  </td>

                  {/* Schedule */}
                  <td className="deals-cell text-secondary">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: 'var(--color-outline)' }}>
                        date_range
                      </span>
                      {deal.startDate} → {deal.endDate}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="deals-cell">
                    <span className={`status-badge text-label-caps ${statusInfo.classStyle}`}>
                      <span className="material-symbols-outlined" style={{ fontSize: 12, marginRight: 4, fontVariationSettings: "'FILL' 1" }}>
                        {statusInfo.icon}
                      </span>
                      {statusInfo.label}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="deals-cell" style={{ textAlign: 'right' }}>
                    <button className="action-menu-btn" title="Mais opções" aria-label="Mais opções">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
