import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  private currencyData: Array<string> = ['SHP', 'XCD'];

  private dataSubject = new Subject<string>();

  data$: Observable<string> = this.dataSubject.asObservable();

  constructor() { }

  public getCurrencyOptions() {
    return this.currencyData;
  }

  pushData(value: string) {
    this.dataSubject.next(value)
  }
}
