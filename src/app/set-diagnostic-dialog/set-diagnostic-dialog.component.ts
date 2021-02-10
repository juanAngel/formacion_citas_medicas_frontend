import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


import { Diagnostic } from '../dataModel';

@Component({
  selector: 'app-set-diagnostic-dialog',
  templateUrl: './set-diagnostic-dialog.component.html',
  styleUrls: ['./set-diagnostic-dialog.component.sass']
})
export class SetDiagnosticDialogComponent implements OnInit {
  valoracionEspecialista: string;
  enfermedad: string;

  constructor(private dialogRef: MatDialogRef<SetDiagnosticDialogComponent>) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  save(){
    if(this.valoracionEspecialista != null && this.valoracionEspecialista != null){
      this.dialogRef.close({
        valoracionEspecialista:this.valoracionEspecialista,
        enfermedad:this.enfermedad
      });
    }
  }

}
