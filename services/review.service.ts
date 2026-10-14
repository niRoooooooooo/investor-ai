// Provisional UI contract. Will be revised when the backend is planned.

import { Review, VitalTerms } from '@/types/review';
import { VerdictType } from '@/types/verdict';

export interface CreateReviewParams {
  file?: File;
  pastedText?: string;
  role: 'tenant' | 'landlord';
  agreementType: string;
}

export interface ReviewService {
  getReviewById(id: string, simulateVerdict?: VerdictType): Promise<Review | null>;
  extractVitalTerms(fileOrText: { name: string; size?: number }): Promise<VitalTerms>;
  startAnalysis(params: CreateReviewParams): Promise<{ reviewId: string }>;
  getProcessingSteps(): Promise<{ id: number; titleEn: string; titleBn: string; completed: boolean }[]>;
}
