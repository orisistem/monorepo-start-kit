import React, { ReactNode, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { TopNav } from '../components/TopNav';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="layout-root">
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      <TopNav isSidebarCollapsed={isSidebarCollapsed} onToggleSidebar={toggleSidebar} />
      <main className={`main-content ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="content-container">{children}</div>
      </main>
    </div>
  );
};
