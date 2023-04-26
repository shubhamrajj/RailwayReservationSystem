import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private loginAuth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    Username: new FormControl<any>('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15),]),
  });

  isUserValid: boolean= false;

  loginSubmitted() {
    this.loginAuth.loginadmin([this.loginForm.value.Username, this.loginForm.value.Password])
    .subscribe((res) => {
      if(res == 'Failure'){
        this.isUserValid=false;
        alert('Login Unsuccessful');
      } else{
        this.isUserValid = true;
        this.loginAuth.setToken(res);
        this.router.navigateByUrl('/adminhome');
      }
    }); 

  }



  get Username(): FormControl {
    return this.loginForm.get('Username') as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get('Password') as FormControl;
  }
}
