import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { WeatherViewComponent } from './main/weather-view/weather-view.component';


const appRouting: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'weather-view',
    component: WeatherViewComponent,
  }
];

// This is the root routing module for navigating to different parts of the app
@NgModule({
  imports: [
    RouterModule.forRoot(appRouting),
  ],
  exports: [RouterModule],
})

export class AppRouting {}
