import { TestBed } from '@angular/core/testing';

import { SRoleService } from './s-role.service';

describe('SRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SRoleService = TestBed.get(SRoleService);
    expect(service).toBeTruthy();
  });
});
