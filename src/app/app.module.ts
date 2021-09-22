import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule} from 'primeng/button';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import { ChartsTypesComponent } from './components/charts-types/charts-types.component';
import { ChartsDetailsComponent } from './components/charts-types/charts-details/charts-details.component';





@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    ChartsTypesComponent,
   
    ChartsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
