import { Order } from '../order/order.model';

export interface Shipper {
  _id?: string;
  companyName: String;
  phone: String;


  orders?: Order[];
}
