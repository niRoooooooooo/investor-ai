// Provisional UI contract. Will be revised when the backend is planned.

import { DocumentItem, DocumentFilter, DocumentSort } from '@/types/document';

export interface DocumentService {
  getDocuments(params?: {
    filter?: DocumentFilter;
    sort?: DocumentSort;
    searchQuery?: string;
  }): Promise<DocumentItem[]>;
  getDocumentById(id: string): Promise<DocumentItem | null>;
  deleteDocument(id: string): Promise<{ success: boolean }>;
}
