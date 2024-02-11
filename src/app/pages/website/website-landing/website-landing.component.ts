import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MasterService } from '../../../core/service/master.service';

@Component({
  selector: 'app-website-landing',
  templateUrl: './website-landing.component.html',
  styleUrl: './website-landing.component.css'
})
export class WebsiteLandingComponent {


  loggedUserData: any;
  registerObj:any = {
    "name": "",
    "mobileNo": "",
    "email": "",
    "city": "",
    "address": "",
    "password": ""
  };
  loginObj: any ={
    "email": "string",
    "password": "string"
  }
  constructor(private master: MasterService){
    const isLocal = localStorage.getItem('flightCustomer');
    if(isLocal != null) {
      this.loggedUserData = JSON.parse(isLocal);
    }
  }

  logff() {
    localStorage.removeItem('flightCustomer')
    this.loggedUserData =  undefined;
    }
  onSave() {
    this.master.register(this.registerObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Resgister Success');
        this.closeRegister()
      } else {
        alert(res.message);
      }
    })
  }
  onLogin() {
    this.master.login(this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Login Success');
        this.loggedUserData = res.data;
        localStorage.setItem('flightCustomer', JSON.stringify(res.data));
        this.closeLogin()
      } else {
        alert(res.message);
      }
    })
  }

  openRegister() {
    const model = document.getElementById('registerModel');
    if(model != null) {
      model.style.display = "block"
    }
  }
  closeRegister() {
    const model = document.getElementById('registerModel');
    if(model != null) {
      model.style.display = "none"
    }
  }

  openLogin() {
    const model = document.getElementById('loginModel');
    if(model != null) {
      model.style.display = "block"
    }
  }
  closeLogin() {
    const model = document.getElementById('loginModel');
    if(model != null) {
      model.style.display = "none"
    }
  }
}
