// Provisional UI contract. Will be revised when the backend is planned.

import { LawReference } from '@/types/law';

export interface LawService {
  getLawReferenceById(id: string): Promise<LawReference | null>;
  searchLaws(query: string): Promise<LawReference[]>;
}
