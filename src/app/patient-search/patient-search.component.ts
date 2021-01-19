import { Component, OnInit } from '@angular/core';
import {Patient,FormacionApi} from "../dataModel"

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.sass']
})
export class PatientSearchComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'lastName','NSS'];
  dataSource:Patient[];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = []
  }
  searchPatient(name:string){
    this.dataSource = FormacionApi.getInstance().getPatientByName(name);
  }

}
