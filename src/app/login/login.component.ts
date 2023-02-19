import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  successMsg:string=''
  errorMsg:string=''

  loginReactForm=this.fb.group({
    mobile:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private fb:FormBuilder,private api:ApiServiceService,private route:Router){}

  login(){
      if(this.loginReactForm.valid){
        // alert('login success')
       let mobile=this.loginReactForm.value.mobile
       let pswd=this.loginReactForm.value.pswd
      //  above we are simply assingn its value to two variables
      //  console.log(this.loginReactForm.value);
        this.api.loginServ(mobile,pswd)
        .subscribe((result:any)=>{
          console.log(result);
          
            this.successMsg=result.message

            //storing customer details in local storage         
            localStorage.setItem("username",result.username)
            localStorage.setItem("mobileNum",result.mobileNum)
            localStorage.setItem("address",result.address)

            // storing token in local storage 
            localStorage.setItem("token",result.token)


            setTimeout(()=>{
              this.route.navigateByUrl('/home')
            },2000)
        },
        (result:any)=>{
          this.errorMsg=result.error.message
        })
       }
       else{
        alert('Invalid login Form')
       }
  }

}

