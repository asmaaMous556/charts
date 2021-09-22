import { chart } from './../../../models/chart';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-details',
  templateUrl: './charts-details.component.html',
  styleUrls: ['./charts-details.component.scss']
})
export class ChartsDetailsComponent implements OnInit {
@Input () chart!:chart
  constructor() { }

  ngOnInit(): void {
    console.log(this.chart);
    
  }

}
