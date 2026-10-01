export interface PilotRequestSubmission {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submittedAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PlatformModule {
  id: number;
  title: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface WorkStep {
  stepNumber: string;
  title: string;
  description: string;
  evidenceItems?: string[];
  subtext?: string;
}

export interface CustomerPersona {
  title: string;
  description: string;
  examples?: string[];
  isFuture?: boolean;
}

export interface CommercialTier {
  title: string;
  pricingLabel: string;
  description: string;
  badge?: string;
  features: string[];
  ctaText: string;
}
