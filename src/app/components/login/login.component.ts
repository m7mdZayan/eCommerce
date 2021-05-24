import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http
      .post('http://127.0.0.1:3000/api/users/login', this.form.getRawValue(), {
        withCredentials: true,
      })
      .subscribe((res: any) => {
        // console.log('user = ', res.data.user);
        Emitters.userEmitter.emit(res.data.user);
        this.router.navigate(['']);
      });
  }
}
