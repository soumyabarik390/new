import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css','../../assets/css/login.css']
})

export class LoginPageComponent implements OnInit {
  username:string="";
  password:string="";
  
  constructor() { }

  ngOnInit():void {
  }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);  // { first: '', last: '' }
    console.log(loginForm.valid);  // false
  }
}
