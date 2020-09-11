import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor( private router:Router) { }

  
  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.router.navigate(['register']);
  }

}
