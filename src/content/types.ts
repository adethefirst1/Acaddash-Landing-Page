export interface TocItem {
  id: string;
  label: string;
  level?: 2 | 3;
}

export interface SectionBlock {
  id: string;
  title: string;
  content: string[];
}

export interface SubDocument {
  id: string;
  title: string;
  businessHeader: string;
  metadataLine: string;
  lastUpdated: string;
  sections: SectionBlock[];
  notice?: string;
}

export interface LegalPageContent {
  pageTitle: string;
  businessHeader: string;
  metadataLine: string;
  lastUpdated: string;
  toc: TocItem[];
  // For single-document pages:
  sections?: SectionBlock[];
  notice?: string;
  // For multi-document pages (e.g. Terms):
  subDocuments?: SubDocument[];
}
