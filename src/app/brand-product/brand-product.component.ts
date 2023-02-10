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
//   this.api.allProductServ()
//   .subscribe((result:any)=>{
//     this.allProducts=result.products
//     // console.log(this.allProducts);
    
//   },
//   (result)=>{
//     alert(result.error.message)
//   })

//   this.api.brandServ()
//   .subscribe((result:any)=>{
//     this.brandName=result.brands.brand
//     console.log(result);
    
//     this.selected=this.allProducts.filter((item:any)=>item.brand==this.brandName)
//     console.log(this.selected);
    



//   }
//  )
// }



  
}
