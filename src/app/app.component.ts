import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyDataService } from './services/currency-data.service';
import { CurrencySelectorComponent } from "./components/currency-selector/currency-selector.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencySelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [CurrencyDataService]
})
export class AppComponent {
  title = 'app';
}
