import React, { useState, useRef, useEffect } from 'react';

interface TopNavProps {
  isSidebarCollapsed: boolean;
  isMobileOpen: boolean;
  onToggleSidebar: () => void;
  onToggleMobile: () => void;
  isMobile: boolean;
}

export const TopNav: React.FC<TopNavProps> = ({
  isSidebarCollapsed,
  isMobileOpen,
  onToggleSidebar,
  onToggleMobile,
  isMobile,
}) => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchExpanded]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`topnav ${!isMobile && isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="left-section">
        <button
          className="mobile-toggle-btn"
          onClick={isMobile ? onToggleMobile : onToggleSidebar}
          aria-label={isMobile ? 'Abrir menu lateral' : 'Alternar menu lateral'}
        >
          <span className="material-symbols-outlined">{isMobile && isMobileOpen ? 'close' : 'menu'}</span>
        </button>

        <div className={`search-container ${searchExpanded ? 'expanded' : ''}`} ref={searchRef}>
          {(!isMobile || searchExpanded) && (
            <div className="search-input-wrapper">
              <span className="material-symbols-outlined search-icon">search</span>
              <input
                ref={inputRef}
                className="search-input text-body-sm"
                placeholder={isMobile ? 'Buscar...' : 'Buscar propostas, clientes ou documentos...'}
                type="text"
              />
            </div>
          )}
          {isMobile && !searchExpanded && (
            <button
              className="action-button"
              onClick={() => setSearchExpanded(true)}
              title="Buscar"
              aria-label="Buscar"
            >
              <span className="material-symbols-outlined">search</span>
            </button>
          )}
        </div>
      </div>

      <div className={`actions-container ${searchExpanded ? 'hidden-mobile' : ''}`}>
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
