import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
//import { Router, response } from 'express';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService],
  
})
export class LoginComponent {
  jsonData:any;
  data: any=[];
loginform=this.fb.group({
  email: ['',[Validators.required,Validators.email]],
  password: ['',Validators.required],
  
})
constructor(private fb: FormBuilder, private authService: AuthService, 
  private router: Router, private msgService: MessageService){}

get email() {
  return  this.loginform.controls['email'];
}
get password() {
  return  this.loginform.controls['password'];
}
loginuser() {
  const{email,password} = this.loginform.value;
  this.authService.getUserByEmail(email as string).subscribe(
    response=>{
      if(response.length>0 && response[0].password === password) {
        this.router.navigate(['/home']);
      }
      else {
        this.msgService.add({severity:'error',summary:'Error',detail:'email or passwrod is invalid'});
      }
    },
    error => {
      this.msgService.add({severity:'error',summary:'Error',detail:'something wrong.'});
    }
  )
} 

//loginuser() {

 // this.jsonData= this.authService.getUserByEmail();
//  console.log(JSON.parse(JSON.stringify(this.jsonData)));
//  this.data=this.jsonData['users'];
  //this.AppTitle='MYTP';

//alert(this.jsonData['users']);
//}

}
