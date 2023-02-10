import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  allProducts:any=[]

constructor(private api:ApiServiceService){}

ngOnInit(): void {
  this.api.allProductServ()
  .subscribe(
  (result:any)=>{
    this.allProducts=result.products
    console.log(this.allProducts);
    
  },
  (result:any)=>{
    alert(result.error.message)
  }
  )
}

}
