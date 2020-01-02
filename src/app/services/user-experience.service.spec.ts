import { TestBed } from '@angular/core/testing';

import { UserExperienceService } from './user-experience.service';

describe('UserExperienceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserExperienceService = TestBed.get(UserExperienceService);
    expect(service).toBeTruthy();
  });
});
