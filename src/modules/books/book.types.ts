export interface Book {
  id: number;
  name?: string;
  title?: string;
  author: string;
  year: number;
}

export interface CreateBookInput {
  name: string;
  author: string;
  year: number;
}

export interface UpdateBookInput {
  name?: string;
  author?: string;
  year?: number;
}
