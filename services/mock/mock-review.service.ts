// Provisional UI contract. Will be revised when the backend is planned.

import { ReviewService, CreateReviewParams } from '../review.service';
import { Review, VitalTerms } from '@/types/review';
import { VerdictType } from '@/types/verdict';
import {
  GULSHAN_RENT_REVIEW_DEFAULT,
  GULSHAN_VERDICT_LOOKS_FINE,
  GULSHAN_VERDICT_HIGH_RISK,
  GULSHAN_VERDICT_CONSULT_LAWYER,
} from '@/mocks/gulshan-rent-agreement';

export class MockReviewService implements ReviewService {
  async getReviewById(id: string, simulateVerdict?: VerdictType): Promise<Review | null> {
    await new Promise((r) => setTimeout(r, 200));

    if (id === 'error-state-demo') {
      throw new Error('Simulation of statutory analysis pipeline timeout. Please retry.');
    }

    if (simulateVerdict === 'LOOKS_FINE') return GULSHAN_VERDICT_LOOKS_FINE;
    if (simulateVerdict === 'HIGH_RISK') return GULSHAN_VERDICT_HIGH_RISK;
    if (simulateVerdict === 'CONSULT_LAWYER') return GULSHAN_VERDICT_CONSULT_LAWYER;

    return GULSHAN_RENT_REVIEW_DEFAULT;
  }

  async extractVitalTerms(fileOrText: { name: string; size?: number }): Promise<VitalTerms> {
    await new Promise((r) => setTimeout(r, 400));
    return GULSHAN_RENT_REVIEW_DEFAULT.vitalTerms;
  }

  async startAnalysis(params: CreateReviewParams): Promise<{ reviewId: string }> {
    await new Promise((r) => setTimeout(r, 500));
    return { reviewId: GULSHAN_RENT_REVIEW_DEFAULT.id };
  }

  async getProcessingSteps(): Promise<{ id: number; titleEn: string; titleBn: string; completed: boolean }[]> {
    return [
      { id: 1, titleEn: 'Reading & OCR extraction', titleBn: 'পঠন ও ওসিআর টেক্সট নিষ্কাশন', completed: true },
      { id: 2, titleEn: 'Finding and segmenting clauses', titleBn: 'চুক্তির শর্তাবলী শনাক্ত ও বিভাজন', completed: true },
      { id: 3, titleEn: 'Checking Bangladesh statutory law', titleBn: 'বাংলাদেশ সংবিধিবদ্ধ আইন যাচাই', completed: false },
      { id: 4, titleEn: 'Verification & Safe drafting', titleBn: 'আইনসম্মত সংশোধন ও চূড়ান্ত প্রতিবেদন', completed: false },
    ];
  }
}
