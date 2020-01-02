import { Component, OnInit } from '@angular/core';
import { AddressInfo } from '../address-info';
import { ScityService } from 'src/app/services/scity.service';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SuserService } from 'src/app/services/suser.service';
import { SUser } from 'src/app/models/suser.model';
import { Scity } from 'src/app/models/scity.model';
import { Sdistrict } from 'src/app/models/sdistrict.model';
import { Sneighborhood } from 'src/app/models/sneighborhood.model';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-suser',
  templateUrl: './suser.component.html',
  styleUrls: ['./suser.component.css']
})
export class SuserComponent extends AddressInfo implements OnInit {

  sampleform: FormGroup;
  public data$: SUser[];
  public city$: Scity[];
  public district$: Sdistrict[];
  public company$: Company[];
  public neighborhood$: Sneighborhood[];
  submitted = false;
  suser: SUser = new SUser();
  public cityWithId = new Map();
  public districtWithId = new Map();
  public neighborhoodWithId = new Map();
  public companyWithId = new Map();
  public selectedCity:string;
  public selectedDistrict:string;
  public selectedNeighb:string;
  public selectedCompany:string; 
  public neighbFiltered$: Sneighborhood[];
  public districtFiltered$: Sdistrict[];
   
  
  constructor(public service:SuserService,public serviceCity:ScityService,public serviceDistrict:SdistrictService,public serviceNeighborhood:SneighborhoodService,
    public fb: FormBuilder,public serviceCompany:CompanyService) {
    super(serviceCity,serviceDistrict,serviceNeighborhood);
    this. sampleform = fb.group({  
      'suser': [null]   // will use the property in html page     
      })
  }

  ngOnInit() {
  //  this.getAll(); 
    this.getFilteredUser();
    this.getSCity();
    this.getSDistrict();
    this.getSNeighborhood();
    this.getCompany();
  }

  //LIST
  public getAll() {
    return this.service.get()
    .subscribe(data=>this.data$=data);
  }
  public getCompany() {
    return this.serviceCompany.get()
    .subscribe(data=>this.company$=data);
  }
  public getFilteredUser() {
    return this.service.getByType("company")
    .subscribe(data=>this.data$=data);
  }

  public getFilteredDisc() {
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
  //SELECTED ELEMENTS
  selectChangeCity ($event: any) {
    this.getMapping(this.city$,this.cityWithId);
    this.selectedCity = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedCity+"--"+this.cityWithId.get(this.selectedCity));
    this.suser.city_id=this.cityWithId.get(this.selectedCity);
    var cityId = this.suser.city_id;
    this.getFilteredDisc();
  }
  
  getMapping(data:any[],dataWithId=new Map()){
    for(var i:number = 0; i<data.length; i++){
      dataWithId.set(data[i].name,data[i].id); 
    //console.log( data[i].name+"--"+data[i].id);   
    }
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
  selectChangeCompany ($event: any) {
    this.getMapping(this.company$,this.companyWithId);
    this.selectedCompany = ($event.target.options[$event.target.options.selectedIndex].text);     
    this.suser.company_id=this.companyWithId.get(this.selectedCompany);
    console.log( this.selectedCompany+"--"+this.companyWithId.get(this.selectedCompany));
  }  
  
  //DELETE  
  public delete(id: number) {
    this.service.delete(id)
    .subscribe(data => {
    console.log(data);
    this.getAll(); },
    error => console.log(error));
  }    

}
