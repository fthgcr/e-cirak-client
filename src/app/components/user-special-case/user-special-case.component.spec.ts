import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecialCaseComponent } from './user-special-case.component';

describe('UserSpecialCaseComponent', () => {
  let component: UserSpecialCaseComponent;
  let fixture: ComponentFixture<UserSpecialCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSpecialCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecialCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
