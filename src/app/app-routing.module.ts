import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { SkillsListComponent } from "./pages/skills-list/skills-list.component";

const routes: Routes = [{ path: "", component: MainComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
