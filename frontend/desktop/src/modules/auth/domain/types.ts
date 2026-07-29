export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
