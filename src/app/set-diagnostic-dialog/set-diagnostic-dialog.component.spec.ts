import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDiagnosticDialogComponent } from './set-diagnostic-dialog.component';

describe('SetDiagnosticDialogComponent', () => {
  let component: SetDiagnosticDialogComponent;
  let fixture: ComponentFixture<SetDiagnosticDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetDiagnosticDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDiagnosticDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
