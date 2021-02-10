import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonAppointmentDialogComponent } from './reason-appointment-dialog.component';

describe('ReasonAppointmentDialogComponent', () => {
  let component: ReasonAppointmentDialogComponent;
  let fixture: ComponentFixture<ReasonAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonAppointmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
