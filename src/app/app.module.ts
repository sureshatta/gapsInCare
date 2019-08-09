import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { ModelPopupComponent } from './model-popup/model-popup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModelPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
