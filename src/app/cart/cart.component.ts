import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../service/api-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items:any=[]
  // discount:any
  discountTotal:number=0
  discount:number=0
  checkoutMsg:string=''
  // to adjust decimal point ,
  grantTotal:number=0
  Amount:number=0
  username:string=''
  mobileNum:any
  address:string=''


  checkoutReactForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    mobile:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pin:['',[Validators.required,Validators.pattern('[0-9]*')]],
    address:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    card:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
  constructor(private cart:CartService, private route:Router,private fb:FormBuilder, private api:ApiServiceService){}

  checkoutTs(){
    if(this.checkoutReactForm.valid){
     let name=this.checkoutReactForm.value.name
     let mobile=this.checkoutReactForm.value.mobile
     let pin=this.checkoutReactForm.value.pin
     let address=this.checkoutReactForm.value.address
     let card=this.checkoutReactForm.value.card

    }
  }

  ngOnInit(): void {
    this.cart.cartItemList
    .subscribe((result:any)=>{
      this.items=result
      console.log(this.items);
    }
   )
   

   let total=this.cart.netTotal()
   this.grantTotal=Number(total.toFixed(2))

   let tagAmount=this.cart.tagAmount()
    this.Amount=Number(tagAmount.toFixed(2))
    this.discountTotal=this.Amount-this.grantTotal


  }

  localstorage(){
    
    if(localStorage.getItem("username")){
      this.username=localStorage.getItem("username") || ''
    }
    if(localStorage.getItem("mobileNum")){   
      this.mobileNum=localStorage.getItem("mobileNum") || ''
    }
    if(localStorage.getItem("address")){   
      this.address=localStorage.getItem("address") || ''
    }

  }


  // get from local storage
  

  remove(product:any){
    this.cart.remove(product)
    let total=this.cart.netTotal()
    console.log(total);
    
    this.grantTotal=Number(total.toFixed(2))
    this.discountTotal=this.grantTotal

  }

  emptyCart(){
    this.cart.removeCart()
  }


  checkout(){
    this.checkoutMsg='Your order is placed successfully'
    setTimeout(()=>{
      this.emptyCart()
      // this.route.navigateByUrl('')
      window.location.reload()
    },2000)
  }

}
