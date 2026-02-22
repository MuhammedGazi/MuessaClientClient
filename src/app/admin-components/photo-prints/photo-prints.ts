import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PhotoPrintsService } from '../../services/photo-prints-service';
import { PhotoPrintDto } from '../../models/photoPrintDto';

@Component({
  selector: 'app-photo-prints',
  standalone: false,
  templateUrl: './photo-prints.html',
  styleUrl: './photo-prints.css',
})
export class PhotoPrints implements OnInit {
private photoPrintService=inject(PhotoPrintsService);
private cdr=inject(ChangeDetectorRef);
photoPrints:PhotoPrintDto[]=[];
ngOnInit(): void {
  this.photoPrintService.getAll().subscribe ({
    next:response=>{
      this.photoPrints=response.data;
      this.cdr.detectChanges();
    },
    error:err=>console.error(err)
  })
}

delete(id){
  this.photoPrintService.delete(id).subscribe({
    next:response=>window.location.reload(),
    error:err=>console.error(err)
  })
}




}
