import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneighborhoodComponent } from './sneighborhood.component';

describe('SneighborhoodComponent', () => {
  let component: SneighborhoodComponent;
  let fixture: ComponentFixture<SneighborhoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneighborhoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneighborhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
