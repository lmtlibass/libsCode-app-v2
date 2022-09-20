import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCoursComponent } from './space-cours.component';

describe('SpaceCoursComponent', () => {
  let component: SpaceCoursComponent;
  let fixture: ComponentFixture<SpaceCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
