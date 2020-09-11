import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { service } from '../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginrUrl: any = environment.loginURL;

  constructor(private serv:service,private formBuilder: FormBuilder,private router:Router) {
    this.createLoginForm();

   }
  ngOnInit(): void {
  }


  loginForm: FormGroup;
  loginresponce :any;

login(){
  let data = this.loginForm;
  console.log('request body'+data)
  this.serv.postApi(this.loginrUrl,this.loginForm.value).subscribe(access=>{
    localStorage.setItem('userDetails', JSON.stringify(access));
    console.log("responce", access)
    if(access){
      this.router.navigate(['home']);
      
    }else
    {
      alert.arguments('invalid credentials');
    }
  });
}

createLoginForm(){
  this.loginForm = this.formBuilder.group({
    uname: [''],  
    psw: ['']
  });
}
}
