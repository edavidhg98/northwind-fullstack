import { Customer } from '../customer/customer.model';

export interface CustomerDemographic {
  _id?: string;
  customerDesc: String;


  customers?: Customer[];
}
