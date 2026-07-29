import React from 'react';

interface SidebarProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onToggleCollapse: () => void;
  onToggleMobile: () => void;
  isMobile: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  isMobileOpen,
  onToggleCollapse,
  onToggleMobile,
  isMobile,
}) => {
  const collapsedClass = isMobile ? '' : (isCollapsed ? 'collapsed' : '');
  const mobileClass = isMobile ? (isMobileOpen ? 'mobile-open' : 'mobile-closed') : '';

  return (
    <aside className={`sidebar ${collapsedClass} ${mobileClass}`}>
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-logo">
            <span
              className="material-symbols-outlined logo-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              dataset
            </span>
          </div>
          {(!isCollapsed || isMobile) && (
            <div className="brand-text">
              <h1 className="sidebar-title font-headline">OriDeal</h1>
              <p className="sidebar-subtitle text-label-caps">Gestão Comercial</p>
            </div>
          )}
        </div>
        {isMobile ? (
          <button
            className="collapse-btn"
            onClick={onToggleMobile}
            title="Fechar menu"
            aria-label="Fechar menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        ) : (
          <button
            className="collapse-btn"
            onClick={onToggleCollapse}
            title={isCollapsed ? 'Expandir menu' : 'Recolher menu'}
            aria-label={isCollapsed ? 'Expandir menu' : 'Recolher menu'}
          >
            <span className="material-symbols-outlined">
              {isCollapsed ? 'chevron_right' : 'chevron_left'}
            </span>
          </button>
        )}
      </div>

      <nav className="sidebar-nav">
        <a className="nav-item active" href="#" title="Painel Geral">
          <span className="material-symbols-outlined">dashboard</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Painel Geral</span>}
        </a>
        <a className="nav-item" href="#" title="Clientes">
          <span className="material-symbols-outlined">group</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Clientes</span>}
        </a>
        <a className="nav-item" href="#" title="Propostas">
          <span className="material-symbols-outlined">description</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Propostas</span>}
        </a>
        <a className="nav-item" href="#" title="Contratos">
          <span className="material-symbols-outlined">verified</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Contratos</span>}
        </a>
        <a className="nav-item" href="#" title="Configurações">
          <span className="material-symbols-outlined">settings</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Configurações</span>}
        </a>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile" title="Marcus Vane - Diretor de Operações">
          <div className="avatar">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8RKuK49ef7pTPmGa-Q3lPRG9zfvhEHUfJt1V-HPN4_UrsGpywiUKgdOqmJhXwuaHJquA_rVsfj9ERtPGaRjKhHtcbqhKn05EqRF5o2QM79UyHlQevkL-LSfaoOb8w9rkn_GdyhJTEHSEP0Ncqm0Ay0ELDR3Own4KteT8ThKZePll1l4CJySsqAzYUS7AhTcikSQFGfvsZq4Tz91PDmw-UH_iWfUsGTMb4o2VFvId0rKxKfc6OtIoTkg"
              alt="Marcus Vane"
            />
          </div>
          {(!isCollapsed || isMobile) && (
            <div className="user-info">
              <p className="user-name text-label-caps">Marcus Vane</p>
              <p className="user-role">Diretor de Operações</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
