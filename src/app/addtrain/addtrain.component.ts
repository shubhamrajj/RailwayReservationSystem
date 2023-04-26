import { Component, OnInit } from '@angular/core';
import { Train } from '../models/Train';

@Component({
  selector: 'app-addtrain',
  templateUrl: './addtrain.component.html',
  styleUrls: ['./addtrain.component.css']
})
export class AddtrainComponent implements OnInit {

// addTrainRequest: Train = {
//     id: '',
//     name = '',
//     sourceStation = '',
//     destinationStation = '',
//     arrivalDatetime = 0,
//     departureDatetime = 0,
//     totalSeats = 0,
//     availableSeats = 0,
//     class = '',
//     fare = 0,
// }
  constructor() { }

  ngOnInit(): void {
  }

}
