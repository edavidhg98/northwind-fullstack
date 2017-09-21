import { Order } from '../order/order.model';
import { Territory } from '../territory/territory.model';

export interface Employee {
  _id?: string;
  photoPath: String;
  lastName: String;
  firstName: String;
  title: String;
  titleOfCourtesy: String;
  birthDate: Date;
  hireDate: Date;
  address: String;
  city: String;
  region: String;
  postalCode: String;
  country: String;
  homePhone: String;
  extension: String;
  notes: String;

  idEmployee?: String;
  employee?: Employee;

  employees?: Employee[];
  orders?: Order[];
  territorys?: Territory[];
}
