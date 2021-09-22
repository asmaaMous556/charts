import { Component, OnInit } from '@angular/core';
import { chart } from 'src/app/models/chart';

@Component({
  selector: 'app-charts-types',
  templateUrl: './charts-types.component.html',
  styleUrls: ['./charts-types.component.scss']
})
export class ChartsTypesComponent implements OnInit {
  charts: chart[] = []
  chart!: chart;
  constructor() { }

  ngOnInit(): void {
    this.charts = [{
      id: '1',
      name: 'Bar Chart',
      desc: 'You can use them to quickly compare data across categories',
      imageUrl: '../../../assets/charts/icons8-chart-48 (1).png'
    },
    {
      id: '2',
      name: 'Line Chart',
      desc: 'connects several distinct data points,',
      imageUrl: '../../../assets/charts/icons8-chart-50.png'
    },
    {
      id: '3',
      name: 'Pie Chart',
      desc: 'Pie charts are powerful for adding detail to other visualizations',
      imageUrl: '../../../assets/charts/icons8-chart-64 (3).png'
    },
    {
      id: '4',
      name: 'Maps',
      desc: 'Maps are a no-brainer for visualizing any kind of location information',
      imageUrl: '../../../assets/charts/icons8-chart-64 (2).png'

    },
    {
      id: '5',
      name: 'Density Maps',
      desc: 'Density maps reveal patterns or relative concentrations ',
      imageUrl: '.../../../assets/charts/icons8-chart-64 (1).png'
    }

    ]
  };



  passChart(chart: chart) {
    this.chart=chart
    console.log(chart);
  }
}
