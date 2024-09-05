import { TestBed } from '@angular/core/testing';

import { CurrencyRequestService } from './currency-request.service';

describe('CurrencyRequestService', () => {
  let service: CurrencyRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
