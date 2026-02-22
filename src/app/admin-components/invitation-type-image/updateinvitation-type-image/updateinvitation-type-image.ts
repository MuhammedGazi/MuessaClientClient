import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { InvitationTypeImageService } from '../../../services/invitation-type-image-service';
import { Router } from '@angular/router';
import { InvitationTypeImageDto } from '../../../models/invitationTypeImageDto';
import { InvitationTypeDto } from '../../../models/invitationTypeDto';
import { InvitationTypeService } from '../../../services/invitation-type-service';

@Component({
  selector: 'app-updateinvitation-type-image',
  standalone: false,
  templateUrl: './updateinvitation-type-image.html',
  styleUrl: './updateinvitation-type-image.css',
})
export class UpdateinvitationTypeImage implements OnInit {
@Input() id:string;
private invitationTypeImageService=inject(InvitationTypeImageService);
private invitationTypeService=inject(InvitationTypeService);
private router=inject(Router);
private cdr=inject(ChangeDetectorRef);
invitationTypeImage:InvitationTypeImageDto=new InvitationTypeImageDto();
invitationType:InvitationTypeDto[]=[];
selectedFile: File | null = null;

ngOnInit(): void {
  this.invitationTypeImageService.getById(Number(this.id)).subscribe({
    next:response=>{
      this.invitationTypeImage=response.data;
      this.cdr.detectChanges();
    },
    error:err=>console.error(err)
  })
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
  formData.append('Id', this.invitationTypeImage.id.toString());
  formData.append('InvitationTypeId', this.invitationTypeImage.invitationTypeId.toString());
  formData.append('IsMain', this.invitationTypeImage.isMain.toString());

  if (this.invitationTypeImage.imageId) {
     formData.append('ImageId', this.invitationTypeImage.imageId);
  }
  if (this.selectedFile) {
    formData.append('CardImage', this.selectedFile);
  }

  this.invitationTypeImageService.update(formData).subscribe({
    next: response => this.router.navigate(['admin/invitationtypeimage']),
    error: err => console.error(err)
  });
}



}
