import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../shared/presentation/layouts/MainLayout';
import { AuthGuard } from '../modules/auth/presentation/AuthGuard';
import { LoginPage } from '../modules/auth/presentation/LoginPage';
import { DashboardPage } from '../modules/dashboard/presentation/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AuthGuard />}>
          <Route element={<MainLayout />}>
            <Route index element={<DashboardPage />} />
            {/* Add your module routes here */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
