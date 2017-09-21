import { Order } from '../order/order.model';
import { CustomerDemographic } from '../customer-demographic/customer-demographic.model';

export interface Customer {
  _id?: string;
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


  orders?: Order[];
  customerDemographics?: CustomerDemographic[];
}
