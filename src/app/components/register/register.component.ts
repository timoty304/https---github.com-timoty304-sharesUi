import { Component, OnInit } from '@angular/core';
import { service} from '../services/services';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class registerComponent{
  registerUrl: any = environment.registrationURL;

  constructor(private serv:service,private formBuilder: FormBuilder,private router:Router) {
    this.createRegistrationForm();
   }

  ngOnInit(): void {
  }

  registrationForm: FormGroup;
  registrationresponce :any;
  register(){
    let data = this.registrationForm;
    console.log('request body'+data)

    this.serv.postApi(this.registerUrl,this.registrationForm.value).subscribe(access=>{
      localStorage.setItem('userDetails', JSON.stringify(access));
      console.log("responce", access)
      if(access){
        this.router.navigate(['login']);
        
      }
    });
  }

  
  
  createRegistrationForm(){
    this.registrationForm = this.formBuilder.group({  
      uname: [''],  
      psw: [''],
      email: [''],
      fname: [''],
      lname: [''],
      mobile: []
    });
  }




}
