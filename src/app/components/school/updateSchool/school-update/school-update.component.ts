import { Component, OnInit, Input } from '@angular/core';
import { SchoolComponent } from '../../school.component';
import { SchoolService } from 'src/app/services/school.service';
import { ScityService } from 'src/app/services/scity.service';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { School } from 'src/app/models/school.model';

@Component({
  selector: 'app-school-update',
  templateUrl: './school-update.component.html',
  styleUrls: ['./school-update.component.css']
})
export class SchoolUpdateComponent extends SchoolComponent implements OnInit {

  //school: Sdistrict = new Sdistrict();
  @Input() school:any = { name: ''};
  showSelectedCity:string;
  showSelectedDiscrit:string;
  showSelectedNeighb:string;

  constructor(public service:SchoolService,public serviceCity:ScityService,public serviceDistrict:SdistrictService,
    public serviceNeighborhood:SneighborhoodService,public fb: FormBuilder,private route: ActivatedRoute) { 
    super(service,serviceCity,serviceDistrict,serviceNeighborhood,fb);
  }

  ngOnInit() {
    this.getAll();
    this.getSCity();
    this.getSDistrict();
    this.getSNeighborhood();
    
    this.service.getSchool(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.school = data;
      this.showSelected();
    });
  
  }

  // UPDATE  
  updateSchool() {
    this.school.city_id=this.cityWithId.get(this.selectedCity);
    this.service.updateSchool(this.route.snapshot.params['id'], this.school).subscribe((result) => {
     // this.router.navigate(['/district']);
    }, (err) => {
      console.log(err);
    });
  }  

  public showSelected(){
    this.getMapping(this.city$,this.cityWithId);
    this.getMapping(this.district$,this.districtWithId);
    this.getMapping(this.neighborhood$,this.neighborhoodWithId);

    this.showSelectedCity=this.getSelectedItems(this.city$,this.school.city_id,this.showSelectedCity);
    this.showSelectedDiscrit=this.getSelectedItems(this.district$,this.school.district_id,this.showSelectedDiscrit);
    this.showSelectedNeighb=this.getSelectedItems(this.neighborhood$,this.school.neighborhood_id,this.showSelectedNeighb);
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
