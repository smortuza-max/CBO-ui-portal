export interface ITrack {
  name: string;
  initials: string;
}

export interface IMatrix {
  summary: ISummary[];
  matrix_content: IMatrixContent[];
}

export interface ISummary {
  title: string;
  description: string;
  points: string[];
  like: boolean | null;
}

export interface IMatrixContent {
  section: string;
  categories: ICatergory;
}

export interface ICatergory {
  title: string;
  subcategories: ISubcategory;
}

export interface ISubcategory {
  name: string;
  columns: IColumns;
}

export interface IColumns {
  column_name: string;
  value: string | null;
}
