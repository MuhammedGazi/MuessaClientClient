
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ClayDesignService } from '../../services/clay-design-service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { Result } from '../../models/result';
import { map, tap } from 'rxjs';
import { ClayDesignDto } from '../../models/clayDesignDto';

@Component({
  selector: 'app-clay-design',
  standalone: false,
  templateUrl: './clay-design.html',
  styleUrl: './clay-design.css',
})
export class ClayDesign {
  constructor(private clayDesignService: ClayDesignService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getAll();
  }

  clayDesigns: ClayDesignDto[];

  getAll() {
    this.clayDesignService.getAll().subscribe({
      next: (result) => {
        this.clayDesigns = result.data;
        console.log('Veriler Geldi:', this.clayDesigns);
        this.cdr.detectChanges();
      },
      error: (result) => console.error(result.errors),
    });
  }
}
