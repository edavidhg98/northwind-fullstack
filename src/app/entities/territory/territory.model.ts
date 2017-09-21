import { Region } from '../region/region.model';
import { Employee } from '../employee/employee.model';

export interface Territory {
  _id?: string;
  territoryDescription: String;

  idRegion?: String;
  region?: Region;

  employees?: Employee[];
}
