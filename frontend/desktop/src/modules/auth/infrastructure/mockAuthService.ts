import type { AuthRepository } from '../domain/AuthRepository';
import type { LoginCredentials, User } from '../domain/types';

const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'User Name',
    email: 'user@example.com',
    role: 'Role',
    avatarUrl: '',
  },
];

const STORAGE_KEY = 'auth_user';

export class MockAuthService implements AuthRepository {
  async login(credentials: LoginCredentials): Promise<User> {
    await delay(800);

    const user = MOCK_USERS.find((u) => u.email === credentials.email);

    if (!user || credentials.password !== '123456') {
      throw new Error('Invalid email or password.');
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  async logout(): Promise<void> {
    await delay(200);
    localStorage.removeItem(STORAGE_KEY);
  }

  async getCurrentUser(): Promise<User | null> {
    await delay(100);
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as User) : null;
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
