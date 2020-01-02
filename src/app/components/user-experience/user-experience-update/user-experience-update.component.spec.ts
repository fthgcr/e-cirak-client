import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperienceUpdateComponent } from './user-experience-update.component';

describe('UserExperienceUpdateComponent', () => {
  let component: UserExperienceUpdateComponent;
  let fixture: ComponentFixture<UserExperienceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExperienceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
