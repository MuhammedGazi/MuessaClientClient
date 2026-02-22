import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { InvitationTypeImageService } from '../../../services/invitation-type-image-service';
import { InvitationTypeService } from '../../../services/invitation-type-service';
import { Router } from '@angular/router';
import { InvitationTypeImageDto } from '../../../models/invitationTypeImageDto';
import { InvitationTypeDto } from '../../../models/invitationTypeDto';

@Component({
  selector: 'app-createinvitation-type-image',
  standalone: false,
  templateUrl: './createinvitation-type-image.html',
  styleUrl: './createinvitation-type-image.css',
})
export class CreateinvitationTypeImage implements OnInit  {
private invitationTypeImageService=inject(InvitationTypeImageService);
private invitationTypeService=inject(InvitationTypeService);
private router=inject(Router);
private cdr=inject(ChangeDetectorRef);
invitationTypeImage:InvitationTypeImageDto=new InvitationTypeImageDto();
invitationType:InvitationTypeDto[]=[];
selectedFile: File | null = null;

ngOnInit(): void {
  this.invitationTypeService.getAll().subscribe({
    next:response=>{
      this.invitationType=response.data;
      this.cdr.detectChanges();
    },
    error:err=>console.error(err)
  })
}

// HTML'deki <input type="file" (change)="onFileSelected($event)"> çalıştığında tetiklenecek metot
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}
update(){
  const formData = new FormData();
  //formData.append('Id', this.invitationTypeImage.id.toString());
  formData.append('InvitationTypeId', this.invitationTypeImage.invitationTypeId.toString());
  formData.append('IsMain', this.invitationTypeImage.isMain.toString());

  if (this.invitationTypeImage.imageId) {
     formData.append('ImageId', this.invitationTypeImage.imageId);
  }
  if (this.selectedFile) {
    formData.append('CardImage', this.selectedFile);
  }

  this.invitationTypeImageService.create(formData).subscribe({
    next: response => this.router.navigate(['admin/invitationtypeimage']),
    error: err => console.error(err)
  });
}
}
