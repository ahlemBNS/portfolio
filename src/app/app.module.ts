import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainViewComponent } from "./pages/main-view/main-view.component";
import { KnowMeStepComponent } from './components/know-me-step/know-me-step.component';

@NgModule({
  declarations: [AppComponent, MainViewComponent, KnowMeStepComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
