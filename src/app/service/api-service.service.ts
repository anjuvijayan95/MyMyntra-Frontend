import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


const options={
  headers:new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  searchKey=new BehaviorSubject('')
  
  constructor(private http:HttpClient) {}

  

  //created a function for give request to backend
  registerServ(uname:any,mobile:any,pswd:any,address:any){
    const body={
      uname,
      mobile,
      pswd,
      address
    }
    return this.http.post('http://localhost:3000/register',body)
  }

  loginServ(mobile:any,pswd:any){
    const body={
      mobile,
      pswd
    }
    return this.http.post('http://localhost:3000/login',body)
  }

  // this api call need for shop component
  allProductServ(){
    return this.http.get('http://localhost:3000/allProducts')
  }


  // this api call need for procuct component (view)
  viewProduct(proId:any){
    return this.http.get('http://localhost:3000/view-products/'+proId)
   }


  // this api call need for product component'wishlist btn
   addtowishServ(product:any){
    return this.http.post('http://localhost:3000/add-to-wishlist',product)
  }

  // appending token to http header
  appendToken(){
          //fetch token from local storage
          const token= localStorage.getItem('token')||''
          //create http header
          var headers = new HttpHeaders()
          if(token){
          //append token inside http headers
          headers=headers.append('access-token',token)
          options.headers=headers
        }
          return options
  
  }

    // this api call need for wishlist component (view)
    getwishlistServ(){
      return this.http.get('http://localhost:3000/get-wishlist',this.appendToken())
    }

    // this api call need for delete from wishlist component (view)
    deletewishlistServ(proId:any){
      return this.http.delete('http://localhost:3000/wishlist-delete/'+proId)
    }

    // this api call need for brand component
    brandServ(){
      return this.http.get('http://localhost:3000/brands')
    }

    // api call for get a particular brand
    // oneBrandServ(){
    //  return this.http.get('http://localhost:3000/brand')
    // }


    


}
