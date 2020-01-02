import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuserComponent } from './suser.component';

describe('SuserComponent', () => {
  let component: SuserComponent;
  let fixture: ComponentFixture<SuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
