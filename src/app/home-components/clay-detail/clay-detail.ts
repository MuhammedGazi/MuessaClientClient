import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { ClayDesingImageService } from '../../services/clay-desing-image-service';
import { ClayDesignImageDto } from '../../models/clayDesignImageDto';
import { ClayDesignService } from '../../services/clay-design-service';
import { ClayDesignDto } from '../../models/clayDesignDto';

@Component({
  selector: 'app-clay-detail',
  standalone: false,
  templateUrl: './clay-detail.html',
  styleUrl: './clay-detail.css',
})
export class ClayDetail implements OnInit {
  @Input() id: string;
  private clayDesignService = inject(ClayDesignService);
  private cdr = inject(ChangeDetectorRef);
  clayDesignDto: ClayDesignDto = new ClayDesignDto();
  selectedImage: string = '';
  ngOnInit(): void {
    this.clayDesignService.getById(Number(this.id)).subscribe({
      next: (response) => {
        this.clayDesignDto = response.data;
        console.log(this.clayDesignDto);
        if (this.clayDesignDto?.clayDesignImages?.length > 0) {
          this.selectedImage =
            this.clayDesignDto.clayDesignImages[0].imageUrl ||
            this.clayDesignDto.clayDesignImages[0].thumbnailUrl;
        }
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }
  changeMainImage(url: string) {
    if (url) {
      this.selectedImage = url;
    }
  }
}
