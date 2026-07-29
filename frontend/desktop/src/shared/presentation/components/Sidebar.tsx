import { useState, useRef, useEffect } from 'react';
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const wrapperRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const collapsedClass = isMobile ? '' : (isCollapsed ? 'collapsed' : '');
  const mobileClass = isMobile ? (isMobileOpen ? 'mobile-open' : 'mobile-closed') : '';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
      return;
    }
    if (profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect();
      const dropdownHeight = 88;
      const spaceAbove = rect.top;

      if (spaceAbove >= dropdownHeight + 8) {
        setDropdownStyle({
          position: 'fixed',
          bottom: `${window.innerHeight - rect.top + 4}px`,
          left: isCollapsed && !isMobile ? `${rect.left + 56}px` : `${rect.left}px`,
          width: isCollapsed && !isMobile ? '180px' : `${rect.width}px`,
        });
      } else {
        setDropdownStyle({
          position: 'fixed',
          top: `${rect.bottom + 4}px`,
          left: isCollapsed && !isMobile ? `${rect.left + 56}px` : `${rect.left}px`,
          width: isCollapsed && !isMobile ? '180px' : `${rect.width}px`,
        });
      }
    }
    setDropdownOpen(true);
  };

  const handleLogout = async () => {
    setDropdownOpen(false);
    await logout();
    navigate('/login', { replace: true });
  };

  const handleNavClick = () => {
    setDropdownOpen(false);
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
        <NavLink onClick={handleNavClick} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/" title="Painel Geral" end>
          <span className="material-symbols-outlined">dashboard</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Painel Geral</span>}
        </NavLink>
        <NavLink onClick={handleNavClick} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/clientes" title="Clientes">
          <span className="material-symbols-outlined">group</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Clientes</span>}
        </NavLink>
        <NavLink onClick={handleNavClick} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/propostas" title="Propostas">
          <span className="material-symbols-outlined">description</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Propostas</span>}
        </NavLink>
        <NavLink onClick={handleNavClick} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/contratos" title="Contratos">
          <span className="material-symbols-outlined">verified</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Contratos</span>}
        </NavLink>
        <NavLink onClick={handleNavClick} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/configuracoes" title="Configurações">
          <span className="material-symbols-outlined">settings</span>
          {(!isCollapsed || isMobile) && <span className="text-label-caps">Configurações</span>}
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile-wrapper" ref={wrapperRef}>
          <div
            ref={profileRef}
            className="user-profile"
            title={`${user?.name} - ${user?.role}`}
            onClick={toggleDropdown}
          >
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

          {dropdownOpen && (
            <div className="user-dropdown" style={dropdownStyle}>
              <NavLink
                className="dropdown-item"
                to="/configuracoes"
                onClick={() => setDropdownOpen(false)}
              >
                <span className="material-symbols-outlined">settings</span>
                Configurações
              </NavLink>
              <button className="dropdown-item" onClick={handleLogout}>
                <span className="material-symbols-outlined">logout</span>
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
