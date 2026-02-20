import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ClayDesingImageService } from '../../services/clay-desing-image-service';
import { ClayDesignImageDto } from '../../models/clayDesignImageDto';

@Component({
  selector: 'app-clay-design-image',
  standalone: false,
  templateUrl: './clay-design-image.html',
  styleUrl: './clay-design-image.css',
})
export class ClayDesignImage {
  private clayImageService=inject(ClayDesingImageService);
  private cdr=inject(ChangeDetectorRef);
  clayImage:ClayDesignImageDto[];

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.clayImageService.getAll().subscribe({
      next:result=>{
        this.clayImage=result.data;
        console.log(this.clayImage);
        this.cdr.detectChanges();
      },
      error:err=>console.log(err)
    })
  }

  delete(id:number){
    this.clayImageService.delete(id).subscribe({
      next:response=>window.location.reload(),
      error:err=>console.error(err)
    })
  }


}
