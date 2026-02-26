import { Component, inject } from '@angular/core';
import { BannerService } from '../../../services/banner-service';
import { BannerDto } from '../../../models/bannerDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createbanner',
  standalone: false,
  templateUrl: './createbanner.html',
  styleUrl: './createbanner.css',
})
export class Createbanner {
  private bannerService = inject(BannerService);
  private router = inject(Router);
  banner: BannerDto = new BannerDto();
  create() {
    this.bannerService.create(this.banner).subscribe({
      next: (response) => this.router.navigate(['admin/banner']),
      error: (err) => console.error(err),
    });
  }
}
