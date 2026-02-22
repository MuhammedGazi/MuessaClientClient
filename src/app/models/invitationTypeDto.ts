import { BaseModel } from "./baseModel/baseModel";
import { InvitationTypeImageDto } from "./invitationTypeImageDto";

export class InvitationTypeDto implements BaseModel{
  id: number;
  createdDate: string;
  updatedDate: string;
  name: string;
  description: string;
  unitPrice: number;
  invitationTypeImages: InvitationTypeImageDto[];
}
