import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PhotoPrintImageService } from '../../services/photo-print-image-service';
import { PhotoPrintImageDto } from '../../models/photoPrintImageDto';
import { PhotoPrintDto } from '../../models/photoPrintDto';
import { concatMapTo } from 'rxjs';

@Component({
  selector: 'app-photo-print-image',
  standalone: false,
  templateUrl: './photo-print-image.html',
  styleUrl: './photo-print-image.css',
})
export class PhotoPrintImage implements OnInit{
private photoPrintImageService=inject(PhotoPrintImageService);
private cdr=inject(ChangeDetectorRef);
photoPrintImages:PhotoPrintImageDto[]=[];
ngOnInit(): void {
  this.getAll();
}

getAll(){
  this.photoPrintImageService.getAll().subscribe({
    next:response=>{
      this.photoPrintImages=response.data;
      this.cdr.detectChanges();
      console.log(this.photoPrintImages);
    },
    error:err=>console.error(err)
  })
}

delete(id){
  this.photoPrintImageService.delete(id).subscribe({
    next:response=>window.location.reload(),
    error:err=>console.error(err)
  })
}


}
