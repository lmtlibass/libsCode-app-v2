import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacesHomeComponent } from './spaces-home.component';

describe('SpacesHomeComponent', () => {
  let component: SpacesHomeComponent;
  let fixture: ComponentFixture<SpacesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
