import { Category } from '../category/category.model';
import { OrderDetail } from '../order-detail/order-detail.model';
import { Supplier } from '../supplier/supplier.model';

export interface Product {
  _id?: string;
  discontinued: Boolean;
  productName: String;
  quantityPerUnit: String;
  unitPrice: Number;
  unitsInStock: Number;
  unitsOnOrder: Number;
  reorderLevel: Number;

  idCategory?: String;
  category?: Category;
  idSupplier?: String;
  supplier?: Supplier;

  orderDetails?: OrderDetail[];
}
