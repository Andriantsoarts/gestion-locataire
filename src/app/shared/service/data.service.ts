import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

ajout_prop( proprietaire : any){
  proprietaire.id = this.afs.createId();
  return this.afs.collection("Proprietaire/").add(proprietaire);
  }
getAllprop() {
  return this.afs.collection("Proprietaire/").snapshotChanges();
}
updateprop(proprietaire : any){
  return this.afs.doc("Proprietaire/"+proprietaire.id).update(proprietaire);
}

deleteprop(id : string){
  return this.afs.doc("Proprietaire/"+id).delete();
}
getProprietaireById(id : string){
  return this.afs.doc("Proprietaire/"+id).valueChanges();
}
ajout_mp( mauvaispayeur : any){
  mauvaispayeur.mp_id= this.afs.createId();
  return this.afs.collection("Mauvais_payeur/").add(mauvaispayeur);
}

getAllmp() {
  return this.afs.collection("Mauvais_payeur/").snapshotChanges();
}

updatemp(mauvaispayeur : any){
  return this.afs.doc("Mauvais_payeur/"+mauvaispayeur.mp_id).update(mauvaispayeur);
}

deletemp(mp_id : string){
  return this.afs.doc("Mauvais_payeur/"+mp_id).delete();
}
getMpById(mp_id : string){
  return this.afs.doc("Mauvais_payeur/"+mp_id).valueChanges();
}
}
