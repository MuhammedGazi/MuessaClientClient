import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { BannerService } from '../../services/banner-service';
import { BannerDto } from '../../models/bannerDto';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner implements OnInit {
  private bannerService = inject(BannerService);
  private cdr=inject(ChangeDetectorRef);
  banners:BannerDto[]=[];
  ngOnInit(): void {
    this.bannerService.getAll().subscribe({
      next:response=>{
        this.banners=response.data;
        this.cdr.detectChanges();
      },
      error:err=>console.error(err)
    })
  }

  delete(id){
    this.bannerService.delete(id).subscribe({
      next:response=>window.location.reload(),
      error:err=>console.error(err)
    })
  }

}
