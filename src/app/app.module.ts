import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // ,
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'heroes',
    //     component: HeroesComponent
    //   },
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    //   }
    // ])

],
  declarations: [
    AppComponent ,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent],
  providers: [
    HeroService, { provide: LocationStrategy, useClass: HashLocationStrategy, }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
