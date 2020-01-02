import { Component, OnInit } from '@angular/core';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { Sneighborhood } from 'src/app/models/sneighborhood.model';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { Sdistrict } from 'src/app/models/sdistrict.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sneighborhood',
  templateUrl: './sneighborhood.component.html',
  styleUrls: ['./sneighborhood.component.css']
})
export class SneighborhoodComponent implements OnInit {

  public data$: Sneighborhood[];
  public district$: Sdistrict[];
  submitted = false;
  sneighborhood:Sneighborhood =new Sneighborhood();
  sampleform: FormGroup;
  public selectedDistrict:string;
  public districtWithId = new Map(); 

  constructor(private service:SneighborhoodService,private serviceDistrict:SdistrictService,fb: FormBuilder) {
      this. sampleform = fb.group({  
        'district_id': [null]          
      }) 
  }

  ngOnInit() {
    this.getAll();
    this.getSDistrict();
  }

  //LIST
  public getAll() {
    return this.service.get()
    .subscribe(data=>this.data$=data);
  }
  
  public getSDistrict() {
    return this.serviceDistrict.get()
    .subscribe(data=>this.district$=data);
  }

  //DELETE  
  public delete(id: number) {
    this.service.delete(id)
      .subscribe(data => {
        console.log(data);
        this.getAll(); },
        error => console.log(error));    
  } 

  public refresh(): void {
    window.location.reload();
  }
  
  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.sneighborhood = new Sneighborhood();
  }

  public save() {
    this.service.create(this.sneighborhood)
    .subscribe(data => console.log(data), error => console.log(error));
    this.sneighborhood = new Sneighborhood();
  }

  public onSubmit() {
    this.submitted = true;
    this.save();
    this.refresh();
  }
  
  //SELECT CITY
  selectChangeHandler ($event: any) {
    this.getMap();
    this.selectedDistrict = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedDistrict+"--"+this.districtWithId.get(this.selectedDistrict));
    this.sneighborhood.district_id=(Number)(this.districtWithId.get(this.selectedDistrict));
  }
  
  public  getMap(){
    for(var i:number = 0; i<this.district$.length; i++){
      this.districtWithId.set(this.district$[i].name,this.district$[i].id);    
    }
  }


}
