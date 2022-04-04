import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from "./projects/projects.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DocsComponent } from './docs/docs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamComponent } from './team/team.component';
import { RedirectComponent1 } from './redirects/first/first.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "projects", component: ProjectsComponent }, // <domain>/projects
  { path: "docs", component: DocsComponent }, // <domain>/docs
  { path: "contactme", component: ContactUsComponent }, // <domain>/contactus
  { path: "team", component: TeamComponent }, // <domain>/team
  { path: "discord-nitro", component: RedirectComponent1 },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
