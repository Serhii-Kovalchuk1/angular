import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyDataService } from '../../services/currency-data.service';
import { Subject, Observable, of } from 'rxjs';


@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.less'
})
export class CurrencySelectorComponent implements OnInit {
  
  public currencyOptions: Array<string> = [];
  
  constructor(private currencyDataService: CurrencyDataService) {
  }

  ngOnInit(): void {
    this.currencyOptions = this.currencyDataService.getCurrencyOptions();
  }

  onSelect(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    this.sendSelectedValue(selectedValue);
    console.log('Selected Value :', selectedValue);
  }
  
  private sendSelectedValue(value: string): void {
    this.currencyDataService.pushData(value);
  }
  
}
