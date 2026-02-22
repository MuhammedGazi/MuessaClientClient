import { Component, inject } from '@angular/core';
import { PhotoPrintsService } from '../../../services/photo-prints-service';
import { Router } from '@angular/router';
import { PhotoPrintDto } from '../../../models/photoPrintDto';

@Component({
  selector: 'app-createphoto-prints',
  standalone: false,
  templateUrl: './createphoto-prints.html',
  styleUrl: './createphoto-prints.css',
})
export class CreatephotoPrints {
private photoPrintService=inject(PhotoPrintsService);
private router=inject(Router);
photoPrint:PhotoPrintDto=new PhotoPrintDto();

create(){
  this.photoPrintService.create(this.photoPrint).subscribe({
    next:response=>this.router.navigate(['admin/photoprints']),
    error:err=>console.error(err)
  })
}
}
