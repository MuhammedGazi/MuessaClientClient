import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { ClayDesingImageService } from '../../../services/clay-desing-image-service';
import { Router } from '@angular/router';
import { ClayDesignImageDto } from '../../../models/clayDesignImageDto';
import { ClayDesignService } from '../../../services/clay-design-service';
import { ClayDesignDto } from '../../../models/clayDesignDto';

@Component({
  selector: 'app-update-clay-design-image',
  standalone: false,
  templateUrl: './update-clay-design-image.html',
  styleUrl: './update-clay-design-image.css',
})
export class UpdateClayDesignImage implements OnInit {
  @Input() id: string;
  private clayImageService = inject(ClayDesingImageService);
  private clayService = inject(ClayDesignService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  clayImage: ClayDesignImageDto = new ClayDesignImageDto();
  clayDesigns: ClayDesignDto[] = [];
  selectedFile: File | null = null;

  ngOnInit() {
    this.getClay();
    this.clayImageService.getById(Number(this.id)).subscribe({
      next: response => {
        this.clayImage = response.data;
        this.cdr.detectChanges();
        console.log(this.id,this.clayImage);
      },
      error: (err) => console.log(err),
    });
  }

  getClay() {
    this.clayService.getAll().subscribe({
      next: (response) => (this.clayDesigns = response.data),
      error: (err) => console.error(err),
    });
  }


// HTML'deki <input type="file" (change)="onFileSelected($event)"> çalıştığında tetiklenecek metot
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}

// Update metodunu FormData kullanacak şekilde değiştirir
update() {
  const formData = new FormData();
  formData.append('Id', this.clayImage.id.toString());
  formData.append('ClayDesignId', this.clayImage.clayDesignId.toString());
  formData.append('IsMain', this.clayImage.isMain.toString());

  if (this.clayImage.imageId) {
     formData.append('ImageId', this.clayImage.imageId);
  }
  if (this.selectedFile) {
    formData.append('Image', this.selectedFile);
  }

  this.clayImageService.update(formData).subscribe({
    next: response => this.router.navigate(['admin/claydesignimage']),
    error: err => console.error(err)
  });
}
}
