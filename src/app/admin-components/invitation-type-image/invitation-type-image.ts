import { InvitationTypeImageDto } from './../../models/invitationTypeImageDto';
import { Component, inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { InvitationTypeImageService } from '../../services/invitation-type-image-service';
import { InvitationTypeService } from '../../services/invitation-type-service';
import { InvitationTypeDto } from '../../models/invitationTypeDto';

@Component({
  selector: 'app-invitation-type-image',
  standalone: false,
  templateUrl: './invitation-type-image.html',
  styleUrl: './invitation-type-image.css',
})
export class InvitationTypeImage implements OnInit{
private invitationTypeImageService=inject(InvitationTypeImageService);
private invitationTypeService=inject(InvitationTypeService);
private cdr=inject(ChangeDetectorRef);
invitationTypeImages:InvitationTypeImageDto[];
invitationType:InvitationTypeDto[]=[];

ngOnInit(): void {
  this.invitationTypeImageService.getAll().subscribe({
    next:response=>{
      this.invitationTypeImages=response.data;
      this.cdr.detectChanges();
    },
    error:err=>console.error(err)
  })
    this.invitationTypeService.getAll().subscribe({
    next:response=>{
      this.invitationType=response.data;
      this.cdr.detectChanges();
    },
    error:err=>console.error(err)
  })
}

delete(id:number){
  this.invitationTypeImageService.delete(id).subscribe({
    next:response=>window.location.reload(),
    error:err=>console.error(err)
  })
}






}
