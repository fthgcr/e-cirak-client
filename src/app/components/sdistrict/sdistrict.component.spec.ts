import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdistrictComponent } from './sdistrict.component';

describe('SdistrictComponent', () => {
  let component: SdistrictComponent;
  let fixture: ComponentFixture<SdistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
