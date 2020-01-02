import { TestBed } from '@angular/core/testing';

import { UserSpecialCaseService } from './user-special-case.service';

describe('UserSpecialCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSpecialCaseService = TestBed.get(UserSpecialCaseService);
    expect(service).toBeTruthy();
  });
});
