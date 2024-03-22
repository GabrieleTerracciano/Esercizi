import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';
import { FiatComponent } from './fiat/fiat.component';
import { FordComponent } from './ford/ford.component';
import { AudiComponent } from './audi/audi.component';

const routes: Route [] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fiat',
    component: FiatComponent
  },
  {
    path: 'ford',
    component: FordComponent
  },
  {
    path: 'audi',
    component: AudiComponent
  },
  {
    path: '**',
    component: Error404Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Error404Component,
    FiatComponent,
    FordComponent,
    AudiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
