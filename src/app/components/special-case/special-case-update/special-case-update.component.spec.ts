import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCaseUpdateComponent } from './special-case-update.component';

describe('SpecialCaseUpdateComponent', () => {
  let component: SpecialCaseUpdateComponent;
  let fixture: ComponentFixture<SpecialCaseUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialCaseUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCaseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
