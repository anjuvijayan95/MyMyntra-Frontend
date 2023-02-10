import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList=new BehaviorSubject([])
  cartItemArray:any=[]
  constructor() { }

  addToCart(product:any){
    this.cartItemArray.push(product)
    this.cartItemList.next(this.cartItemArray)
    console.log(this.cartItemList);
    // this.total=this.cartItemArray.reduce((item1:any,item2:any)=>item1['price']+item2['price'])
    // console.log(this.total);
    this.netTotal()
    this.tagAmount()

  }

  netTotal(){
    let total=0
   this.cartItemArray.map((item:any)=>{
   total+=item.price
    console.log(total);
    
   }) 
   return total
  }

  tagAmount(){
    let tagprice=0
    this.cartItemArray.map((item:any)=>{
      tagprice+=item.pricetag
    }) 
    return tagprice
  }


  // remove a particular item
  remove(product:any){
    this.cartItemArray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartItemArray.splice(index,1)
      }
    })
    this.cartItemList.next(this.cartItemArray)
  }

  // remove all from cart
  removeCart(){
    this.cartItemArray=[]
    this.cartItemList.next(this.cartItemArray)
  }
}
