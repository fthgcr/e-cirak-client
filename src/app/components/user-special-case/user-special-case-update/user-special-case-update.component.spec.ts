import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecialCaseUpdateComponent } from './user-special-case-update.component';

describe('UserSpecialCaseUpdateComponent', () => {
  let component: UserSpecialCaseUpdateComponent;
  let fixture: ComponentFixture<UserSpecialCaseUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSpecialCaseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecialCaseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
