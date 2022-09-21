import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceEvenementsComponent } from './space-evenements.component';

describe('EspaceEvenementsComponent', () => {
  let component: SpaceEvenementsComponent;
  let fixture: ComponentFixture<SpaceEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceEvenementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
