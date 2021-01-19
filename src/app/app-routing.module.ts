import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorComponent } from "./doctor/doctor.component"
import { PatientComponent } from "./patient/patient.component"
import { RegisterDoctorComponent } from "./register-doctor/register-doctor.component"
import { RegisterPatientComponent } from "./register-patient/register-patient.component"
import { DocktorSearchComponent } from "./docktor-search/docktor-search.component"
import { PatientSearchComponent } from "./patient-search/patient-search.component"
import { MedicalAppointmentComponent } from "./medical-appointment/medical-appointment.component"

const routes: Routes = [
  { path: 'doctor-search/:name?', component: DocktorSearchComponent },
  { path: 'patient-search/:name?', component: PatientSearchComponent },
  {
    path: 'doctor/:id',
    component: DoctorComponent,
    children: [
      {path: "medical-appointment/:id", component: MedicalAppointmentComponent},
    ]
  },
  { path: 'register-doctor', component: RegisterDoctorComponent },
  {
    path: 'patient/:id',
    component: PatientComponent,
    children: [

    ]
  },
  { path: 'register-patient', component: RegisterPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
