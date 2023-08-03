import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-ajout-mp',
  templateUrl: './ajout-mp.component.html',
  styleUrls: ['./ajout-mp.component.css']
})
export class AjoutMpComponent implements OnInit {

  form !: FormGroup;
  title !: string;
  mp_nom !:string;
  mp_telephone !: string;
  mp_cin !: string;
  ville !: string;
  genre !: string;
  date_admission !: Date;
  motif_admission !: string; 
  mp_id !: string;
  buttonName !: string;
  prop_id !: string;
  prop_nom !: string;

  villes : string[] = ['Antananarivo', 'Antsiranana', 'Fianarantsoa', 'Toamasina', 'Mahajanga', 'Toliara'];

  all_prop : any[] = [];

  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<AjoutMpComponent>,
    private dataApi : DataService
    ) { 

      this.title = data.title;
      this.mp_id = data.mp_id;
      this.mp_nom = data.mp_nom;
      this.mp_telephone = data.mp_telephone;
      this.mp_cin = data.mp_cin;
      this.ville = data.ville;
      this.genre = data.genre;
      this.date_admission = data.date_admission;
      this.motif_admission = data.motif_admission;
      this.buttonName = data.buttonName;
      this.prop_id = data.prop_id;
      this.prop_nom = data.prop_nom;
    }

  ngOnInit(): void {
    this.getallProps();
    this.form = this.fb.group({
      mp_id: [this.mp_id,[]],
      mp_nom: [this.mp_nom,[Validators.required]],
      mp_telephone: [this.mp_telephone, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      genre: [this.genre,[Validators.required]],
      mp_cin: [this.mp_cin,[Validators.required, Validators.maxLength(12), Validators.minLength(12)]],
      ville: [this.ville,[Validators.required]],
      motif_admission:[this.motif_admission,[Validators.required]],
      date_admission: [this.date_admission, [Validators.required]],
      prop_id: [this.prop_id, [Validators.required]],
      prop_nom: [this.prop_nom, []]
    })
  }

  getallProps(){
    this.dataApi.getAllprop().subscribe(res => {
      this.all_prop = res.map((e: any) => {
        const data = e.payload.doc.data();
        const proprietaire = {
          prop_nom : data.nom,
          prop_id : e.payload.doc.id
        }
        return proprietaire;
      })
      console.log(this.all_prop);
    })
  }
  
  annulation(){
    this.dialogRef.close();
  }
  async enregistrement(){
    this.form.value.prop_nom = await this.getPropnom(this.form.value.prop_id);
    this.dialogRef.close(this.form.value);
  }

  getPropnom(propId : string) {
    for(let i = 0; i < this.all_prop.length; i++){
      if(this.all_prop[i].prop_id == propId){
        return this.all_prop[i].prop_nom;
      }
    }
    return "";
  }

}
