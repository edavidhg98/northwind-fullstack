import { Product } from '../product/product.model';

export interface Category {
  _id?: string;
  categoryName: String;
  description: String;


  products?: Product[];
}
