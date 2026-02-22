import { BaseModel } from './baseModel/baseModel';
import { PhotoPrintDto } from './photoPrintDto';

export class PhotoPrintImageDto implements BaseModel {
  id: number;
  createdDate: string;
  updatedDate: string;
  image: File;
  imageUrl: string;
  thumbnailUrl: string;
  imageId: string;
  isMain: boolean;
  photoPrintId: number;
  photoPrint: PhotoPrintDto;
}
