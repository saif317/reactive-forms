import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9_-]{8,15}$'),
    ]),
  });

  httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  login(): void {
    const body: object = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.http
      .post(
        'https://jsonplaceholder.typicode.com/posts',
        body,
        this.httpOptions
      )
      .subscribe({
        next: (data) => {
          console.log('data', data);
        },
        error: (error) => {
          console.error('Error', error);
        },
      });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
