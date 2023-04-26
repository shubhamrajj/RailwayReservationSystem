import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  displayMsg: string = '';
  isAccountCreated: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  registerForm = new FormGroup({
    name: new FormControl<any>("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    age: new FormControl("", [Validators.required, Validators.minLength(0)]),
    gender: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  registerSubmitted() {
    console.log(this.registerForm.valid);

    this.authService.registerUser([
      this.registerForm.value.name,
      this.registerForm.value.age,
      this.registerForm.value.gender,
      this.registerForm.value.email,
      this.registerForm.value.password
    ]).subscribe(res => {
      if (res == 'Success') {
        this.displayMsg = '';
        this.isAccountCreated = true;
        this.router.navigateByUrl('/signin');
      } else if (res == 'AlreadyExist') {
        this.displayMsg = 'Account already exist. Try another Email.';
        this.isAccountCreated = false;
        this.router.navigateByUrl('/signin');
      } else {
        this.isAccountCreated = true;
        this.router.navigateByUrl('/signin');
      }
    });
  }

  get Name(): FormControl {
    return this.registerForm.get("name") as FormControl;
  }

  get Age(): FormControl {
    return this.registerForm.get("age") as FormControl;
  }

  get Gender(): FormControl {
    return this.registerForm.get("gender") as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }

  get Password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }

}
