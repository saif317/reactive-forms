import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login(): void {
    console.log(this.loginForm.get('username')?.value);
    console.log(this.loginForm.get('password')?.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
