import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-brand-product',
  templateUrl: './brand-product.component.html',
  styleUrls: ['./brand-product.component.css']
})
export class BrandProductComponent {
  allProducts:any=[]
  brandName:any=[]
  selected:any=[]
  constructor(private api:ApiServiceService){}

// ngOnInit(): void {
//   this.api.oneBrandServ()
//   .subscribe((result)=>{
//     console.log(result);
    
//   })
// }



  
}
