import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Doctor } from '../dataModel';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-search-dialog',
  templateUrl: './doctor-search-dialog.component.html',
  styleUrls: ['./doctor-search-dialog.component.sass']
})
export class DoctorSearchDialogComponent implements OnInit {
  numColegiado:string;
  doctorName:string;

  dataSource:Doctor[] = [];
  doctor:Doctor;
  private _displayedColumns:string[] = ['name', 'lastName','numColegiado'];

  constructor(private dialogRef: MatDialogRef<DoctorSearchDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private doctorService:DoctorService) { 
    }

  ngOnInit(): void {

  }
  close(){
    this.dialogRef.close();
  }
  save(){
    if(this.doctor != null){
      this.dialogRef.close(this.doctor.id);
    }
  }
  public get displayedColumns(){
    return this._displayedColumns;
  }

  async search(){
    let name:string = this.doctorName;
    this.dataSource =  (name != "" && name != null)?
      await this.doctorService.findByNombre(name)
      :
      await this.doctorService.getAll();
  }

}
