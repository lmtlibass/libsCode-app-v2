import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEvenementComponent } from './admin-evenement.component';

describe('AdminEvenementComponent', () => {
  let component: AdminEvenementComponent;
  let fixture: ComponentFixture<AdminEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEvenementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
