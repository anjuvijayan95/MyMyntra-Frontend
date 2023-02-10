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
       console.log(this.loginReactForm.value);
        this.api.loginServ(mobile,pswd)
        .subscribe((result:any)=>{
            this.successMsg=result.message
            setTimeout(()=>{
              this.route.navigateByUrl('/home')
            },3000)
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

