import type { AuthRepository } from '../domain/AuthRepository';
import type { LoginCredentials, User } from '../domain/types';

const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Marcus Vane',
    email: 'marcus@orideal.com',
    role: 'Diretor de Operações',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8RKuK49ef7pTPmGa-Q3lPRG9zfvhEHUfJt1V-HPN4_UrsGpywiUKgdOqmJhXwuaHJquA_rVsfj9ERtPGaRjKhHtcbqhKn05EqRF5o2QM79UyHlQevkL-LSfaoOb8w9rkn_GdyhJTEHSEP0Ncqm0Ay0ELDR3Own4KteT8ThKZePll1l4CJySsqAzYUS7AhTcikSQFGfvsZq4Tz91PDmw-UH_iWfUsGTMb4o2VFvId0rKxKfc6OtIoTkg',
  },
];

const STORAGE_KEY = 'orideal_user';

export class MockAuthService implements AuthRepository {
  async login(credentials: LoginCredentials): Promise<User> {
    await delay(800);

    const user = MOCK_USERS.find((u) => u.email === credentials.email);

    if (!user || credentials.password !== '123456') {
      throw new Error('Email ou senha inválidos.');
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
