import { Component, OnInit, Input } from '@angular/core';
import { UserSchoolComponent } from '../user-school.component';
import { SuserService } from 'src/app/services/suser.service';
import { ScityService } from 'src/app/services/scity.service';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-school-update',
  templateUrl: './user-school-update.component.html',
  styleUrls: ['./user-school-update.component.css']
})
export class UserSchoolUpdateComponent extends UserSchoolComponent implements OnInit {
 
  showSelectedCity:string;
  showSelectedDiscrit:string;
  showSelectedNeighb:string;
  showSelectedCompany:string;
  @Input() suser:any = { name: ''};

  constructor(public service:SuserService,public serviceCity:ScityService,public serviceDistrict:SdistrictService,public serviceNeighborhood:SneighborhoodService,
    public fb: FormBuilder,private route: ActivatedRoute) {
      super(service,serviceCity,serviceDistrict,serviceNeighborhood,fb);
  }

  ngOnInit() {
    this.type="school";
    this.getAll(this.type);
    this.getSCity();
    this.getSDistrict();
    this.getSNeighborhood();

    this.service.getSuser(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.suser = data;
      this.showSelected();
    });

  }

  // UPDATE  
  updateSuser() {
    this.suser.city_id=this.cityWithId.get(this.selectedCity);
    this.service.updateSuser(this.route.snapshot.params['id'], this.suser).subscribe((result) => {
     // this.router.navigate(['/district']);
    }, (err) => {
      console.log(err);
    });
  } 
  

  public showSelected(){
    this.getMapping(this.city$,this.cityWithId);
    this.getMapping(this.district$,this.districtWithId);
    this.getMapping(this.neighborhood$,this.neighborhoodWithId);

    this.showSelectedCity=this.getSelectedItems(this.city$,this.suser.city_id,this.showSelectedCity);
    this.showSelectedDiscrit=this.getSelectedItems(this.district$,this.suser.district_id,this.showSelectedDiscrit);
    this.showSelectedNeighb=this.getSelectedItems(this.neighborhood$,this.suser.neighborhood_id,this.showSelectedNeighb);
    console.log(this.showSelectedNeighb+"-"+this.showSelectedDiscrit+"-"+this.showSelectedCity);
  }

  public getSelectedItems(data:any[],id:number,selected:string){
    for(var i:number=0; i<data.length; i++){
      if(data[i].id==id){
        selected=data[i].name;
        console.log(selected+"---"+ this.showSelectedCity);
      }
    }
    return selected; 
  }   

}
