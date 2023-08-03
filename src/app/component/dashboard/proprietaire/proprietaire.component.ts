import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AjoutProprietaireComponent } from './ajout-proprietaire/ajout-proprietaire.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/shared/service/data.service';
import { Proprietaire } from 'src/app/shared/model/proprietaire';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SupprimerPropComponent } from './supprimer-prop/supprimer-prop.component';

@Component({
  selector: 'app-proprietaire',
  templateUrl: './proprietaire.component.html',
  styleUrls: ['./proprietaire.component.css']
})
export class ProprietaireComponent implements OnInit {

  
  propArr: Proprietaire[] = [];
  displayedColumns: string[] = ['nom', 'telephone', 'adresse_en_location', 'genre', 'adresse_prop', 'ville', 'travail', 'action'];
  dataSource!: MatTableDataSource<Proprietaire>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog : MatDialog,
    private dataApi: DataService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getAllprop();
  
  }

  ajout_prop(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Ajout de propriétaire',
      buttonName :'Enregistrer'
  }
  
  const dialogRef = this.dialog.open(AjoutProprietaireComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(data => {
    if (data) {
      this.dataApi.ajout_prop(data);
      this.openSnackBar("Enregistrement du propriétaire avec succès!", "OK")
    }
  })
}

edit_prop(row : any){
  if(row.id == null || row.nom == null){
    return;
  }
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = row;
  dialogConfig.data.title = "Modification des informations sur le propriétaire";
  dialogConfig.data.buttonName ="Mettre à jour";


  const dialogRef = this.dialog.open(AjoutProprietaireComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(data => {
    if (data) {
      this.dataApi.updateprop(data);
      this.openSnackBar("Mise à jour des données avec succès!", "OK")
    }
  })
}

delete_prop(row : any) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
    titre: 'Supprimer un propriétaire',
    proprietairenom : row.nom 
  }

  const dialogRef = this.dialog.open(SupprimerPropComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(data => {
    if (data) {
      this.dataApi.deleteprop(row.id);
      this.openSnackBar("Supppression du propriétaire avec succès!", "OK")
    }
  })
}
vue_prop(row : any){
  window.open('dashboard/proprietaire/'+row.id,'_blank');
}

  openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}

getAllprop() {
  this.dataApi.getAllprop().subscribe(res => {
    this.propArr = res.map((e: any) => {
      const data = e.payload.doc.data();
      data.id = e.payload.doc.id;
      return data;
    })
    
      this.dataSource = new MatTableDataSource(this.propArr);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  })
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}



}
