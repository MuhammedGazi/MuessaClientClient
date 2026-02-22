import { ClayDesignDto } from './../../models/clayDesignDto';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ClayDesignService } from '../../services/clay-design-service';
import { ClayDesignImageDto } from '../../models/clayDesignImageDto';
import { ClayDesingImageService } from '../../services/clay-desing-image-service';

@Component({
  selector: 'app-clayshop',
  standalone: false,
  templateUrl: './clayshop.html',
  styleUrl: './clayshop.css',
})
export class Clayshop implements OnInit {
private clayImageService=inject(ClayDesingImageService);
private cdr=inject(ChangeDetectorRef);
clayDesignImages:ClayDesignImageDto[]=[];
ngOnInit(): void {
  this.clayImageService.getAll().subscribe({
    next:response=>{
      this.clayDesignImages=response.data;
      this.cdr.detectChanges();
    },
    error:err=>console.error(err)
  })
}
}
