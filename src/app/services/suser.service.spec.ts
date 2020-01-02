import { TestBed } from '@angular/core/testing';

import { SuserService } from './suser.service';

describe('SuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuserService = TestBed.get(SuserService);
    expect(service).toBeTruthy();
  });
});
