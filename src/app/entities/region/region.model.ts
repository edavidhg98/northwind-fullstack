import { Territory } from '../territory/territory.model';

export interface Region {
  _id?: string;
  regionDescription: String;


  territorys?: Territory[];
}
