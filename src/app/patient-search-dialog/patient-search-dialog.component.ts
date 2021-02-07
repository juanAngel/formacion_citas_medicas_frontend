import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from '../dataModel';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-search-dialog',
  templateUrl: './patient-search-dialog.component.html',
  styleUrls: ['./patient-search-dialog.component.sass']
})
export class PatientSearchDialogComponent implements OnInit {
  form: FormGroup;
  patientName:string = "";
  NSS:string = "";
  private _displayedColumns:string[] = ['name', 'lastName','NSS'];

  dataSource:Patient[] = [];
  patient:Patient;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<PatientSearchDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private patientService:PatientService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      patientName: [this.patientName, []],
      NSS: [this.NSS, []]
    });
    //this.form.value;
  }
  close(){
    this.dialogRef.close();
  }
  save(){
    if(this.patient != null){
      this.dialogRef.close(this.patient.id);
    }
  }
  public get displayedColumns(){
    return this._displayedColumns;
  }
  async search(){
    let name:string = this.patientName;
    this.dataSource =  (name != "" && name != null)?
      await this.patientService.findByNombre(name)
      :
      await this.patientService.getAll();
  }
}
