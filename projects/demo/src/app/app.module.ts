import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FragmentLinkFakerModule } from 'ngx-fragment-link-faker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FragmentLinkFakerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
