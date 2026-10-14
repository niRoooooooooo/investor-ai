// Provisional UI contract. Will be revised when the backend is planned.

import { DocumentService } from '../document.service';
import { DocumentItem, DocumentFilter, DocumentSort } from '@/types/document';
import { SAMPLE_DOCUMENTS } from '@/mocks/sample-documents';

export class MockDocumentService implements DocumentService {
  private documents: DocumentItem[] = [...SAMPLE_DOCUMENTS];

  async getDocuments(params?: {
    filter?: DocumentFilter;
    sort?: DocumentSort;
    searchQuery?: string;
  }): Promise<DocumentItem[]> {
    await new Promise((r) => setTimeout(r, 250));

    let result = [...this.documents];

    // Filter
    if (params?.filter && params.filter !== 'all') {
      if (params.filter === 'high_risk') {
        result = result.filter((d) => d.verdict === 'HIGH_RISK');
      } else if (params.filter === 'consult_lawyer') {
        result = result.filter((d) => d.verdict === 'CONSULT_LAWYER');
      } else {
        result = result.filter((d) => d.category === params.filter);
      }
    }

    // Search query
    if (params?.searchQuery && params.searchQuery.trim() !== '') {
      const q = params.searchQuery.toLowerCase().trim();
      if (q === 'empty-state-demo' || q === '###none###') {
        return [];
      }
      result = result.filter(
        (d) =>
          d.titleEn.toLowerCase().includes(q) ||
          d.titleBn.toLowerCase().includes(q) ||
          d.categoryLabelEn.toLowerCase().includes(q)
      );
    }

    // Sort
    if (params?.sort) {
      if (params.sort === 'title') {
        result.sort((a, b) => a.titleEn.localeCompare(b.titleEn));
      } else if (params.sort === 'risk') {
        result.sort((a, b) => b.redFlagCount - a.redFlagCount);
      }
    }

    return result;
  }

  async getDocumentById(id: string): Promise<DocumentItem | null> {
    await new Promise((r) => setTimeout(r, 150));
    return this.documents.find((d) => d.id === id) || null;
  }

  async deleteDocument(id: string): Promise<{ success: boolean }> {
    await new Promise((r) => setTimeout(r, 350));
    this.documents = this.documents.filter((d) => d.id !== id);
    return { success: true };
  }
}
