
import { Component, inject } from '@angular/core';
import { ClayDesignService } from '../../../services/clay-design-service';
import { Router } from '@angular/router';
import { ClayDesignDto } from '../../../models/clayDesignDto';

@Component({
  selector: 'app-create-clay-design',
  standalone: false,
  templateUrl: './create-clay-design.html',
  styleUrl: './create-clay-design.css',
})
export class CreateClayDesign {
  private clayDesignSercvice = inject(ClayDesignService);
  private router = inject(Router);
  clayDesign: ClayDesignDto = new ClayDesignDto();

  create() {
    this.clayDesignSercvice.create(this.clayDesign).subscribe({
      next:(result)=>{
        this.router.navigate(['/admin/claydesign'])
      },
      error:err=>console.error(err)
    });
  }


}
