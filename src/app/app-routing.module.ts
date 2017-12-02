import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ProjectsComponent} from "./projects/projects.component";
import {HomeComponent} from "./home/home.component";
import {ExperienceComponent} from "./experience/experience.component";
import {SkillsComponent} from "./skills/skills.component";

const portfolioRoutes:Routes = [
  { path: '' , component: AboutComponent, pathMatch: 'full' },
  // { path: '' , redirectTo: '/about', pathMatch: 'full' },
  { path:'about', component: AboutComponent },
  { path:'projects', component: ProjectsComponent },
  { path:'experience', component: ExperienceComponent },
  { path:'skills', component: SkillsComponent },
  { path:'contact', component: ContactComponent }
];

@NgModule({
  imports : [
    RouterModule.forRoot(portfolioRoutes)
  ],
  exports : [
    RouterModule
  ],
  providers:[
  ]
})
export class PortfolioRoutingModule{

}
