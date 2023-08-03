import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-supprimer-mp',
  templateUrl: './supprimer-mp.component.html',
  styleUrls: ['./supprimer-mp.component.css']
})
export class SupprimerMpComponent implements OnInit {


  mauvaispayeurnom !: string;
  titre ! : string;

  constructor(
    
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<SupprimerMpComponent>
  ) { 
    this.mauvaispayeurnom =data.mauvaispayeurnom;
    this.titre = data.titre;
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  delete(){
    const delete_mp = true;
    this.dialogRef.close(delete_mp);
  }
}
