import { TestBed } from '@angular/core/testing';

import { ProductInputHttpService } from './produtc-input-http.service';

describe('ProductInputHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductInputHttpService = TestBed.get(ProductInputHttpService);
    expect(service).toBeTruthy();
  });
});
