import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceAddEventComponent } from './space-add-event.component';

describe('SpaceAddEventComponent', () => {
  let component: SpaceAddEventComponent;
  let fixture: ComponentFixture<SpaceAddEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceAddEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceAddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
