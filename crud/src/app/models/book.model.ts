import { Category } from "./category.model";

export interface Book {
  id?: number;
  title: string;
  author: string;
  price: number;
  category?: Category;
}
