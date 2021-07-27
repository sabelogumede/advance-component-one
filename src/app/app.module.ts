import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle/toggle.component';
import { IrreleventImplementationComponent } from './irrelevent-implementation/irrelevent-implementation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    IrreleventImplementationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
