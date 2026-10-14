// Provisional UI contract. Will be revised when the backend is planned.

import { AuthService } from './auth.service';
import { DocumentService } from './document.service';
import { ReviewService } from './review.service';
import { LawService } from './law.service';
import { SettingsService } from './settings.service';

import { MockAuthService } from './mock/mock-auth.service';
import { MockDocumentService } from './mock/mock-document.service';
import { MockReviewService } from './mock/mock-review.service';
import { MockLawService } from './mock/mock-law.service';
import { MockSettingsService } from './mock/mock-settings.service';

/**
 * Service Registry / Locator
 * All components must interact with services through these instances.
 * In later phases, these mock implementations will be switched to real API clients.
 */
export const authService: AuthService = new MockAuthService();
export const documentService: DocumentService = new MockDocumentService();
export const reviewService: ReviewService = new MockReviewService();
export const lawService: LawService = new MockLawService();
export const settingsService: SettingsService = new MockSettingsService();

export * from './auth.service';
export * from './document.service';
export * from './review.service';
export * from './law.service';
export * from './settings.service';
