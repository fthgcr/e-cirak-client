import { Component, OnInit, Input } from '@angular/core';
import { UserExperienceService } from 'src/app/services/user-experience.service';
import { SuserService } from 'src/app/services/suser.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserExperience } from 'src/app/models/user-experience.model';
import { SUser } from 'src/app/models/suser.model';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-user-experience',
  templateUrl: './user-experience.component.html',
  styleUrls: ['./user-experience.component.css']
})
export class UserExperienceComponent implements OnInit {

  public data$: UserExperience[];
  public suser$: SUser[];
  public company$: Company[]= [];
  public dene$: Company[];
  sampleform: FormGroup;
  submitted = false;
  userExp: UserExperience = new UserExperience();
  public userWithId = new Map();
  public companyWithId = new Map();
  public selectedUser:string;
  public selectedUserId:number;
  public selectedCompany:string;
  public selectedCompanyId:number;

  public suserCmp$: SUser[];
  public suserStd$: SUser[];
  public mapRelatedUsr = new Map();



  constructor(public service:UserExperienceService ,public serviceUser:SuserService,public serviceCompany: CompanyService,public fb: FormBuilder ) {
    this. sampleform = fb.group({  
      'userExp': [null]     
    }) 
  }

  ngOnInit() {
    this.getAll();
    this.getUser();
    this.getCompany();
    this.getUserCmp();
    this.getUserStd();
   // this.dene();

  }

  //LIST
  public getAll() {
    return this.service.get()
    .subscribe(data=>this.data$=data);
  }

  public getUser() {
    return this.serviceUser.get()
    .subscribe(data=>this.suser$=data);
  }   

  public getUserCmp(){
    return this.serviceUser.getByType("company")
    .subscribe(data=>this.suserCmp$=data);
  }

  public getUserStd(){
    return this.serviceUser.getByType("student")
    .subscribe(data=>this.suserStd$=data);
  }

  public getCompany() {
    return this.serviceCompany.get()
    .subscribe(data=>this.company$=data);
  }
 /* public getFilteredUser() {
    this.serviceUser.getSuser((Number)(this.userWithId.get(this.selectedUser))).subscribe((data: {}) => {
      console.log(data); 
      this.filteredUser=data;
      this.tempCompanyId=this.filteredUser.company_id;
    console.log(this.tempCompanyId) 
    });

  }  
  public getFilteredCompany() {
    this.serviceUser.getSuser((Number)(this.userWithId.get(this.selectedUser))).subscribe((data: {}) => {
      console.log(data); 
      this.filteredUser=data;
      this.tempCompanyId=this.filteredUser.company_id;
    console.log(this.tempCompanyId) 
    });

  } */

  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.userExp = new UserExperience();
  }

  public save() {
    this.service.create(this.userExp)
    .subscribe(data => console.log(data), error => console.log(error));
    this.userExp = new UserExperience();
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
      this.userWithId.set(this.suser$[i].username,this.suser$[i].id); 
    }

    this.selectedUser = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedUser+"--"+this.userWithId.get(this.selectedUser));
    this.userExp.user_id=this.userWithId.get(this.selectedUser);
    this.selectedUserId=this.userExp.user_id;
  }

  selectChangeCompany ($event: any) {
    for(var i:number = 0; i<this.company$.length; i++){
      this.companyWithId.set(this.company$[i].name,this.company$[i].id); 
    }

    for(var i:number = 0; i<this.suser$.length; i++){
      this.mapRelatedUsr.set(this.suser$[i].company_id,this.suser$[i].id); 
    }


    this.selectedCompany = ($event.target.options[$event.target.options.selectedIndex].text);  
    var tmp:number=this.companyWithId.get(this.selectedCompany);
    this.userExp.related_user_id=this.mapRelatedUsr.get(tmp);
    console.log( this.selectedCompany+"--"+this.companyWithId.get(this.selectedCompany)+"---"+this.userExp.related_user_id);
    this.selectedCompanyId=this.userExp.related_user_id;
  }
  
   



}
