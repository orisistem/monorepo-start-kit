import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../shared/presentation/layouts/MainLayout';
import { AuthGuard } from '../modules/auth/presentation/AuthGuard';
import { LoginPage } from '../modules/auth/presentation/LoginPage';
import { DashboardPage } from '../modules/dashboard/presentation/DashboardPage';
import { ClientsPage } from '../modules/clients/presentation/ClientsPage';
import { ProposalsPage } from '../modules/proposals/presentation/ProposalsPage';
import { ContractsPage } from '../modules/contracts/presentation/ContractsPage';
import { SettingsPage } from '../modules/settings/presentation/SettingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AuthGuard />}>
          <Route element={<MainLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="clientes" element={<ClientsPage />} />
            <Route path="propostas" element={<ProposalsPage />} />
            <Route path="contratos" element={<ContractsPage />} />
            <Route path="configuracoes" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
