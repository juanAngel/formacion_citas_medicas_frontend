import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptAppointmentDialogComponent } from './accept-appointment-dialog.component';

describe('AcceptAppointmentDialogComponent', () => {
  let component: AcceptAppointmentDialogComponent;
  let fixture: ComponentFixture<AcceptAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptAppointmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
