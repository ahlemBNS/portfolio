import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./pages/main/main.component";
import { SkillsListComponent } from './pages/skills-list/skills-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [AppComponent, MainComponent, SkillsListComponent, HomeComponent, ProjectsListComponent, BlogComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
