import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrolePermissionUpdateComponent } from './srole-permission-update.component';

describe('SrolePermissionUpdateComponent', () => {
  let component: SrolePermissionUpdateComponent;
  let fixture: ComponentFixture<SrolePermissionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrolePermissionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrolePermissionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
