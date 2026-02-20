import { BaseModel } from "./baseModel/baseModel";
import { ClayDesignDto } from "./clayDesignDto";

export class ClayDesignImageDto implements BaseModel{
  id: number;
  createdDate: string;
  updatedDate: string;
  image:File;
  imageUrl:string;
  thumbnailUrl:string;
  imageId:string;
  isMain:boolean;
  clayDesignId:number;
  clayDesign:ClayDesignDto;
}
