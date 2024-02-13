import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFlightsComponent } from './all-flights.component';

describe('AllFlightsComponent', () => {
  let component: AllFlightsComponent;
  let fixture: ComponentFixture<AllFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllFlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
