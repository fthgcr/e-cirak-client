import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdistrictUpdateComponent } from './sdistrict-update.component';

describe('SdistrictUpdateComponent', () => {
  let component: SdistrictUpdateComponent;
  let fixture: ComponentFixture<SdistrictUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdistrictUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdistrictUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
