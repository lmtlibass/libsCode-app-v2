import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceInscritEventComponent } from './space-inscrit-event.component';

describe('SpaceInscritEventComponent', () => {
  let component: SpaceInscritEventComponent;
  let fixture: ComponentFixture<SpaceInscritEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceInscritEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceInscritEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
