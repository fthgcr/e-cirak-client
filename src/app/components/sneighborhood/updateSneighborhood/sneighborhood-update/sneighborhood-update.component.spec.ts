import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SneighborhoodUpdateComponent } from './sneighborhood-update.component';

describe('SneighborhoodUpdateComponent', () => {
  let component: SneighborhoodUpdateComponent;
  let fixture: ComponentFixture<SneighborhoodUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SneighborhoodUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SneighborhoodUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
