import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private api:ApiServiceService,private route:Router){}

search(event:any){
  let searchTerm=event.target.value
  this.api.searchKey.next(searchTerm)
  console.log(this.api.searchKey);
  
}

  //function for logout
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("mobileNum")
    localStorage.removeItem("address")

    setTimeout(()=>{
      this.route.navigateByUrl('')
    },2000)
  }

}
