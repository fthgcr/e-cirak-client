import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { School } from 'src/app/models/school.model';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { Sneighborhood } from 'src/app/models/sneighborhood.model';
import { ScityService } from 'src/app/services/scity.service';
import { SdistrictComponent } from '../sdistrict/sdistrict.component';
import { Scity } from 'src/app/models/scity.model';
import { Sdistrict } from 'src/app/models/sdistrict.model';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { AddressInfo } from '../address-info';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent extends AddressInfo implements OnInit {

  public data$: School[];
  public city$: Scity[];
  public district$: Sdistrict[];
  public neighborhood$: Sneighborhood[];  
  submitted = false;
  school: School = new School();
  sampleform: FormGroup;
  public cityWithId = new Map();
  public districtWithId = new Map();
  public neighborhoodWithId = new Map();
  public selectedCity:string;
  public selectedDistrict:string;
  public selectedNeighb:string; 
  public selectedCityId:number;
  public neighbFiltered$: Sneighborhood[];
  public districtFiltered$: Sdistrict[]; 
  public cityFilter:string;
  public selectedFilter:string;

  @Input() filteredByCity:any = { name: ''};
 


  constructor(public service:SchoolService,public serviceCity:ScityService,public serviceDistrict:SdistrictService,
    public serviceNeighborhood:SneighborhoodService,public fb: FormBuilder) {
    super(serviceCity,serviceDistrict,serviceNeighborhood);
    this. sampleform = fb.group({  
      'school': [null]   // will use the property in html page     
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
  
  public getByCity(prm:string){
    console.log(this.cityFilter+"_-_");
  return this.serviceCity.getByName(this.cityFilter).subscribe(data => {
    console.log(data);
    this.filteredByCity=data;
 },
    error => console.log(error)); 
  }

  public getSchoolByCity(){
   console.log("sa");
    return this.service.getByCityId(this.filteredByCity[0].id)
    .subscribe(data =>this.data$=data );
  }

  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.school = new School();
  }

  public save() {
    this.service.create(this.school)//************************************* 
    .subscribe(data => console.log(data), error => console.log(error));
    this.school = new School();
  }

  public onSubmit() {
    this.submitted = true;
    this.save();
    console.log("!**"+this.school.zipCode);
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
    this.school.city_id=this.cityWithId.get(this.selectedCity);
    this.selectedCityId=this.cityWithId.get(this.selectedCity);
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
    this.school.district_id=this.districtWithId.get(this.selectedDistrict);
    this.getFilteredNeighb();
  }
  
  selectChangeNeighb ($event: any) {
    this.getMapping(this.neighborhood$,this.neighborhoodWithId);
    this.selectedNeighb = ($event.target.options[$event.target.options.selectedIndex].text);     
    this.school.neighborhood_id=this.neighborhoodWithId.get(this.selectedNeighb);
    console.log( this.selectedNeighb+"--"+this.neighborhoodWithId.get(this.selectedNeighb)+"->"+this.school.neighborhood_id);
  }

  selectFilter($event: any){
    this.selectedFilter=($event.target.options[$event.target.options.selectedIndex].text);
    
  }

  handleClick(event: Event,value: string) {  
    this.cityFilter=(String)(event);  
    this.getByCity(this.cityFilter);
    this.getSchoolByCity();
    
  }

  getInput(){
    this.data$.length=0;
    this.getByCity(this.cityFilter);
  console.log(this.cityFilter+" ### "+this.selectedFilter+"##"+this.filteredByCity[0].id);
  this.getSchoolByCity();
  
  /*  this.getByCity(this.cityFilter);
    this.filteredByCity;*/
    
  }
  
 

}
