import { TestBed } from '@angular/core/testing';

import { SpecialCaseService } from './special-case.service';

describe('SpecialCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecialCaseService = TestBed.get(SpecialCaseService);
    expect(service).toBeTruthy();
  });
});
