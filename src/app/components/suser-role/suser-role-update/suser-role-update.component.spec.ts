import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuserRoleUpdateComponent } from './suser-role-update.component';

describe('SuserRoleUpdateComponent', () => {
  let component: SuserRoleUpdateComponent;
  let fixture: ComponentFixture<SuserRoleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuserRoleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuserRoleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
