import { BaseModel } from './baseModel/baseModel';
export class BannerDto implements BaseModel{
  id: number;
  createdDate: string;
  updatedDate: string;
  title: string;
  description: string;
}
