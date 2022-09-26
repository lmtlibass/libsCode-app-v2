import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoudetailComponent } from './admin-coudetail.component';

describe('AdminCoudetailComponent', () => {
  let component: AdminCoudetailComponent;
  let fixture: ComponentFixture<AdminCoudetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoudetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCoudetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
