import { BaseModel } from './baseModel/baseModel';
export class ClayDesignDto implements BaseModel{
  id: number;
  createdDate: string;
  updatedDate: string;
  name:string;
  description:string;
  price:number;
  dimensions:string;
  colors:string;
  materiel:string;
  stock:number;
}
