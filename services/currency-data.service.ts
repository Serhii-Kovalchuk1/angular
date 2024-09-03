import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  private currencyData: Array<string> = ['SHP', 'XCD'];

  constructor() { }
}
