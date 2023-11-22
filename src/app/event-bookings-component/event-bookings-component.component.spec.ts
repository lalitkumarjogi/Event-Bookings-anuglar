import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingsComponentComponent } from './event-bookings-component.component';

describe('EventBookingsComponentComponent', () => {
  let component: EventBookingsComponentComponent;
  let fixture: ComponentFixture<EventBookingsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventBookingsComponentComponent]
    });
    fixture = TestBed.createComponent(EventBookingsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
