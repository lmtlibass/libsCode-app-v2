import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceAddCourComponent } from './space-add-cour.component';

describe('SpaceAddCourComponent', () => {
  let component: SpaceAddCourComponent;
  let fixture: ComponentFixture<SpaceAddCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceAddCourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceAddCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
