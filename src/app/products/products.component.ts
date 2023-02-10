import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  proId:string=''
  product:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiServiceService, private cart:CartService){}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((data:any)=>{
      this.proId=data['id']
    })

    // to get details of requested product
    this.api.viewProduct(this.proId)
    .subscribe((result:any)=>{
      this.product=result.product
      // console.log(this.product);
      
    })
  }

  addToWishlist(product:any){
    this.api.addtowishServ(product)
    .subscribe((result:any)=>{
      alert(result.message)
      console.log(result);
      
    },
    (result:any)=>{
      alert(result.error.message)
    })
  }

// addToCart

addToCart(product:any){
  this.cart.addToCart(product)
}



}
