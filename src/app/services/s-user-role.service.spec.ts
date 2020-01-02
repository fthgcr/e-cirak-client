import { TestBed } from '@angular/core/testing';

import { SUserRoleService } from './s-user-role.service';

describe('SUserRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SUserRoleService = TestBed.get(SUserRoleService);
    expect(service).toBeTruthy();
  });
});
