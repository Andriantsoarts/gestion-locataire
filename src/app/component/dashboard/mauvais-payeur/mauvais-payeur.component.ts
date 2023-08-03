import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/shared/service/data.service';
import { AjoutMpComponent } from './ajout-mp/ajout-mp.component';
import { MauvaisPayeur } from 'src/app/shared/model/mauvais-payeur';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Proprietaire } from 'src/app/shared/model/proprietaire';
import { SupprimerMpComponent } from './supprimer-mp/supprimer-mp.component';

@Component({
  selector: 'app-mauvais-payeur',
  templateUrl: './mauvais-payeur.component.html',
  styleUrls: ['./mauvais-payeur.component.css']
})
export class MauvaisPayeurComponent implements OnInit {

  allMp : MauvaisPayeur[] = [];
  allProps : Proprietaire[] = [];
  displayedColumns: string[] = ['nom', 'telephone', 'genre', 'proprietaire','cin', 'motif', 'ville', 'action'];
  dataSource!: MatTableDataSource<MauvaisPayeur>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(    
    public dialog : MatDialog,
    private dataApi: DataService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getAllMp();
    this.getAllprop();
  }

  ajout_mp(){
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Ajout de mauvais payeur',
      buttonName :'Enregistrer'
  }
  
    const dialogRef = this.dialog.open(AjoutMpComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.dataApi.ajout_mp(data);
        this.openSnackBar("Enregistrement du mauvais payeur avec succès!", "OK")
      }
    })
  }

  getAllMp(){
    this.dataApi.getAllmp().subscribe(res => {
      this.allMp = res.map((e:any) => {
        const data = e.payload.doc.data();
        data.mp_id = e.payload.doc.id;
        return data;
      })
      
      this.dataSource = new MatTableDataSource(this.allMp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
 
  getAllprop() {
    this.dataApi.getAllprop().subscribe(res => {
      this.allProps = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    })
  }
  getPropname(id : string){
    let propName = '';
    this.allProps.forEach(element => {
      if(element.id == id){
        propName = element.nom;

      }
    });
    return propName;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  vue_mp( row :any ){
    window.open('dashboard/mauvais-payeur/'+row.mp_id,'_blank');
  }

  edit_mp( row : any ){
    if(row.mp_id == null || row.mp_nom == null){
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = row;
    dialogConfig.data.title = "Modification des informations sur le mauvais payeur";
    dialogConfig.data.buttonName ="Mettre à jour";
  
  
    const dialogRef = this.dialog.open(AjoutMpComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.dataApi.updatemp(data);
        this.openSnackBar("Mise à jour des données avec succès!", "OK")
      }
    })
  }

  delete_mp( row : any ){
    const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
    titre: 'Supprimer un mauvais payeur',
    mauvaispayeurnom : row.mp_nom 
  }

  const dialogRef = this.dialog.open(SupprimerMpComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(data => {
    if (data) {
      this.dataApi.deletemp(row.mp_id);
      this.openSnackBar("Supppression du mauvais payeur avec succès!", "OK")
    }
  })
  }
  
}
