import { Component, OnInit } from '@angular/core';

import { InvoiceDataService } from './invoice-data.service';

@Component({
  selector: 'invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.css']
})
export class InvoicePreviewComponent implements OnInit {

  imageUrl = 'assets/Elogio-logo.png';
  invoiceDataService: InvoiceDataService;
  invoiceData: any;

  constructor(invoiceDataService: InvoiceDataService) {
    this.invoiceDataService = invoiceDataService;
    this.invoiceData = this.invoiceDataService.getInvoiceData();
  }

  ngOnInit() {
  }

}
