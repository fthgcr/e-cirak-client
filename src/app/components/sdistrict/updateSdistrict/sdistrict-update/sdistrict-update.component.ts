import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scity } from 'src/app/models/scity.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScityService } from 'src/app/services/scity.service';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { Sdistrict } from 'src/app/models/sdistrict.model';

@Component({
  selector: 'app-sdistrict-update',
  templateUrl: './sdistrict-update.component.html',
  styleUrls: ['./sdistrict-update.component.css']
})
export class SdistrictUpdateComponent  implements OnInit {

  public city$: Scity[];
  sampleform: FormGroup; 
  public selectedCity:string;
  public cityWithId = new Map();
  sdistrict: Sdistrict = new Sdistrict();
  showSelectedCity:string;
  @Input() district:any = { name: ''};

  constructor(private service: SdistrictService ,private serviceCity:ScityService, private route: ActivatedRoute ,private router: Router,fb: FormBuilder) {
    this. sampleform = fb.group({  
      'city_id': [null]   // will use the property in html page     
      }) 
   }


  ngOnInit() {

    this.getSCity(); 
     
    this.service.getDistrict(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.district = data;
      console.log(this.district.city_id);
      this.showSelected();
    });
     
  }

  public showSelected(){
    for(var i:number=0; i<this.city$.length; i++){
        if(this.city$[i].id==this.district.city_id){
          this.showSelectedCity=this.city$[i].name;
          console.log( this.showSelectedCity);
        }
    }
  }

  // UPDATE  
  updateDistrict() {
    this.district.city_id=this.cityWithId.get(this.selectedCity);
    this.service.updateDistrict(this.route.snapshot.params['id'], this.district).subscribe((result) => {
     // this.router.navigate(['/district']);
    }, (err) => {
      console.log(err);
    });
  }

  //GET CITY
  public getSCity() {
      return this.serviceCity.get().subscribe(data=>this.city$=data);
  }

  //SELECT CITY
  selectChangeHandler ($event: any) {
    this.getMap();
  
    this.selectedCity = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedCity+"--"+this.cityWithId.get(this.selectedCity));
    this.sdistrict.city_id=(Number)(this.cityWithId.get(this.selectedCity));  
  }  

  //MAPPING
  public  getMap(){
    for(var i:number = 1; i<this.city$.length; i++){
      this.cityWithId.set(this.city$[i].name,this.city$[i].id);    
    }
   
  }
 

}
