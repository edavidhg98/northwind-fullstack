import { Product } from '../product/product.model';

export interface Supplier {
  _id?: string;
  homePage: String;
  companyName: String;
  contactName: String;
  contactTitle: String;
  address: String;
  city: String;
  region: String;
  postalCode: String;
  country: String;
  phone: String;
  fax: String;


  products?: Product[];
}
