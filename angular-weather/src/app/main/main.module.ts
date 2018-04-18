import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import {SearchComponent} from './search/search.component';
import { WeatherGraphComponent } from './weather-view/weather-graph/weather-graph.component';
import { WeatherDetailsComponent } from './weather-view/weather-details/weather-details.component';
import { WeatherService } from './weather-view/weather.service';
import { CommonModule } from '@angular/common';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WelcomeComponent,
    SearchComponent,
    WeatherGraphComponent,
    WeatherDetailsComponent,
    WeatherViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    WelcomeComponent,
    SearchComponent,
    WeatherViewComponent,
    // WeatherGraphComponent,
    // WeatherDetailsComponent,
  ],
  providers: [
    WeatherService,
  ]
})

export class MainModule {}
