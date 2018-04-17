import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome/welcome.component";
import {SearchComponent} from "./search/search.component";


@NgModule({
  declarations: [
    WelcomeComponent,
    SearchComponent,
  ],
  exports: [
    WelcomeComponent,
    SearchComponent,
  ]
})

export class MainModule {}
