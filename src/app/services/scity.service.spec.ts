import { TestBed } from '@angular/core/testing';

import { ScityService } from './scity.service';

describe('ScityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScityService = TestBed.get(ScityService);
    expect(service).toBeTruthy();
  });
});
