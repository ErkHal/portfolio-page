import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubService } from './github.service';
import { ContactInfoComponent } from './contact-info/contact-info.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    AboutComponent,
    NavbarComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GithubService, HashLocationStrategy ],
  bootstrap: [AppComponent]
})
export class AppModule { }
