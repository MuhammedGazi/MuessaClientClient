import { Component, inject, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { InvitationTypeService } from '../../services/invitation-type-service';
import { InvitationTypeDto } from '../../models/invitationTypeDto';

@Component({
  selector: 'app-invitation-type',
  standalone: false,
  templateUrl: './invitation-type.html',
  styleUrl: './invitation-type.css',
})
export class InvitationType implements OnInit {
private invitationTypeService=inject(InvitationTypeService);
private cdr=inject(ChangeDetectorRef);
invitationType:InvitationTypeDto[];

ngOnInit(): void {
  this.invitationTypeService.getAll().subscribe({
    next:response=>{
      this.invitationType=response.data;
      console.log(this.invitationType);
      this.cdr.detectChanges();
    },
    error:err=>console.error(err)
  })
}

delete(id){
  this.invitationTypeService.delete(id).subscribe({
    next:response=>window.location.reload(),
    error:err=>console.error(err)
  })
}


}
