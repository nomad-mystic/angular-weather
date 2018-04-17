import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// declare var Chart: any;
const Chart = require('C:/Users/kmurphy/Desktop/learning/angular_weather/angular-weather/node_modules/chart.js/dist/Chart.bundle.js');

@Component({
  selector: 'weather-graph',
  templateUrl: './weather-graph.component.html'
})


export class WeatherGraphComponent implements OnInit {

  @ViewChild('graphCanvas') public graphCanvas: ElementRef;

  ngOnInit () {
    console.log(this.graphCanvas);
    const ctx = this.graphCanvas.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
