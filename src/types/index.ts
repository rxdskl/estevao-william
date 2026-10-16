export interface MatchStat {
  id: string;
  date: string;
  competition: 'Brasileirão' | 'Copa Libertadores' | 'Paulistão' | 'Copa do Brasil' | 'Seleção';
  opponent: string;
  score: string;
  result: 'win' | 'draw' | 'loss';
  isHome: boolean;
  minutes: number;
  goals: number;
  assists: number;
  dribbles: { completed: number; attempted: number };
  rating: number;
  notes: string;
  specialRecord?: string;
}

export interface SeasonStats {
  season: string;
  club: string;
  matches: number;
  goals: number;
  assists: number;
  minutes: number;
  shotsOnTarget: number;
  keyPasses: number;
  dribblesCompleted: number;
  dribbleSuccessRate: number;
  yellowCards: number;
  trophies: string[];
}

export interface BioChapter {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  location: string;
  content: string[];
  milestones: string[];
  keyQuote?: {
    text: string;
    author: string;
    role: string;
  };
  keyStats?: { label: string; value: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'action' | 'celebration' | 'selecao' | 'portrait';
  imageSrc: string;
  date: string;
  location: string;
  context: string;
  aspectRatio: '16:9' | '4:3' | '3:4';
  statsHighlight?: string;
}

export interface ComparisonPlayer {
  name: string;
  clubAt17: string;
  matches: number;
  goals: number;
  assists: number;
  goalContributions: number;
  minsPerContribution: number;
  year: string;
  highlight: string;
}

export interface TacticalSkill {
  name: string;
  score: number;
  description: string;
}

export interface SignatureMove {
  id: string;
  name: string;
  subname: string;
  description: string;
  howItWorks: string;
  effectiveness: string;
  pitchCoordinates: {
    start: { x: number; y: number };
    mid: { x: number; y: number };
    finish: { x: number; y: number };
    target: { x: number; y: number };
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
