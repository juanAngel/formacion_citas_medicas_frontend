import { Component, OnInit } from '@angular/core';
import {Patient} from "../dataModel"
import {DoctorService} from "../doctor.service"
import {PatientService} from "../patient.service"

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.sass']
})
export class PatientSearchComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'lastName','NSS'];
  dataSource:Patient[];

  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    this.dataSource = []
  }
  async searchPatient(name:string){
    this.dataSource =  (name != "")?
      await this.patientService.findByNombre(name)
      :
      await this.patientService.getAll();
  }
  async searchNSSPatient(NSS:string){
    this.dataSource =  (NSS != "")?
      await this.patientService.findByNSS(NSS)
      :
      await this.patientService.getAll();
  }

}
