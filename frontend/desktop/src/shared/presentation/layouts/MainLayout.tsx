import React, { ReactNode, useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { TopNav } from '../components/TopNav';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      if (!e.matches) setIsMobileOpen(false);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleCollapse = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const toggleMobile = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <div className="layout-root">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isMobileOpen={isMobileOpen}
        onToggleCollapse={toggleCollapse}
        onToggleMobile={toggleMobile}
        isMobile={isMobile}
      />
      <TopNav
        isSidebarCollapsed={isSidebarCollapsed}
        isMobileOpen={isMobileOpen}
        onToggleSidebar={toggleCollapse}
        onToggleMobile={toggleMobile}
        isMobile={isMobile}
      />
      <main className="main-content">
        <div className="content-container">{children}</div>
      </main>
      {isMobile && isMobileOpen && <div className="sidebar-backdrop" onClick={toggleMobile} />}
    </div>
  );
};
