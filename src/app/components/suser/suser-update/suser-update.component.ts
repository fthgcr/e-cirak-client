import { Component, OnInit, Input } from '@angular/core';
import { SuserComponent } from '../suser.component';
import { SuserService } from 'src/app/services/suser.service';
import { CompanyService } from 'src/app/services/company.service';
import { ScityService } from 'src/app/services/scity.service';
import { ActivatedRoute } from '@angular/router';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { FormBuilder } from '@angular/forms';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';

@Component({
  selector: 'app-suser-update',
  templateUrl: './suser-update.component.html',
  styleUrls: ['./suser-update.component.css']
})
export class SuserUpdateComponent extends SuserComponent implements OnInit {

  @Input() suser:any = { name: ''};
  showSelectedCity:string;
  showSelectedDiscrit:string;
  showSelectedNeighb:string;
  showSelectedCompany:string;

  constructor(public service:SuserService,public serviceCity:ScityService,public serviceDistrict:SdistrictService,
    public serviceNeighborhood:SneighborhoodService,public serviceCompany:CompanyService ,public fb: FormBuilder,private route: ActivatedRoute) {
      super(service,serviceCity,serviceDistrict,serviceNeighborhood,fb,serviceCompany);
     }

  ngOnInit() {
    this.getAll();
    this.getSCity();
    this.getSDistrict();
    this.getSNeighborhood();
    this.getCompany();

    this.service.getSuser(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.suser = data;
      this.showSelected();
    });
  }

  // UPDATE  
  updateSuser() {
    console.log(this.cityWithId.get(this.selectedCity));
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
    this.getMapping(this.company$,this.companyWithId);

    this.showSelectedCity=this.getSelectedItems(this.city$,this.suser.city_id,this.showSelectedCity);
    this.showSelectedDiscrit=this.getSelectedItems(this.district$,this.suser.district_id,this.showSelectedDiscrit);
    this.showSelectedNeighb=this.getSelectedItems(this.neighborhood$,this.suser.neighborhood_id,this.showSelectedNeighb);
    this.showSelectedCompany=this.getSelectedItems(this.company$,this.suser.company_id,this.showSelectedCompany);
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
