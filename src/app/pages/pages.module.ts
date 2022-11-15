import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
