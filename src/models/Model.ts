export interface IModel {
  tutorials: {
    id: number;
    title: string;
    author: string;
    created_at: string;
  }[];

  tutorial: {
    id: number;
    title: string;
    author: string;
    created_at: string;
  };
}
