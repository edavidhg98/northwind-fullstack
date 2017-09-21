import { Order } from '../order/order.model';
import { Product } from '../product/product.model';

export interface OrderDetail {
  _id?: string;
  unitPrice: Number;
  quantity: Number;
  discount: Number;

  idOrder?: String;
  order?: Order;
  idProduct?: String;
  product?: Product;

}
