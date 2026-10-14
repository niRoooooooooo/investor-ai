// Provisional UI contract. Will be revised when the backend is planned.

import { AuthService } from '../auth.service';
import { User } from '@/types/user';
import { SAMPLE_USER } from '@/mocks/sample-user';

export class MockAuthService implements AuthService {
  private currentUser: User | null = SAMPLE_USER;

  async getCurrentUser(): Promise<User | null> {
    await new Promise((r) => setTimeout(r, 150));
    return this.currentUser;
  }

  async sendOtp(target: string, type: 'email' | 'phone'): Promise<{ success: boolean; message: string }> {
    await new Promise((r) => setTimeout(r, 400));
    return {
      success: true,
      message: `Verification code sent to ${target}`,
    };
  }

  async verifyOtp(code: string): Promise<{ success: boolean; user?: User; error?: string }> {
    await new Promise((r) => setTimeout(r, 600));

    // Simulated error case for wrong OTP
    if (code === '0000' || code.includes('99')) {
      return {
        success: false,
        error: 'Invalid verification code. Try entering any other code (e.g. 1234).',
      };
    }

    this.currentUser = SAMPLE_USER;
    return {
      success: true,
      user: this.currentUser,
    };
  }

  async loginWithGoogle(): Promise<{ success: boolean; user?: User }> {
    await new Promise((r) => setTimeout(r, 500));
    this.currentUser = SAMPLE_USER;
    return {
      success: true,
      user: this.currentUser,
    };
  }

  async logout(): Promise<void> {
    await new Promise((r) => setTimeout(r, 100));
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
}
