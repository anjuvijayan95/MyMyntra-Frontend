import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  wishlist:any
  wishlistStatus=false
constructor(private api:ApiServiceService,private cart:CartService){}

ngOnInit(): void {
  this.api.getwishlistServ()
  .subscribe((result:any)=>{
    this.wishlist=result.wishlist
    this.wishlistStatus=true
      // this.wishlistStatusMsg=''
  },
  (result:any)=>{
    console.log(result.error.message);

    if(result.error.message){
      this.wishlistStatus = false
      // this.wishlistStatusMsg='wishlist is empty'
    }
  })
}


deleteWishlist(proId:any){
  this.api.deletewishlistServ(proId)
  .subscribe((result:any)=>{
    this.wishlist=result.wishlist
    if(this.wishlist.length==0){
      this.wishlistStatus=false
    }
  },
  (result:any)=>{
    alert(result.error.message)
    console.log(result.error.message);
    
  })
}

  // add to cart
  addToCart(product:any){
    this.cart.addToCart(product)
    this.deleteWishlist(product.id)
  }


}


