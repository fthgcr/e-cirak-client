import { Component, OnInit } from '@angular/core';
import { UserSpecialCaseService } from 'src/app/services/user-special-case.service';
import { SpecialCaseService } from 'src/app/services/special-case.service';
import { SuserService } from 'src/app/services/suser.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserSpecialCase } from 'src/app/models/user-special-case.model';
import { SpecialCase } from 'src/app/models/special-case.model';
import { SUser } from 'src/app/models/suser.model';

@Component({
  selector: 'app-user-special-case',
  templateUrl: './user-special-case.component.html',
  styleUrls: ['./user-special-case.component.css']
})
export class UserSpecialCaseComponent implements OnInit {

  public data$: UserSpecialCase[];
  public specialCase$: SpecialCase[];
  public suser$: SUser[];
  sampleform: FormGroup;
  submitted = false;
  userSpCase: UserSpecialCase = new UserSpecialCase();
  public userWithId = new Map();
  public spCaseWithId = new Map();
  public selectedUser:string;
  public selectedSpCase:string;

  constructor(public service: UserSpecialCaseService,public serviceSpCase :SpecialCaseService,public serviceUser :SuserService,public fb: FormBuilder) {
    this. sampleform = fb.group({  
      'userSpCase': [null]     
      }) 
  }

  ngOnInit() {
    this.getAll();
    this.getSpecialCase();
    this.getUser();
  }

  //LIST
  public getAll() {
    return this.service.get()
    .subscribe(data=>this.data$=data);
  }
  public getSpecialCase() {
    return this.serviceSpCase.get()
    .subscribe(data=>this.specialCase$=data);
  }
  public getUser() {
    return this.serviceUser.get()
    .subscribe(data=>this.suser$=data);
  }

  //DELETE  
  public delete(id: number) {
    this.service.delete(id)
    .subscribe(data => {
    console.log(data);
    this.getAll(); },
    error => console.log(error));
  }   
  
  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.userSpCase = new UserSpecialCase();
  }

  public save() {
    this.service.create(this.userSpCase)
    .subscribe(data => console.log(data), error => console.log(error));
    this.userSpCase = new UserSpecialCase();
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
  selectChangeUser ($event: any) {
    for(var i:number = 0; i<this.suser$.length; i++){
      this.userWithId.set(this.suser$[i].username,this.suser$[i].id); 
    }
    
    this.selectedUser = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedUser+"--"+this.userWithId.get(this.selectedUser));
    this.userSpCase.user_id=this.userWithId.get(this.selectedUser);
  }
  
  selectChangeSpCase ($event: any) {
    for(var i:number = 0; i<this.specialCase$.length; i++){
      this.spCaseWithId.set(this.specialCase$[i].value,this.specialCase$[i].id);    
    }

    this.selectedSpCase = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedSpCase+"--"+this.spCaseWithId.get(this.selectedSpCase));
    this.userSpCase.case_id=this.spCaseWithId.get(this.selectedSpCase);
  }  

 

}
