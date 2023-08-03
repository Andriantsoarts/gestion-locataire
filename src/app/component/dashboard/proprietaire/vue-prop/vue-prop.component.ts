import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MauvaisPayeur } from 'src/app/shared/model/mauvais-payeur';
import { DataService } from 'src/app/shared/service/data.service';
import { AjoutMpComponent } from '../../mauvais-payeur/ajout-mp/ajout-mp.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vue-prop',
  templateUrl: './vue-prop.component.html',
  styleUrls: ['./vue-prop.component.css']
})
export class VuePropComponent implements OnInit {


  
  id!: any;
  prop_obj!: any;
  allMp : MauvaisPayeur[]=[];
  displayedColumns: string[] = ['nom', 'telephone', 'genre','cin', 'motif', 'ville', 'action'];
  dataSource!: MatTableDataSource<MauvaisPayeur>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route : ActivatedRoute,
    private dataApi : DataService,
    private dialog : MatDialog,
    private _snackBar: MatSnackBar
    ) { 
      this.id = route.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    
    this.getProprietaireById();
    this.getAllMpForProp();
  }

  getProprietaireById(){
    this.dataApi.getProprietaireById(this.id).subscribe(res => {
      this.prop_obj= res;
      console.log(this.prop_obj);
    })
  }

  getAllMpForProp(){
    this.dataApi.getAllmp().subscribe(res => {
      this.allMp = res.map((e : any) =>{
        const data = e.payload.doc.data();
        data.mp_id = e.payload.doc.id;

        if(data.prop_id == this.id){
          return data;
        }
      })
      this.allMp = this.allMp.filter(item => item != undefined);
      this.dataSource = new MatTableDataSource(this.allMp);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
}
