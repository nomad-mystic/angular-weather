import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'weather-details',
  templateUrl: './weather-details.component.html',
})

export class WeatherDetailsComponent implements OnInit {

  public weatherDetails = [
    {
      // forecast.simpleforecast.forecastday
      pop: '0.00',              // forecast.simpleforecast.forecastday.pop
      qpf: '0.00',              // forecast.simpleforecast.forecastday.qpf_allday.in
      weekdayShort: 'Tue',      // forecast.simpleforecast.forecastday.date.weekday_short
      iconURL: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif', // forecast.simpleforecast.forecastday.icon_url
      highTempt: '68',          // forecast.simpleforecast.forecastday.high.fahrenheit
      lowTempt: '50'            // forecast.simpleforecast.forecastday.low.fahrenheit
    },
    {
      // forecast.simpleforecast.forecastday
      pop: '0.00',              // forecast.simpleforecast.forecastday.pop
      qpf: '0.00',              // forecast.simpleforecast.forecastday.qpf_allday.in
      weekdayShort: 'Wed',      // forecast.simpleforecast.forecastday.date.weekday_short
      iconURL: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif', // forecast.simpleforecast.forecastday.icon_url
      highTempt: '72',          // forecast.simpleforecast.forecastday.high.fahrenheit
      lowTempt: '54'            // forecast.simpleforecast.forecastday.low.fahrenheit
    },
    {
      // forecast.simpleforecast.forecastday
      pop: '0.00',              // forecast.simpleforecast.forecastday.pop
      qpf: '0.00',              // forecast.simpleforecast.forecastday.qpf_allday.in
      weekdayShort: 'Tue',      // forecast.simpleforecast.forecastday.date.weekday_short
      iconURL: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif', // forecast.simpleforecast.forecastday.icon_url
      highTempt: '68',          // forecast.simpleforecast.forecastday.high.fahrenheit
      lowTempt: '50'            // forecast.simpleforecast.forecastday.low.fahrenheit
    },
    {
      // forecast.simpleforecast.forecastday
      pop: '0.00',              // forecast.simpleforecast.forecastday.pop
      qpf: '0.00',              // forecast.simpleforecast.forecastday.qpf_allday.in
      weekdayShort: 'Wed',      // forecast.simpleforecast.forecastday.date.weekday_short
      iconURL: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif', // forecast.simpleforecast.forecastday.icon_url
      highTempt: '72',          // forecast.simpleforecast.forecastday.high.fahrenheit
      lowTempt: '54'            // forecast.simpleforecast.forecastday.low.fahrenheit
    },
    {
      // forecast.simpleforecast.forecastday
      pop: '0.00',              // forecast.simpleforecast.forecastday.pop
      qpf: '0.00',              // forecast.simpleforecast.forecastday.qpf_allday.in
      weekdayShort: 'Wed',      // forecast.simpleforecast.forecastday.date.weekday_short
      iconURL: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif', // forecast.simpleforecast.forecastday.icon_url
      highTempt: '72',          // forecast.simpleforecast.forecastday.high.fahrenheit
      lowTempt: '54'            // forecast.simpleforecast.forecastday.low.fahrenheit
    },
  ];
  private legendHTML: string;

  constructor (private weatherService: WeatherService) {}


  ngOnInit () {
    this.weatherService.weatherLegend
      .subscribe(
        (legend: string) => {
          console.log(legend);
          this.legendHTML = legend;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
