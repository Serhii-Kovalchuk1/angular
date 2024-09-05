import { Component, OnInit } from '@angular/core';
import { CurrencyDataService } from '../../services/currency-data.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.less'
})
export class ShowComponent implements OnInit {

  constructor(private currencyDataService: CurrencyDataService) {

  }
  
  ngOnInit(): void {
    this.currencyDataService.data$.subscribe(data => {
      console.log('Received data:', data)
    });
  }
}
