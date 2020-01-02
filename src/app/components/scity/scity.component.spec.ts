import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScityComponent } from './scity.component';

describe('ScityComponent', () => {
  let component: ScityComponent;
  let fixture: ComponentFixture<ScityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
