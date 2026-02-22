import { Component, inject, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { InvitationTypeService } from '../../services/invitation-type-service';
import { InvitationTypeDto } from '../../models/invitationTypeDto';

@Component({
  selector: 'app-invitation-detail',
  standalone: false,
  templateUrl: './invitation-detail.html',
  styleUrl: './invitation-detail.css',
})
export class InvitationDetail implements OnInit {
  @Input() id: string;
  private inviTypeService = inject(InvitationTypeService);
  private cdr = inject(ChangeDetectorRef);
  invitationType: InvitationTypeDto;
  selectedImage: string = '';
  ngOnInit(): void {
    this.inviTypeService.getById(Number(this.id)).subscribe({
      next: (response) => {
        this.invitationType = response.data;
        if (this.invitationType?.invitationTypeImages?.length > 0) {
          this.selectedImage =
            this.invitationType.invitationTypeImages[0].imageUrl ||
            this.invitationType.invitationTypeImages[0].thumbnailUrl;
        }
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }
  changeMainImage(url: string) {
    if (url) {
      this.selectedImage = url;
    }
  }
}
