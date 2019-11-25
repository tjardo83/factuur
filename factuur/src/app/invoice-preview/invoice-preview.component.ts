import { Component, OnInit } from '@angular/core';

import { InvoiceDataService } from './invoice-data.service';

@Component({
  selector: 'invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.css']
})
export class InvoicePreviewComponent implements OnInit {

  imageUrl = 'assets/Elogio-logo.png';

  constructor(invoiceData: InvoiceDataService) {
    invoiceData.getInvoiceData();
    console.log(invoiceData.getInvoiceData().invoiceNumber);
  }

  ngOnInit() {
  }

}
