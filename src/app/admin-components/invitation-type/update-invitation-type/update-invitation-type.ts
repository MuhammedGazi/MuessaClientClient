import { ChangeDetectorRef, Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { InvitationTypeService } from '../../../services/invitation-type-service';
import { Router } from '@angular/router';
import { InvitationTypeDto } from '../../../models/invitationTypeDto';

@Component({
  selector: 'app-update-invitation-type',
  standalone: false,
  templateUrl: './update-invitation-type.html',
  styleUrl: './update-invitation-type.css',
})
export class UpdateInvitationType implements OnInit {
@Input() id:string;
private invitationTypeService=inject(InvitationTypeService);
private router=inject(Router);
private cdr=inject(ChangeDetectorRef);
invitationType:InvitationTypeDto=new InvitationTypeDto();

ngOnInit(): void {
  this.invitationTypeService.getById(Number(this.id)).subscribe({
    next:response=>{
      this.invitationType=response.data;
      this.cdr.detectChanges();
      console.log(this.invitationType);
    },
    error:err=>console.error(err)
  })
}

update(){
  this.invitationTypeService.update(this.invitationType).subscribe({
    next:response=>this.router.navigate(['admin/invitationtype']),
    error:err=>console.error(err)
  })
}



}
