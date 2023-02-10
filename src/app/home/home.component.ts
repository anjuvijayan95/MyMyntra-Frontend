import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  brands:any=[]
  allProducts:any=[]
     constructor(private api:ApiServiceService){}

     ngOnInit(): void {
       this.api.brandServ()
       .subscribe((result:any)=>{
           this.brands=result.brands
           console.log(this.brands);
           
       },
       (result:any)=>{
        alert(result.error.message)
       })

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
