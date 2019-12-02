import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

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
  entryComponents: [InvoicePreviewComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const invoicePreviewCE = createCustomElement(InvoicePreviewComponent, { injector: this.injector });
    customElements.define('invoice-preview-ce', invoicePreviewCE);
  }

}
