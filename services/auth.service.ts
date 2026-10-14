// Provisional UI contract. Will be revised when the backend is planned.

import { User } from '@/types/user';

export interface AuthService {
  getCurrentUser(): Promise<User | null>;
  sendOtp(target: string, type: 'email' | 'phone'): Promise<{ success: boolean; message: string }>;
  verifyOtp(code: string): Promise<{ success: boolean; user?: User; error?: string }>;
  loginWithGoogle(): Promise<{ success: boolean; user?: User }>;
  logout(): Promise<void>;
  isAuthenticated(): boolean;
}
