import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }
logOut(){
this.authService.removeToken();
this.router.navigateByUrl('');
}
addTrain(){}
deleteTrain(){}
updateTrain(){}
viewParticularTrain(){}
viewAllTrains(){}
viewParticularCustomer(){}
viewAllCustomers(){}
}
