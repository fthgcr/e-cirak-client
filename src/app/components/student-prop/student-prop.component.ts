import { Component, OnInit } from '@angular/core';
import { StudentPropService } from 'src/app/services/student-prop.service';
import { SuserService } from 'src/app/services/suser.service';
import { PropertyService } from 'src/app/services/property.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentProp } from 'src/app/models/student-prop.model';
import { SUser } from 'src/app/models/suser.model';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'app-student-prop',
  templateUrl: './student-prop.component.html',
  styleUrls: ['./student-prop.component.css']
})
export class StudentPropComponent implements OnInit {

  public data$: StudentProp[];
  public suser$: SUser[];
  public property$: Property[];
  sampleform: FormGroup;
  submitted = false;
  studentProp: StudentProp = new StudentProp();
  public userWithId = new Map();
  public propertyWithId = new Map();
  public selectedUser:string;
  public selectedProperty:string;

  constructor(public service: StudentPropService,public serviceSuser:SuserService,public serviceProp: PropertyService,public fb: FormBuilder) {
    this. sampleform = fb.group({  
      'studentProp': [null]     
      }) 
  }

  ngOnInit() {
    this.getAll();
    this.getSuser();
    this.getProperty();
  }

  //LIST
  public getAll() {
    return this.service.get()
    .subscribe(data=>this.data$=data);
  }
  public getSuser() {
    return this.serviceSuser.getByType("student")
    .subscribe(data=>this.suser$=data);
  }
  public getProperty() {
    return this.serviceProp.get()
    .subscribe(data=>this.property$=data);
  }    

  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.studentProp = new StudentProp();
  }

  public save() {
    this.service.create(this.studentProp)
    .subscribe(data => console.log(data), error => console.log(error));
    this.studentProp = new StudentProp();
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
  selectChangeUser ($event: any) {
    for(var i:number = 0; i<this.suser$.length; i++){
      this.userWithId.set(this.suser$[i].nameSurname,this.suser$[i].id); 
    }
    
    this.selectedUser = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedUser+"--"+this.userWithId.get(this.selectedUser));
    this.studentProp.user_id=this.userWithId.get(this.selectedUser);
  }
  
  selectChangeProperty ($event: any) {
    for(var i:number = 0; i<this.property$.length; i++){
      this.propertyWithId.set(this.property$[i].name,this.property$[i].id);    
    }

    this.selectedProperty = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedProperty+"--"+this.propertyWithId.get(this.selectedProperty));
    this.studentProp.prop_id=this.propertyWithId.get(this.selectedProperty);
  }
    

}
