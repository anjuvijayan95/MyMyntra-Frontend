import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

passMsg:string=''
failMsg:string=''

registReactForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[" "a-zA-Z]*')]],
  mobile:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  address:['',[Validators.required,Validators.pattern('[" "0-9a-zA-Z,]*')]]
})

constructor(private fb:FormBuilder,private api:ApiServiceService,private route:Router){}

registerTs(){
  if(this.registReactForm.valid){
   let uname=this.registReactForm.value.uname
   let mobile=this.registReactForm.value.mobile
   let pswd=this.registReactForm.value.pswd
   let address=this.registReactForm.value.address


   //create a call back function for get the result from b:end through apiService
   this.api.registerServ(uname,mobile,pswd,address)
   .subscribe((result:any)=>{
    this.passMsg=result.message
    alert(this.passMsg) 
    // alert('Registration successfull')
   setTimeout(()=>{
    this.registReactForm.reset()
    this.passMsg=''
  },1000)
    },
    (result:any)=>{
      this.failMsg=result.error.message
      alert(this.failMsg)
      this.route.navigateByUrl('')
    })
}
else{
  alert('Invalid Registration')
}
}

}
