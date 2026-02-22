import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { InvitationTypeImageService } from '../../services/invitation-type-image-service';
import { InvitationTypeImageDto } from '../../models/invitationTypeImageDto';
import { Subscription, timer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitationshop',
  standalone: false,
  templateUrl: './invitationshop.html',
  styleUrl: './invitationshop.css',
})
export class Invitationshop implements OnInit {
private inviTypeImageService=inject(InvitationTypeImageService);
private cdr=inject(ChangeDetectorRef);
private router=inject(Router)
inviImages:InvitationTypeImageDto[]=[];
currentIndex: number = 0;
ngOnInit(): void {
  this.inviTypeImageService.getAll().subscribe({
    next:response=>{
      this.inviImages=response.data;
      this.cdr.detectChanges();
    },
    error:err=>console.log(err)
  })
}
goToDetail() {
  const currentInvi = this.inviImages[this.currentIndex];
  if (currentInvi && currentInvi.invitationTypeId) {
    this.router.navigate(['/invitation-detail', currentInvi.invitationTypeId]);
  }
}
nextSlide() {
  if (this.inviImages && this.inviImages.length > 0) {
    this.currentIndex = (this.currentIndex + 1) % this.inviImages.length;
  }
}

prevSlide() {
  if (this.inviImages && this.inviImages.length > 0) {
    this.currentIndex = (this.currentIndex - 1 + this.inviImages.length) % this.inviImages.length;
  }
}
}
