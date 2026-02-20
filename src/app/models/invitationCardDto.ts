import { BaseModel } from './baseModel/baseModel';
import { InvitationTypeDto } from './invitationTypeDto';

export class InvitationCardDto implements BaseModel {
  id: number;
  createdDate: string;
  updatedDate: string;
  brideName: string;
  groomName: string;
  brideParents: string;
  groomParents: string;
  hennaNightDate: Date;
  hennaNightAddress: string;
  weddingDate: Date;
  weddingAddress: string;
  invitationMessage: string;
  invitationTypeId: number;
  invitationType: InvitationTypeDto;
}
