import { Component } from '@angular/core';
import { CurrencyDataService } from '../../services/currency-data.service';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.less'
})
export class CurrencySelectorComponent {

  private currencyDataService: CurrencyDataService;

  constructor() {
    this.currencyDataService = new CurrencyDataService();
  }

  public getCurrencyData() {
    return this.currencyDataService.getCurrencyData();
  }

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log('Selected Value :', selectedValue);
  }
}
