import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DoctorService} from "./doctor.service"
import {PatientService} from "./patient.service"
import {MedicalAppointmentService} from "./medical-appointment.service"


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorSearchComponent } from './doctor-search/doctor-search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PatientSearchComponent } from './patient-search/patient-search.component'; 

import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatDividerModule} from "@angular/material/divider";
//import {MatProgressBar} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSliderModule} from "@angular/material/slider";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from '@angular/material/grid-list';
import {ReactiveFormsModule,FormsModule} from "@angular/forms"

import { MedicalAppointmentComponent } from './medical-appointment/medical-appointment.component';
import { DoctorSearchDialogComponent } from './doctor-search-dialog/doctor-search-dialog.component';
import { PatientSearchDialogComponent } from './patient-search-dialog/patient-search-dialog.component';
import { ReasonAppointmentDialogComponent } from './reason-appointment-dialog/reason-appointment-dialog.component';
import { NewAppointmentDialogComponent } from './new-appointment-dialog/new-appointment-dialog.component';
import { AcceptAppointmentDialogComponent } from './accept-appointment-dialog/accept-appointment-dialog.component';
import { SetDiagnosticDialogComponent } from './set-diagnostic-dialog/set-diagnostic-dialog.component'; 


@NgModule({
  declarations: [
    AppComponent,
    RegisterDoctorComponent,
    RegisterPatientComponent,
    DoctorComponent,
    PatientComponent,
    DoctorSearchComponent,
    LoginComponent,
    HomeComponent,
    PatientSearchComponent,
    MedicalAppointmentComponent,
    DoctorSearchDialogComponent,
    PatientSearchDialogComponent,
    ReasonAppointmentDialogComponent,
    NewAppointmentDialogComponent,
    AcceptAppointmentDialogComponent,
    SetDiagnosticDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatGridListModule,
  ],
  providers: [
    DoctorService,
    PatientService,
    MedicalAppointmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
