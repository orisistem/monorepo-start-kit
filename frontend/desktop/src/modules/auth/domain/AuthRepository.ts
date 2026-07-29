import type { LoginCredentials, User } from './types';

export interface AuthRepository {
  login(credentials: LoginCredentials): Promise<User>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<User | null>;
}
