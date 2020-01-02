import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyReqComponent } from './company-req.component';

describe('CompanyReqComponent', () => {
  let component: CompanyReqComponent;
  let fixture: ComponentFixture<CompanyReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
