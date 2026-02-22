import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { PhotoPrintImageService } from '../../../services/photo-print-image-service';
import { PhotoPrintsService } from '../../../services/photo-prints-service';
import { PhotoPrintImageDto } from '../../../models/photoPrintImageDto';
import { PhotoPrintDto } from '../../../models/photoPrintDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createphoto-print-image',
  standalone: false,
  templateUrl: './createphoto-print-image.html',
  styleUrl: './createphoto-print-image.css',
})
export class CreatephotoPrintImage implements OnInit {
  private photoPrintImageService = inject(PhotoPrintImageService);
  private photoPrintService = inject(PhotoPrintsService);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);

  photoPrintImage: PhotoPrintImageDto = new PhotoPrintImageDto();
  photoPrints: PhotoPrintDto[] = [];
  selectedFile: File | null = null;

  ngOnInit(): void {
    this.photoPrintService.getAll().subscribe({
      next: (response) => {
        this.photoPrints = response.data;
        this.cdr.detectChanges();
      },
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

  create() {
    const formData = new FormData();
    formData.append('PhotoPrintId', this.photoPrintImage.photoPrintId.toString());
    //formData.append('IsMain', this.photoPrintImage.isMain.toString());

    if (this.photoPrintImage.imageId) {
      formData.append('ImageId', this.photoPrintImage.imageId);
    }
    if (this.selectedFile) {
      formData.append('Image', this.selectedFile);
    }

    this.photoPrintImageService.create(formData).subscribe({
      next: (response) => this.router.navigate(['admin/photoprintimage']),
      error: (err) => console.error(err),
    });
  }
}
