/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes'; 
import { HttpClientModule } from '@angular/common/http';
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),importProvidersFrom(HttpClientModule) ]}).catch(err => console.error(err));