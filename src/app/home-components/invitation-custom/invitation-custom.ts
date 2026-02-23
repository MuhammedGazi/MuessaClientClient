import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { InvitationCardService } from '../../services/invitation-card-service';
import { InvitationCardDto } from '../../models/invitationCardDto';
import { Router } from '@angular/router';
import { InvitationTypeImageService } from '../../services/invitation-type-image-service';
import { InvitationTypeService } from '../../services/invitation-type-service';

@Component({
  selector: 'app-invitation-custom',
  standalone: false,
  templateUrl: './invitation-custom.html',
  styleUrl: './invitation-custom.css',
})
export class InvitationCustom {
@Input() id:string;
private invitaionService=inject(InvitationCardService);
private invitaionTypeService=inject(InvitationTypeService);
private cdr=inject(ChangeDetectorRef);
private router=inject(Router);
invitationCard:InvitationCardDto=new InvitationCardDto();
imageUrl:string;
showHenna: boolean = false;
formWeddingDate: string = '';
  formWeddingTime: string = '';
  formHennaDate: string = '';
  formHennaTime: string = '';
ngOnInit() {
    if (this.id) {
      this.invitationCard.invitationTypeId = Number(this.id);
    }
    this.invitaionTypeService.getById(Number(this.id)).subscribe({
      next:response=>{
        this.imageUrl=response.data.invitationTypeImages[0].imageUrl;
        this.cdr.detectChanges();
      },
      error:err=>console.error(err)
    })
  }

  updateWeddingDateTime() {
    if (this.formWeddingDate) {
      const timePart = this.formWeddingTime || '00:00';
      this.invitationCard.weddingDate = new Date(`${this.formWeddingDate}T${timePart}`);
    }
  }

  updateHennaDateTime() {
    if (this.formHennaDate) {
      const timePart = this.formHennaTime || '00:00';
      this.invitationCard.hennaNightDate = new Date(`${this.formHennaDate}T${timePart}`);
    }
  }
  
create(){
  this.invitaionService.create(this.invitationCard).subscribe({
    next:response=>this.router.navigate(['invitation-detail/'+this.invitationCard.invitationTypeId]),
    error:err=>console.error(err)
  });
}
}

