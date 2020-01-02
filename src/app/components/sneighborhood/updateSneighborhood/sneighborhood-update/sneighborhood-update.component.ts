import { Component, OnInit, Input } from '@angular/core';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Sdistrict } from 'src/app/models/sdistrict.model';
import { Sneighborhood } from 'src/app/models/sneighborhood.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sneighborhood-update',
  templateUrl: './sneighborhood-update.component.html',
  styleUrls: ['./sneighborhood-update.component.css']
})
export class SneighborhoodUpdateComponent implements OnInit {

  sampleform: FormGroup;
  public district$: Sdistrict[];
  sneighborhood: Sneighborhood = new Sneighborhood();
  public selectedDistrict:string;
  public districtWithId = new Map();
  showSelectedCity:string;
  @Input() neighborhood:any = { name: ''};

  constructor(private service: SneighborhoodService,private serviceDistrict: SdistrictService,fb: FormBuilder,private route: ActivatedRoute) { 
    this. sampleform = fb.group({  
      'district_id': [null]   // will use the property in html page     
      }) 
  }
  

  ngOnInit() {
    this.getSDistrict(); 

    this.service.getNeighborhood(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.neighborhood = data;
      console.log(this.neighborhood.id);
      this.showSelected();
    });  
  }

  //GET DISTRICT
  public getSDistrict() {
    return this.serviceDistrict.get().subscribe(data=>this.district$=data);
  }
  
  // UPDATE  
  updateNeighborhood() {
    
    this.sneighborhood.id=this.neighborhood.id;
    this.sneighborhood.district_id=this.neighborhood.district_id;
    this.sneighborhood.name=this.neighborhood.name;
    console.log(this.neighborhood.id+"***"+this.neighborhood.district_id+"***"+this.sneighborhood.name);
    this.service.updateNeighborhood(this.route.snapshot.params['id'], this.sneighborhood).subscribe((result) => {
     // this.router.navigate(['/district']);
    }, (err) => {
      console.log(err);
    });
  } 

  //SELECT DISTRICT
  selectChangeHandler ($event: any) {
    this.getMap();  
    this.selectedDistrict = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedDistrict+"--"+this.districtWithId.get(this.selectedDistrict));
 //   this.sneighborhood.district_id=(Number)(this.districtWithId.get(this.selectedDistrict));  
  }  

  //MAPPING
  public  getMap(){
    for(var i:number = 1; i<this.district$.length; i++){
      this.districtWithId.set(this.district$[i].name,this.district$[i].id);    
    }
   
  }
  
  public showSelected(){
    for(var i:number=0; i<this.district$.length; i++){
        if(this.district$[i].id==this.neighborhood.district_id){
          this.showSelectedCity=this.district$[i].name;
          console.log( this.showSelectedCity);
        }
    }
  }  
  

}
