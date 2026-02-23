import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PhotoPrintImageService } from '../../services/photo-print-image-service';
import { PhotoPrintImageDto } from '../../models/photoPrintImageDto';

@Component({
  selector: 'app-photoshop',
  standalone: false,
  templateUrl: './photoshop.html',
  styleUrl: './photoshop.css',
})
export class Photoshop implements OnInit {
private photoImageService=inject(PhotoPrintImageService);
private cdr=inject(ChangeDetectorRef);
photoPrintImages:PhotoPrintImageDto[]=[];
currentIndex: number = 0;
ngOnInit(): void {
  this.photoImageService.getAll().subscribe({
    next:response=>{
      this.photoPrintImages=response.data;
      this.cdr.detectChanges();
    },
    error:err=>console.error(err)
  })
}
nextSlide() {
    if (this.photoPrintImages && this.photoPrintImages.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.photoPrintImages.length;
    }
  }

  prevSlide() {
    if (this.photoPrintImages && this.photoPrintImages.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.photoPrintImages.length) % this.photoPrintImages.length;
    }
  }
}
