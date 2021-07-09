import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css','../../assets/css/login.css']
})
export class LoginPageComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit():void {
  }

  //loginForm: FormGroup;
   // this.loginForm = new FormGroup({
    //  email: new FormControl('', [Validators.required, Validators.email]),
    //  password: new FormControl('', [Validators.required])
   // });
  //}

  //onSubmit() {
  //  if(this.loginForm.valid) {
  //    console.log(this._v());
  //  }
  //}
  //_v() {
  //  return this.loginForm.value;
  //}
}
