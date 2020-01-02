import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPropComponent } from './student-prop.component';

describe('StudentPropComponent', () => {
  let component: StudentPropComponent;
  let fixture: ComponentFixture<StudentPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
