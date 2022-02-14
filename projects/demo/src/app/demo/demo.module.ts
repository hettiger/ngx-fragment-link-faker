import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FragmentLinkFakerModule } from 'ngx-fragment-link-faker';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FragmentLinkFakerModule
  ]
})
export class DemoModule { }
