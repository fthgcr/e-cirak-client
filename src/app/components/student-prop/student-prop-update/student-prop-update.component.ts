import { Component, OnInit, Input } from '@angular/core';
import { StudentPropComponent } from '../student-prop.component';
import { FormBuilder } from '@angular/forms';
import { PropertyService } from 'src/app/services/property.service';
import { StudentPropService } from 'src/app/services/student-prop.service';
import { SuserService } from 'src/app/services/suser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-prop-update',
  templateUrl: './student-prop-update.component.html',
  styleUrls: ['./student-prop-update.component.css']
})
export class StudentPropUpdateComponent extends StudentPropComponent implements OnInit {

  @Input() studentProp:any = { name: ''};
  showSelectedUser:string;
  showSelectedProperty:string;

  constructor(public service: StudentPropService,public serviceSuser:SuserService,public serviceProp: PropertyService,
    public fb: FormBuilder,private route: ActivatedRoute) {
      super(service,serviceSuser,serviceProp,fb);
  }

  ngOnInit() {
    this.getAll();
    this.getSuser();
    this.getProperty();

    this.service.getStudentProp(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.studentProp = data;
      this.showSelected();
    });
  }

  // UPDATE  
  updateStudentProp() {
   // this.studentProp.user_id=this.cityWithId.get(this.selectedCity);
    this.service.update(this.route.snapshot.params['id'], this.studentProp).subscribe((result) => {
    }, (err) => {
      console.log(err);
    });
  }

  public showSelected(){

  for(var i:number = 0; i<this.suser$.length; i++){
 // this.userWithId.set(this.suser$[i].nameSurname,this.suser$[i].id); 
    if(this.suser$[i].id==this.studentProp.user_id){
      this.selectedUser=this.suser$[i].nameSurname;
    }
  }

  for(var i:number = 0; i<this.property$.length; i++){
   // this.propertyWithId.set(this.property$[i].name,this.property$[i].id);
    if(this.property$[i].id==this.studentProp.prop_id){
      this.selectedProperty=this.property$[i].name;
    }    
  }
     console.log(this.selectedProperty+"**"+this.selectedUser);
  }

 

}
