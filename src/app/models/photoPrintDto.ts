import { BaseModel } from './baseModel/baseModel';

export class PhotoPrintDto implements BaseModel {
  id: number;
  createdDate: string;
  updatedDate: string;
  name: string;
  description: string;
  unitPrice: number;
  dimensions: string;
}
