import { TestBed } from '@angular/core/testing';

import { CompanyReqService } from './company-req.service';

describe('CompanyReqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyReqService = TestBed.get(CompanyReqService);
    expect(service).toBeTruthy();
  });
});
