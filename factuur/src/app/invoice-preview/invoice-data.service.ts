import { Injectable } from '@angular/core';
import invoiceData from '../../assets/invoice-data.json';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {

  constructor() { }

  getInvoiceData() {
    return invoiceData;
  }
}
