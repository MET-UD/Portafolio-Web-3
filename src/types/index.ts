export interface DidacticType {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  technologies: string[];
  pedagogicalPurpose: string;
  iconName: string;
  colorGradient: string;
}

export interface ComparisonRow {
  didacticType: string;
  techCore: string;
  pedagogicalPurpose: string;
  targetFocus: string;
}

export interface AttributeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  academicKey: string;
}

export interface AttributeCategory {
  id: string;
  code: string;
  title: string;
  description: string;
  attributes: AttributeItem[];
}

export interface PracticalCase {
  id: string;
  caseNumber: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  theme: 'ai-data' | 'vr-immersive' | 'llm-dialogue' | 'dua-accessible';
  targetAudience: {
    title: string;
    description: string;
    context: string;
  };
  didacticSequence: {
    title: string;
    description: string;
    tools: string[];
    steps: {
      step: number;
      phase: string;
      action: string;
    }[];
  };
  expectedImpact: {
    title: string;
    description: string;
    indicators: string[];
  };
}
