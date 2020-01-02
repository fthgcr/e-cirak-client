import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCaseComponent } from './special-case.component';

describe('SpecialCaseComponent', () => {
  let component: SpecialCaseComponent;
  let fixture: ComponentFixture<SpecialCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
