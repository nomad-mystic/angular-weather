import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import {SearchComponent} from './search/search.component';
import { WeatherGraphComponent } from './weather-view/weather-graph/weather-graph.component';
import { WeatherDetailsComponent } from './weather-view/weather-details/weather-details.component';
import { WeatherService } from './weather-view/weather.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    WelcomeComponent,
    SearchComponent,
    WeatherGraphComponent,
    WeatherDetailsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    WelcomeComponent,
    SearchComponent,
    WeatherGraphComponent,
    WeatherDetailsComponent,
  ],
  providers: [
    WeatherService,
  ]
})

export class MainModule {}
