import { TestBed, inject } from '@angular/core/testing';

import { CartcountService } from './cartcount.service';

describe('CartcountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartcountService]
    });
  });

  it('should be created', inject([CartcountService], (service: CartcountService) => {
    expect(service).toBeTruthy();
  }));
});
