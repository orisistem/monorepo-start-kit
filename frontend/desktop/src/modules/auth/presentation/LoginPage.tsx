import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../application/AuthStore';

export const LoginPage = () => {
  const { login, isLoading, error, clearError } = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/', { replace: true });
    } catch {
      // error is already set in store
    }
  };

  return (
    <div className="login-root">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <span className="material-symbols-outlined logo-icon" style={{ fontVariationSettings: "'FILL' 1" }}>
              dataset
            </span>
          </div>
          <h1 className="text-display-lg font-headline">OriDeal</h1>
          <p className="text-body-md">Gestão Comercial</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label className="text-label-caps" htmlFor="email">Email</label>
            <input
              id="email"
              className="field-input"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearError(); }}
              required
              autoFocus
            />
          </div>

          <div className="field-group">
            <label className="text-label-caps" htmlFor="password">Senha</label>
            <input
              id="password"
              className="field-input"
              type="password"
              placeholder="••••••"
              value={password}
              onChange={(e) => { setPassword(e.target.value); clearError(); }}
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button className="login-submit-btn" type="submit" disabled={isLoading}>
            {isLoading ? 'Entrando…' : 'Entrar'}
          </button>
        </form>

        <p className="login-hint">
          Use <strong>marcus@orideal.com</strong> / <strong>123456</strong>
        </p>
      </div>
    </div>
  );
};
