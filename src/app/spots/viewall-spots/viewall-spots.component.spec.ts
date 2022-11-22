import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallSpotsComponent } from './viewall-spots.component';

describe('ViewallSpotsComponent', () => {
  let component: ViewallSpotsComponent;
  let fixture: ComponentFixture<ViewallSpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallSpotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
