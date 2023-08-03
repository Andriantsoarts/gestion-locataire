import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ajout-proprietaire',
  templateUrl: './ajout-proprietaire.component.html',
  styleUrls: ['./ajout-proprietaire.component.css']
})
export class AjoutProprietaireComponent implements OnInit {

  form !: FormGroup;
  title !: string;
  nom !:string;
  telephone !: string; 
  cin !: string;
  travail !: string;
  adresse_en_location !: string; 
  adresse_prop !: string; 
  genre !: string;
  ville !: string;
  datenais !: Date;
  id !: string;
  buttonName !: string;
  

  villes : string[] = ['Antananarivo', 'Antsiranana', 'Fianarantsoa', 'Toamasina', 'Mahajanga', 'Toliara'];

  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AjoutProprietaireComponent>
  ) { 
    
    this.title = data.title;
    this.id = data.id;
    this.nom = data.nom;
    this.telephone = data.telephone;
    this.adresse_en_location = data.adresse_en_location;
    this.travail = data.travail;
    this.adresse_prop = data.adresse_prop;
    this.genre = data.genre;
    this.ville = data.ville;
    this.datenais = data.datenais;
    this.buttonName = data.buttonName;
  }

  ngOnInit(): void {
    
    this.form = this.fb.group({
      id: [this.id,[]],
      nom: [this.nom,[Validators.required]],
      telephone: [this.telephone, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      genre: [this.genre,[Validators.required]],
      ville: [this.ville,[Validators.required]],
      adresse_prop:[this.adresse_prop,[Validators.required]],
      datenais: [this.datenais, [Validators.required]],
      travail: [this.travail, [Validators.required]],
      adresse_en_location:[this.adresse_en_location,[Validators.required]]
    })
  }

  annulation(){
    this.dialogRef.close();
  }
  enregistrement(){
    this.dialogRef.close(this.form.value);
  }

}
