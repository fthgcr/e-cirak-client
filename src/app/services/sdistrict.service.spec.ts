import { TestBed } from '@angular/core/testing';

import { SdistrictService } from './sdistrict.service';

describe('SdistrictService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SdistrictService = TestBed.get(SdistrictService);
    expect(service).toBeTruthy();
  });
});
