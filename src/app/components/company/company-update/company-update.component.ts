import { Component, OnInit, Input } from '@angular/core';
import { CompanyComponent } from '../company.component';
import { CompanyService } from 'src/app/services/company.service';
import { ScityService } from 'src/app/services/scity.service';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent extends CompanyComponent implements OnInit {

  @Input() company:any = { name: ''};
  showSelectedCity:string;
  showSelectedDiscrit:string;
  showSelectedNeighb:string;

  constructor(public service:CompanyService,public serviceCity:ScityService,public serviceDistrict:SdistrictService,
    public serviceNeighborhood:SneighborhoodService,public fb: FormBuilder,private route: ActivatedRoute) {
    super(service,serviceCity,serviceDistrict,serviceNeighborhood,fb);
   }

  ngOnInit() {
    this.getAll();
    this.getSCity();
    this.getSDistrict();
    this.getSNeighborhood();
    
    this.service.getCompany(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.company = data;
      this.showSelected();
    });  
  }

  // UPDATE  
  updateCompany() {
    this.company.city_id=this.cityWithId.get(this.selectedCity);
    this.service.updateCompany(this.route.snapshot.params['id'], this.company).subscribe((result) => {
     // this.router.navigate(['/district']);
    }, (err) => {
      console.log(err);
    });
  }  

  public showSelected(){
    this.getMapping(this.city$,this.cityWithId);
    this.getMapping(this.district$,this.districtWithId);
    this.getMapping(this.neighborhood$,this.neighborhoodWithId);

    this.showSelectedCity=this.getSelectedItems(this.city$,this.company.city_id,this.showSelectedCity);
    this.showSelectedDiscrit=this.getSelectedItems(this.district$,this.company.district_id,this.showSelectedDiscrit);
    this.showSelectedNeighb=this.getSelectedItems(this.neighborhood$,this.company.neighborhood_id,this.showSelectedNeighb);
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
