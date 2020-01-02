import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSchoolUpdateComponent } from './user-school-update.component';

describe('UserSchoolUpdateComponent', () => {
  let component: UserSchoolUpdateComponent;
  let fixture: ComponentFixture<UserSchoolUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSchoolUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSchoolUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
