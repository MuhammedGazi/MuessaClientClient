import { Component, inject } from '@angular/core';
import { ClayDesingImageService } from '../../../services/clay-desing-image-service';
import { ClayDesignService } from '../../../services/clay-design-service';
import { Router } from '@angular/router';
import { ClayDesignImageDto } from '../../../models/clayDesignImageDto';
import { ClayDesignDto } from '../../../models/clayDesignDto';

@Component({
  selector: 'app-create-clay-design-image',
  standalone: false,
  templateUrl: './create-clay-design-image.html',
  styleUrl: './create-clay-design-image.css',
})
export class CreateClayDesignImage {
  private clayImageService = inject(ClayDesingImageService);
  private clayDesignService = inject(ClayDesignService);
  private router = inject(Router);
  selectedFile: File | null = null;
  clayImage: ClayDesignImageDto = new ClayDesignImageDto();

  clayDesigns: ClayDesignDto[] = [];
  clayDesignId: number | null = null;
  isMain: boolean = false;

  previewUrl: string | ArrayBuffer | null = null;

  ngOnInit() {
    this.getClayDesigns();
  }
  getClayDesigns() {
    this.clayDesignService.getAll().subscribe({
      next: response => this.clayDesigns = response.data,
      error: err => console.error(err)
    });
  }

onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target?.result || null;
      };
      reader.readAsDataURL(file);
    }
  }

create() {
    if (!this.selectedFile || !this.clayDesignId) {
      alert("Lütfen bir resim ve tasarım seçin.");
      return;
    }

    const formData = new FormData();
    formData.append('ClayDesignId', this.clayDesignId.toString());
    formData.append('IsMain', this.isMain.toString());

    // C# tarafının beklediği isim 'Image' olmalı
    formData.append('Image', this.selectedFile);

    // Servisindeki ekleme metodu (adının 'add' veya 'create' olduğunu varsayıyorum)
    this.clayImageService.create(formData).subscribe({
      next: response => {
        console.log("Başarıyla eklendi", response);
        this.router.navigate(['admin/claydesignimage']);
      },
      error: err => {
        console.error("Ekleme hatası", err);
      }
    });
  }
}
