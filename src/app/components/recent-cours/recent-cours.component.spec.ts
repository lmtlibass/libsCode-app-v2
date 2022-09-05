import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCoursComponent } from './recent-cours.component';

describe('RecentCoursComponent', () => {
  let component: RecentCoursComponent;
  let fixture: ComponentFixture<RecentCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
