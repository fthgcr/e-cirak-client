import { TestBed } from '@angular/core/testing';

import { StudentPropService } from './student-prop.service';

describe('StudentPropService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentPropService = TestBed.get(StudentPropService);
    expect(service).toBeTruthy();
  });
});
