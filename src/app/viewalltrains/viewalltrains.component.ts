import { Component, OnInit } from '@angular/core';
import { Train } from '../models/Train';
import { TrainService } from '../services/Train.service';

@Component({
  selector: 'app-viewalltrains',
  templateUrl: './viewalltrains.component.html',
  styleUrls: ['./viewalltrains.component.css']
})
export class ViewalltrainsComponent implements OnInit {
trains: Train[] = [];
  constructor(private trainService:TrainService) { }

  ngOnInit(): void {
    this.trainService
    .getTrain()
    .subscribe((result: Train[]) => (this.trains = result));
  
  }

}
