import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";
import {SearchComponent} from "./search/search.component";
import { WeatherGraphComponent } from './weather-graph/weather-graph.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    SearchComponent,
    WeatherGraphComponent,
  ],
  exports: [
    WelcomeComponent,
    SearchComponent,
    WeatherGraphComponent,
  ]
})

export class MainModule {}
