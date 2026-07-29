import React from 'react';

interface TopNavProps {
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ isSidebarCollapsed, onToggleSidebar }) => {
  return (
    <header className={`topnav ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="left-section">
        <button
          className="mobile-toggle-btn"
          onClick={onToggleSidebar}
          aria-label="Alternar menu lateral"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="search-container">
          <div className="search-input-wrapper">
            <span className="material-symbols-outlined search-icon">search</span>
            <input
              className="search-input text-body-sm"
              placeholder="Buscar propostas, clientes ou documentos..."
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="actions-container">
        <button className="action-button notification-button" title="Notificações">
          <span className="material-symbols-outlined">notifications</span>
          <span className="notification-badge"></span>
        </button>

        <button className="action-button" title="Ajuda">
          <span className="material-symbols-outlined">help_outline</span>
        </button>

        <div className="divider"></div>

        <div className="quarter-info" title="Período Fiscal">
          <span className="text-label-caps text-primary">FY24 Q3</span>
          <span className="material-symbols-outlined text-primary">calendar_month</span>
        </div>
      </div>
    </header>
  );
};
