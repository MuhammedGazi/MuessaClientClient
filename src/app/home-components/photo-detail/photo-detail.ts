import { PhotoPrintDto } from './../../models/photoPrintDto';
import { ChangeDetectorRef, Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { PhotoPrintsService } from '../../services/photo-prints-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-detail',
  standalone: false,
  templateUrl: './photo-detail.html',
  styleUrl: './photo-detail.css',
})
export class PhotoDetail implements OnInit {
@Input() photoPrintId:string;
private route = inject(ActivatedRoute); //1
private photoPrintService=inject(PhotoPrintsService);
private cdr=inject(ChangeDetectorRef);
photoPrint:PhotoPrintDto=new PhotoPrintDto();
photoPrintId2: number = 0; // 2
  selectedImage: string = '';
  selectedDimension: string = '';
ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('id'); //3
  this.photoPrintId2 = Number(idParam); //4
  this.photoPrintService.getById(Number(this.photoPrintId2)).subscribe({
    next:response=>{
      this.photoPrint=response.data;
      if (this.photoPrint?.photoPrintImages?.length > 0) {
          this.selectedImage = this.photoPrint.photoPrintImages[0].imageUrl || this.photoPrint.photoPrintImages[0].thumbnailUrl;
        }
      this.cdr.detectChanges();
    }
  })
}
changeMainImage(url: string) {
    if (url) {
      this.selectedImage = url;
    }
  }

create(){
  this.photoPrint.dimensions = this.selectedDimension;
  this.photoPrintService.create(this.photoPrint).subscribe({
    next:response=>window.location.reload(),
    error:err=>console.error(err)
  })
}

}
