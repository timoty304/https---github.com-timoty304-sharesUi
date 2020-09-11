import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {LoginComponent} from './components/login/login.component';
import {registerComponent} from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DefaultComponent } from './components/default/default.component';


const routes: Routes = [

  { path:'', component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  //{ path:'home', component:DefaultComponent,children: [{path:'',component:HomeComponent}]},
  { path:'home', component:HomeComponent},
  {path:'register', component:registerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
  
 }
