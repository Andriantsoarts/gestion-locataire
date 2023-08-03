import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-supprimer-prop',
  templateUrl: './supprimer-prop.component.html',
  styleUrls: ['./supprimer-prop.component.css']
})
export class SupprimerPropComponent implements OnInit {

  proprietairenom !: string;
  titre ! : string;

  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<SupprimerPropComponent>
  ) { 
    this.proprietairenom =data.proprietairenom;
    this.titre = data.titre;
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  delete(){
    const delete_prop = true;
    this.dialogRef.close(delete_prop);
  }
}
