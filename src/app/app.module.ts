import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SpinnerComponent } from './utils/spinner/spinner.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    NavbarComponent,
    SpinnerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Importing from App-routing.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
