import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { InvitationCardService } from '../../../services/invitation-card-service';
import { InvitationCardDto } from '../../../models/invitationCardDto';
import { InvitationTypeDto } from '../../../models/invitationTypeDto';
import { InvitationTypeService } from '../../../services/invitation-type-service';

@Component({
  selector: 'app-updateinvitationcard',
  standalone: false,
  templateUrl: './updateinvitationcard.html',
  styleUrl: './updateinvitationcard.css',
})
export class Updateinvitationcard implements OnInit {
@Input() id:string;
private invitationCardService=inject(InvitationCardService);
private invitationTypeService=inject(InvitationTypeService);
private cdr=inject(ChangeDetectorRef);
private router=inject(Router);
invitationCard:InvitationCardDto;
invitationTypes:InvitationTypeDto[];
ngOnInit(): void {
  this.invitationCardService.getById(Number(this.id)).subscribe({
    next:response=>{
      this.invitationCard=response.data;
      this.cdr.detectChanges();
    },
    error:err=>console.error(err)
  })
  this.invitationTypeService.getAll().subscribe({
    next:response=>this.invitationTypes=response.data,
    error:err=>console.error(err)
  })
}

update(){
  this.invitationCardService.update(this.invitationCard).subscribe({
    next:repsonse=>this.router.navigate(['admin/invitationcard']),
    error:err=>console.error(err)
  })
}


}
