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

  username: string = '';
  password: string = '';

  login(): void {
    this.username = this.loginForm.get('username')?.value;
    this.password = this.loginForm.get('password')?.value;
  }

  constructor() {}

  ngOnInit(): void {}
}
