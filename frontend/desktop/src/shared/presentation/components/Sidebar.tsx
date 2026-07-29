import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../modules/auth/application/AuthStore';

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
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const collapsedClass = isMobile ? '' : (isCollapsed ? 'collapsed' : '');
  const mobileClass = isMobile ? (isMobileOpen ? 'mobile-open' : 'mobile-closed') : '';

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

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
        <NavLink className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/" title="Painel Geral" end>
          <span className="material-symbols-outlined">dashboard</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Painel Geral</span>}
        </NavLink>
        <NavLink className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/clientes" title="Clientes">
          <span className="material-symbols-outlined">group</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Clientes</span>}
        </NavLink>
        <NavLink className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/propostas" title="Propostas">
          <span className="material-symbols-outlined">description</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Propostas</span>}
        </NavLink>
        <NavLink className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/contratos" title="Contratos">
          <span className="material-symbols-outlined">verified</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Contratos</span>}
        </NavLink>
        <NavLink className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/configuracoes" title="Configurações">
          <span className="material-symbols-outlined">settings</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Configurações</span>}
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile" title={`${user?.name} - ${user?.role}`}>
          <div className="avatar">
            <img
              src={user?.avatarUrl ?? ''}
              alt={user?.name ?? ''}
            />
          </div>
          {(!isCollapsed || isMobile) && (
            <div className="user-info">
              <p className="user-name text-label-caps">{user?.name}</p>
              <p className="user-role">{user?.role}</p>
            </div>
          )}
        </div>
        {(!isCollapsed || isMobile) && (
          <button className="logout-btn" onClick={handleLogout} title="Sair">
            <span className="material-symbols-outlined">logout</span>
            Sair
          </button>
        )}
      </div>
    </aside>
  );
};
