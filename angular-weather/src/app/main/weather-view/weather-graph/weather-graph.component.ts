import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../weather.service';

// declare var Chart: any;
const Chart = require('C:/Users/kmurphy/Desktop/learning/angular_weather/angular-weather/node_modules/chart.js/dist/Chart.bundle.js');

@Component({
  selector: 'weather-graph',
  templateUrl: './weather-graph.component.html'
})


export class WeatherGraphComponent implements OnInit {

  data: number[] = [10, 20, 14, 12, 6];

  @ViewChild('graphCanvas') public graphCanvas: ElementRef;

  constructor (private weatherService: WeatherService) {}

  ngOnInit () {
    console.log(this.graphCanvas);
    const ctx = this.graphCanvas.nativeElement.getContext('2d');
    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['tues', 'wends', 'thurs', 'friday', 'sat'],
        datasets: [
          {
            label: 'High',
            data: [86, 60, 72, 70, 68],
            // label: "Africa",
            borderColor: '#AA3939',
            fill: false,
            pointRadius: 5,
            pointBackgroundColor: '#AA3939',
          },
          {
            label: 'Low',
            data: [65, 50, 60, 45, 52],
            // label: "Africa",
            borderColor: '#226666',
            fill: false,
            pointRadius: 5,
            pointBackgroundColor: '#226666',
          },
        ]
      },
      options: {
        legend: {
          display: false,
        },
        legendCallback: function(chart) {
          // Return the HTML string here.
          console.log(chart);
          return '<h1>Testing that there is a custom legend</h1>';
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          }
        },
      },
    });


    // must call this to make custom legends
    const legendHTML = myLineChart.generateLegend();

    // sending this out the the weather service so weather details can use it
    this.weatherService.createLegendHTML(legendHTML);
  }
}
