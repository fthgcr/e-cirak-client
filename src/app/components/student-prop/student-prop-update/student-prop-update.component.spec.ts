import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPropUpdateComponent } from './student-prop-update.component';

describe('StudentPropUpdateComponent', () => {
  let component: StudentPropUpdateComponent;
  let fixture: ComponentFixture<StudentPropUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPropUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPropUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
