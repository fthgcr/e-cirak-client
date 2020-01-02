import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScityUpdateComponent } from './scity-update.component';

describe('ScityUpdateComponent', () => {
  let component: ScityUpdateComponent;
  let fixture: ComponentFixture<ScityUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScityUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
