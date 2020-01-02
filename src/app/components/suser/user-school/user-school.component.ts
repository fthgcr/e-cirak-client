import { Component, OnInit } from '@angular/core';
import { SuserService } from 'src/app/services/suser.service';
import { SUser } from 'src/app/models/suser.model';
import { ScityService } from 'src/app/services/scity.service';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sneighborhood } from 'src/app/models/sneighborhood.model';
import { Sdistrict } from 'src/app/models/sdistrict.model';
import { AddressInfo } from '../../address-info';

@Component({
  selector: 'app-user-school',
  templateUrl: './user-school.component.html',
  styleUrls: ['./user-school.component.css']
})
export class UserSchoolComponent extends AddressInfo implements OnInit {

  public data$: SUser[];
  submitted = false;
  suser: SUser = new SUser();
  sampleform: FormGroup;
  public neighbFiltered$: Sneighborhood[];
  public districtFiltered$: Sdistrict[];
  public cityWithId = new Map();
  public districtWithId = new Map();
  public neighborhoodWithId = new Map();
  public companyWithId = new Map();
  public selectedCity:string;
  public selectedDistrict:string;
  public selectedNeighb:string;
  
  public type:string;
  
  constructor(public service:SuserService,public serviceCity:ScityService,public serviceDistrict:SdistrictService,public serviceNeighborhood:SneighborhoodService,
    public fb: FormBuilder) {
      super(serviceCity,serviceDistrict,serviceNeighborhood);
      this. sampleform = fb.group({  
        'suser': [null]   // will use the property in html page     
        })
  }

  ngOnInit() {
    this.type="school"
    this.getAll(this.type);
    this.getSCity();
    this.getSDistrict();
    this.getSNeighborhood();
  }

  public getAll(type:string) {
    return this.service.getByType(type)
    .subscribe(data=>this.data$=data);
  }
  public getFilteredDisc() {
    console.log("girdiii"+this.cityWithId.get(this.selectedCity));
    return this.serviceDistrict.getDistcrit(this.cityWithId.get(this.selectedCity))
    .subscribe(data=>this.districtFiltered$=data);
  }
  
  public getFilteredNeighb() {
    console.log("****!"+(Number)(this.districtWithId.get(this.selectedDistrict)));
    return this.serviceNeighborhood.getNeighb((Number)(this.districtWithId.get(this.selectedDistrict)))
    .subscribe(data=>this.neighbFiltered$=data);
  }   


  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.suser = new SUser();
  }

  public save() {
    console.log(this.type);
    this.suser.type=this.type;
    this.service.create(this.suser)//************************************* 
    .subscribe(data => console.log(data), error => console.log(error));
    this.suser = new SUser();
  }

  public onSubmit() {
    this.submitted = true;
    this.save();
    this.refresh();
  }

  public refresh(): void {
    window.location.reload();
  }
  
  //DELETE  
  public delete(id: number) {
    this.service.delete(id)
    .subscribe(data => {
    console.log(data);
    this.getAll(this.type); },
    error => console.log(error));
  } 

  getMapping(data:any[],dataWithId=new Map()){
    for(var i:number = 0; i<data.length; i++){
      dataWithId.set(data[i].name,data[i].id); 
    //console.log( data[i].name+"--"+data[i].id);   
    }
  }  

  //SELECTED ELEMENTS
  selectChangeCity ($event: any) {
    this.getMapping(this.city$,this.cityWithId);
    this.selectedCity = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedCity+"--"+this.cityWithId.get(this.selectedCity));
    this.suser.city_id=this.cityWithId.get(this.selectedCity);
    var cityId = this.suser.city_id;
    this.getFilteredDisc();
  }  

  
  selectChangeDistrict ($event: any) {
    this.getMapping(this.district$,this.districtWithId);
    this.selectedDistrict = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedDistrict+"--"+this.districtWithId.get(this.selectedDistrict));
    this.suser.district_id=this.districtWithId.get(this.selectedDistrict);
    this.getFilteredNeighb();
  }
  
  selectChangeNeighb ($event: any) {
    this.getMapping(this.neighborhood$,this.neighborhoodWithId);
    this.selectedNeighb = ($event.target.options[$event.target.options.selectedIndex].text);     
    this.suser.neighborhood_id=this.neighborhoodWithId.get(this.selectedNeighb);
    console.log( this.selectedNeighb+"--"+this.neighborhoodWithId.get(this.selectedNeighb));
  }


}
