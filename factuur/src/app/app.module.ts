import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoicePreviewComponent } from './invoice-preview/invoice-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicePreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
