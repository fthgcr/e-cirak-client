import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ScityService } from 'src/app/services/scity.service';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Company } from 'src/app/models/company.model';
import { Scity } from 'src/app/models/scity.model';
import { Sdistrict } from 'src/app/models/sdistrict.model';
import { Sneighborhood } from 'src/app/models/sneighborhood.model';
import { SchoolService } from 'src/app/services/school.service';
import { School } from 'src/app/models/school.model';
import { SchoolComponent } from '../school/school.component';
import { AddressInfo } from '../address-info';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent extends AddressInfo implements OnInit {

  public data$: Company[];
  public city$: Scity[];
  public district$: Sdistrict[];
  public neighborhood$: Sneighborhood[];
  sampleform: FormGroup;
  company: Company = new Company();
  submitted = false;
  public cityWithId = new Map();
  public districtWithId = new Map();
  public neighborhoodWithId = new Map();
  public selectedCity:string;
  public selectedDistrict:string;
  public selectedNeighb:string;
  public neighbFiltered$: Sneighborhood[];
  public districtFiltered$: Sdistrict[];  


  constructor(public service:CompanyService,public serviceCity:ScityService,public serviceDistrict:SdistrictService,public serviceNeighborhood:SneighborhoodService,public fb: FormBuilder) {
  super(serviceCity,serviceDistrict,serviceNeighborhood);
    this. sampleform = fb.group({  
      'company': [null]   // will use the property in html page     
      }) 
      
  }

  ngOnInit() {
    this.getAll();
    this.getSCity();
    this.getSDistrict();
    this.getSNeighborhood();
  }

  //LIST
  public getAll() {
    return this.service.get()
    .subscribe(data=>this.data$=data);
  }
  public getFilteredDisc() {
    return this.serviceDistrict.getDistcrit(this.cityWithId.get(this.selectedCity))
    .subscribe(data=>this.districtFiltered$=data);
  }
  
  public getFilteredNeighb() {
    return this.serviceNeighborhood.getNeighb((Number)(this.districtWithId.get(this.selectedDistrict)))
    .subscribe(data=>this.neighbFiltered$=data);
  }  
 
  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.company = new Company();
  }

  public save() {
    this.service.create(this.company)//************************************* 
      .subscribe(data => console.log(data), error => console.log(error));
    this.company = new Company();
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
    this.getAll(); },
    error => console.log(error));
  }  
  
  //SELECTED ELEMENTS
  selectChangeCity ($event: any) {
    this.getMapping(this.city$,this.cityWithId);
    this.selectedCity = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedCity+"--"+this.cityWithId.get(this.selectedCity));
    this.company.city_id=this.cityWithId.get(this.selectedCity);
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
    this.company.district_id=this.districtWithId.get(this.selectedDistrict);
    this.getFilteredNeighb();
  }
  
  selectChangeNeighb ($event: any) {
    this.getMapping(this.neighborhood$,this.neighborhoodWithId);
    this.selectedNeighb = ($event.target.options[$event.target.options.selectedIndex].text);     
    this.company.neighborhood_id=this.neighborhoodWithId.get(this.selectedNeighb);
    console.log( this.selectedNeighb+"--"+this.neighborhoodWithId.get(this.selectedNeighb));
  }  

}
