import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ClayDesignService } from '../../../services/clay-design-service';
import { ClayDesignDto } from '../../../models/clayDesignDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-clay-design',
  standalone: false,
  templateUrl: './update-clay-design.html',
  styleUrl: './update-clay-design.css',
})
export class UpdateClayDesign {
constructor(private clayDesignService:ClayDesignService,private cdr:ChangeDetectorRef,private router:Router){}
@Input() id:string;
clayDesign=new ClayDesignDto;
ngOnInit(){
    this.clayDesignService.getById(Number(this.id)).subscribe({
    next:(result)=>{
      this.clayDesign=result.data;
      this.cdr.detectChanges();
      console.log(result);
      console.log(this.id);
    },
    error:(err)=>console.error(err)
  })
}

update(){
  this.clayDesignService.update(this.clayDesign).subscribe({
    complete:()=>{
      this.router.navigate(['/admin/claydesign']);
    },
    error:err=>console.log(err)
  })
}





}
