import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';


@Injectable()

export class WeatherService {


  public weatherLegend =  new Subject();


  // send the custom HTML from the weather graph component
  createLegendHTML (legendHTML: string) {
    this.weatherLegend.next(legendHTML);
  }

}
