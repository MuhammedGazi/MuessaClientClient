import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { InvitationCardService } from '../../services/invitation-card-service';
import { InvitationCardDto } from '../../models/invitationCardDto';

@Component({
  selector: 'app-invitation-card',
  standalone: false,
  templateUrl: './invitation-card.html',
  styleUrl: './invitation-card.css',
})
export class InvitationCard implements OnInit {
private invitationCardService=inject(InvitationCardService);
private cdr=inject(ChangeDetectorRef);
invitationCards:InvitationCardDto[];
ngOnInit(): void {
  this.invitationCardService.getAll().subscribe({
    next:response=>{
      this.invitationCards=response.data;
      this.cdr.detectChanges();
      console.log(this.invitationCards);
    },
    error:err=>console.error(err)
  })
}

delete(id){
  this.invitationCardService.delete(id).subscribe({
    next:response=>window.location.reload(),
    error:err=>console.error(err)
  })
}


}
