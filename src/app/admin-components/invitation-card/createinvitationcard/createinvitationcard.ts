import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { InvitationCardService } from '../../../services/invitation-card-service';
import { Router } from '@angular/router';
import { InvitationCardDto } from '../../../models/invitationCardDto';
import { InvitationTypeService } from '../../../services/invitation-type-service';
import { InvitationTypeDto } from '../../../models/invitationTypeDto';

@Component({
  selector: 'app-createinvitationcard',
  standalone: false,
  templateUrl: './createinvitationcard.html',
  styleUrl: './createinvitationcard.css',
})
export class Createinvitationcard implements OnInit {
private invitationCardService=inject(InvitationCardService);
private invitationTypeService=inject(InvitationTypeService);
private cdr=inject(ChangeDetectorRef);
private router=inject(Router);
invitationCard:InvitationCardDto=new InvitationCardDto();
invitationTypes:InvitationTypeDto[]=[];
ngOnInit(): void {
    this.invitationTypeService.getAll().subscribe({
    next:response=>{
      this.invitationTypes=response.data;
      this.cdr.detectChanges();
      console.log(this.invitationTypes);
    },
    error:err=>console.error(err)
  })
}
create(){
  this.invitationCardService.create(this.invitationCard).subscribe({
    next:response=>this.router.navigate(['admin/invitationcard']),
    error:err=>console.error(err)
  })
}
}
