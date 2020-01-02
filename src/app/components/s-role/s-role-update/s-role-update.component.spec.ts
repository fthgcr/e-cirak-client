import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SRoleUpdateComponent } from './s-role-update.component';

describe('SRoleUpdateComponent', () => {
  let component: SRoleUpdateComponent;
  let fixture: ComponentFixture<SRoleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SRoleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SRoleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
