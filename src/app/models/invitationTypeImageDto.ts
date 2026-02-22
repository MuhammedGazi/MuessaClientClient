import { BaseModel } from "./baseModel/baseModel";
import { InvitationTypeDto } from "./invitationTypeDto";

export class InvitationTypeImageDto implements BaseModel{
  id: number;
  createdDate: string;
  updatedDate: string;
  cardImage:File;
  imageUrl:string;
  thumbnailUrl:string;
  imageId:string;
  isMain:boolean;
  invitationTypeId:number;
  invitationType:InvitationTypeDto;
}
