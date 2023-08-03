import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MauvaisPayeur } from 'src/app/shared/model/mauvais-payeur';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-vue-mp',
  templateUrl: './vue-mp.component.html',
  styleUrls: ['./vue-mp.component.css']
})
export class VueMpComponent implements OnInit {


  id!: any;
  mp_obj!: any;
  allMp : MauvaisPayeur[]=[];
  
  constructor(
    private route : ActivatedRoute,
    private dataApi : DataService,

  ) { 
    
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    
    this.getMpById();
  }


  getMpById(){
    this.dataApi.getMpById(this.id).subscribe(res => {
      this.mp_obj = res;
      console.log(this.mp_obj);
    })
  }
}
