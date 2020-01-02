import { TestBed } from '@angular/core/testing';

import { SneighborhoodService } from './sneighborhood.service';

describe('SneighborhoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SneighborhoodService = TestBed.get(SneighborhoodService);
    expect(service).toBeTruthy();
  });
});
