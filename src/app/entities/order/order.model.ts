import { Customer } from '../customer/customer.model';
import { Employee } from '../employee/employee.model';
import { OrderDetail } from '../order-detail/order-detail.model';
import { Shipper } from '../shipper/shipper.model';

export interface Order {
  _id?: string;
  orderDate: Date;
  requiredDate: Date;
  shippedDate: Date;
  freight: Number;
  shipName: String;
  shipAddress: String;
  shipCity: String;
  shipRegion: String;
  shipPostalCode: String;
  shipCountry: String;

  idCustomer?: String;
  customer?: Customer;
  idEmployee?: String;
  employee?: Employee;
  idShipper?: String;
  shipper?: Shipper;

  orderDetails?: OrderDetail[];
}
