import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SUserRoleComponent } from './s-user-role.component';

describe('SUserRoleComponent', () => {
  let component: SUserRoleComponent;
  let fixture: ComponentFixture<SUserRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SUserRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
