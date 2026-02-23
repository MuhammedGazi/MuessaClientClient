import { PhotoPrintImage } from '../admin-components/photo-print-image/photo-print-image';
import { BaseModel } from './baseModel/baseModel';
import { PhotoPrintImageDto } from './photoPrintImageDto';

export class PhotoPrintDto implements BaseModel {
  id: number;
  createdDate: string;
  updatedDate: string;
  name: string;
  description: string;
  unitPrice: number;
  dimensions: string;
  photoPrintImages:PhotoPrintImageDto[];
}
