import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReqUpdateComponent } from './company-req-update.component';

describe('CompanyReqUpdateComponent', () => {
  let component: CompanyReqUpdateComponent;
  let fixture: ComponentFixture<CompanyReqUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyReqUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyReqUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
