export interface ITrack {
  name: string;
  initials: string;
}

export interface IMatrix {
  summary: ISummary[];
}

export interface ISummary {
  title: string;
  description: string;
  points: string[];
  like: boolean | null;
}
