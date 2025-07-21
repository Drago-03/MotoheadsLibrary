export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  joinDate: string;
  favoriteCarBrand?: string;
}

export interface DictionaryTerm {
  id: string;
  term: string;
  definition: string;
  category: 'engine' | 'body' | 'racing' | 'transmission' | 'suspension' | 'electrical' | 'general';
  pronunciation?: string;
  relatedTerms?: string[];
  image?: string;
}

export interface GameState {
  level: number;
  score: number;
  lives: number;
  speed: number;
  distance: number;
  isPlaying: boolean;
  isPaused: boolean;
  selectedCar: string;
}

export interface LoadingState {
  progress: number;
  stage: string;
  isComplete: boolean;
}