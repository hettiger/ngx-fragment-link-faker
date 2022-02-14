import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FAKE_FRAGMENT_LINKS_CONFIG, FakeFragmentLinksConfig } from 'ngx-fragment-link-faker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: FAKE_FRAGMENT_LINKS_CONFIG,
      useFactory: (): FakeFragmentLinksConfig => ({ scrollTopDelta: 20, scrollBehavior: 'auto' })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
