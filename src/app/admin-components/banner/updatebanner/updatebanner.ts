import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { BannerService } from '../../../services/banner-service';
import { BannerDto } from '../../../models/bannerDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebanner',
  standalone: false,
  templateUrl: './updatebanner.html',
  styleUrl: './updatebanner.css',
})
export class Updatebanner implements OnInit {
  @Input() id: string;
  private bannerService = inject(BannerService);
  private cdr = inject(ChangeDetectorRef);
  private router=inject(Router);
  banner: BannerDto = new BannerDto();
  ngOnInit(): void {
    this.bannerService.getById(Number(this.id)).subscribe({
      next: (response) => {
        this.banner = response.data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }
  update(){
    this.bannerService.update(this.banner).subscribe({
      next:response=>this.router.navigate(['admin/banner']),
      error:err=>console.log(err)
    });
  }
}
