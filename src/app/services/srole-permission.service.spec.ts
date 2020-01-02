import { TestBed } from '@angular/core/testing';

import { SrolePermissionService } from './srole-permission.service';

describe('SrolePermissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrolePermissionService = TestBed.get(SrolePermissionService);
    expect(service).toBeTruthy();
  });
});
