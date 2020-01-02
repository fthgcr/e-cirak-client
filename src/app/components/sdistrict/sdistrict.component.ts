import { Component, OnInit, Injectable } from '@angular/core';
import { Sdistrict } from 'src/app/models/sdistrict.model';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { ScityService } from 'src/app/services/scity.service';
import { Scity } from 'src/app/models/scity.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Injectable()
@Component({
  selector: 'app-sdistrict',
  templateUrl: './sdistrict.component.html',
  styleUrls: ['./sdistrict.component.css']
})
export class SdistrictComponent implements OnInit {

  public data$: Sdistrict[];
  public city$: Scity[];
  //closeResult: string;
  sdistrict: Sdistrict = new Sdistrict();
  submitted = false;
  public selectedCity:string;
  sampleform: FormGroup; 
  public cityWithId = new Map();



  constructor(private service:SdistrictService,private serviceCity:ScityService,fb: FormBuilder) { 
    this. sampleform = fb.group({  
      'city_id': [null]   // will use the property in html page     
      }) 
     
  }

  ngOnInit() {
    this.getAll();
    this. getSCity();    
  }

  
 
  //SELECT CITY
  selectChangeHandler ($event: any) {
    this.getMap();
    this.selectedCity = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedCity+"--"+this.cityWithId.get(this.selectedCity));
    this.sdistrict.city_id=(Number)(this.cityWithId.get(this.selectedCity));
  }

  public  getMap(){
    for(var i:number = 1; i<this.city$.length; i++){
      this.cityWithId.set(this.city$[i].name,this.city$[i].id);   
      console.log(this.cityWithId.get["fsdfadf"]); 
    }
  }

  //LIST
  public getAll() {
    return this.service.get()
   .subscribe(data=>this.data$=data);
  }

  public getSCity() {
    return this.serviceCity.get()
    .subscribe(data=>this.city$=data);
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
    this.sdistrict = new Sdistrict();
  }

  public save() {
    this.getMap();
    console.log( this.selectedCity+"--"+this.cityWithId.get(this.selectedCity));
    this.sdistrict.city_id=(Number)(this.cityWithId.get(this.selectedCity));
    this.service.create(this.sdistrict)//************************************* 
      .subscribe(data => console.log(data), error => console.log(error));
    this.sdistrict = new Sdistrict();
  }

  public onSubmit() {
    this.submitted = true;
    this.save();
    this.refresh();
  }


}
