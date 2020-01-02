import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStudentUpdateComponent } from './user-student-update.component';

describe('UserStudentUpdateComponent', () => {
  let component: UserStudentUpdateComponent;
  let fixture: ComponentFixture<UserStudentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStudentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStudentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
