import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrolePermissionComponent } from './srole-permission.component';

describe('SrolePermissionComponent', () => {
  let component: SrolePermissionComponent;
  let fixture: ComponentFixture<SrolePermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrolePermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrolePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
