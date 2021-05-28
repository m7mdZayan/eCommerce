import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  }

  submit(): void {
    console.log('this.form.getRawValue() = ', this.form.getRawValue());
    this.http
      .post('http://127.0.0.1:3000/api/users/signup', this.form.getRawValue(), {
        withCredentials: true,
      })
      .subscribe((res: any) => {
        // console.log('user = ', res.data.user);
        Emitters.userEmitter.emit(res.data.user);
        this.router.navigate(['/home']);
      });
  }
}
