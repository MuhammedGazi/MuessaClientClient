import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { PhotoPrintsService } from '../../../services/photo-prints-service';
import { Router } from '@angular/router';
import { PhotoPrintDto } from '../../../models/photoPrintDto';

@Component({
  selector: 'app-updatephoto-prints',
  standalone: false,
  templateUrl: './updatephoto-prints.html',
  styleUrl: './updatephoto-prints.css',
})
export class UpdatephotoPrints implements OnInit {
@Input() id:string;
private photoPrintService=inject(PhotoPrintsService);
private cdr=inject(ChangeDetectorRef);
private router=inject(Router);
photoPrint:PhotoPrintDto=new PhotoPrintDto();
ngOnInit(): void {
  this.photoPrintService.getById(Number(this.id)).subscribe({
    next:response=>{
      this.photoPrint=response.data;
      this.cdr.detectChanges();
    },
    error:err=>console.error(err)
  })
}
update(){
  this.photoPrintService.update(this.photoPrint).subscribe({
    next:response=>this.router.navigate(['admin/photoprints']),
    error:err=>console.error(err)
  })
}

}
