import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SRoleComponent } from './s-role.component';

describe('SRoleComponent', () => {
  let component: SRoleComponent;
  let fixture: ComponentFixture<SRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
