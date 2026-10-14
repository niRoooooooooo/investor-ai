// Provisional UI contract. Will be revised when the backend is planned.

import { LawService } from '../law.service';
import { LawReference } from '@/types/law';
import { SAMPLE_LAWS } from '@/mocks/sample-laws';

export class MockLawService implements LawService {
  async getLawReferenceById(id: string): Promise<LawReference | null> {
    await new Promise((r) => setTimeout(r, 150));
    return SAMPLE_LAWS[id] || SAMPLE_LAWS.sec10_rent_control_1991;
  }

  async searchLaws(query: string): Promise<LawReference[]> {
    await new Promise((r) => setTimeout(r, 200));
    const q = query.toLowerCase();
    return Object.values(SAMPLE_LAWS).filter(
      (l) => l.actTitleEn.toLowerCase().includes(q) || l.section.toLowerCase().includes(q)
    );
  }
}
