import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuserUpdateComponent } from './suser-update.component';

describe('SuserUpdateComponent', () => {
  let component: SuserUpdateComponent;
  let fixture: ComponentFixture<SuserUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuserUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
