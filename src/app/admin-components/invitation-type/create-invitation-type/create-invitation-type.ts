import { Component, inject } from '@angular/core';
import { InvitationTypeService } from '../../../services/invitation-type-service';
import { Router } from '@angular/router';
import { InvitationTypeDto } from '../../../models/invitationTypeDto';

@Component({
  selector: 'app-create-invitation-type',
  standalone: false,
  templateUrl: './create-invitation-type.html',
  styleUrl: './create-invitation-type.css',
})
export class CreateInvitationType {
private invitationTypeService=inject(InvitationTypeService);
private router=inject(Router);

invitationType:InvitationTypeDto=new InvitationTypeDto();

create(){
  this.invitationTypeService.create(this.invitationType).subscribe({
    next:response=>this.router.navigate(['admin/invitationtype']),
    error:err=>console.error(err)
  })
}
}
