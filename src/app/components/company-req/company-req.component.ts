import { Component, OnInit } from '@angular/core';
import { CompanyReqService } from 'src/app/services/company-req.service';
import { SuserService } from 'src/app/services/suser.service';
import { PropertyService } from 'src/app/services/property.service';
import { CompanyService } from 'src/app/services/company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyReq } from 'src/app/models/company-req.model';
import { SUser } from 'src/app/models/suser.model';
import { Property } from 'src/app/models/property.model';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-company-req',
  templateUrl: './company-req.component.html',
  styleUrls: ['./company-req.component.css']
})
export class CompanyReqComponent implements OnInit {

  sampleform: FormGroup;
  public data$: CompanyReq[];
  public suser$: SUser[];
  public property$: Property[];
  public company$: Company[];
  submitted = false;
  companyReq: CompanyReq = new CompanyReq();
  public userWithId = new Map();
  public propertyWithId = new Map();
  public companyWithId = new Map();
  public selectedUser:string;
  public selectedProperty:string;
  public selectedCompany:string;

  constructor(public service:CompanyReqService,public serviceSuser:SuserService,public serviceProperty:PropertyService,
    public serviceCompany:CompanyService,public fb: FormBuilder) {
    this. sampleform = fb.group({  
      'companyReq': [null]     
      }) 
  }

  ngOnInit() {
    this.getAll();
    this.getSuser();
    this.getProperty();
    this.getCompany(); 
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
    return this.serviceProperty.get()
    .subscribe(data=>this.property$=data);
  } 
  public getCompany() {
    return this.serviceCompany.get()
    .subscribe(data=>this.company$=data);
  }  

 //INSERT
 public newValue(): void {
  this.submitted = false;
  this.companyReq = new CompanyReq();
  }

  public save() {
    this.service.create(this.companyReq)
    .subscribe(data => console.log(data), error => console.log(error));
    this.companyReq = new CompanyReq();
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
  getMapping(data:any[],dataWithId=new Map()){
    for(var i:number = 0; i<data.length; i++){
      dataWithId.set(data[i].name,data[i].id); 
    //console.log( data[i].name+"--"+data[i].id);   
    }
  }
  
  selectChangeUser ($event: any) {
    for(var i:number = 0; i<this.suser$.length; i++){
      this.userWithId.set(this.suser$[i].username,this.suser$[i].id); 
    }
    
    this.selectedUser = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedUser+"--"+this.userWithId.get(this.selectedUser));
    this.companyReq.userId=this.userWithId.get(this.selectedUser);
  }

  selectChangeProp ($event: any) {
    this.getMapping(this.property$,this.propertyWithId);
    this.selectedProperty = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedProperty+"--"+this.propertyWithId.get(this.selectedProperty));
    this.companyReq.property_id=this.propertyWithId.get(this.selectedProperty);
  }
  
  selectChangeCompany ($event: any) {
    this.getMapping(this.company$,this.companyWithId);
    this.selectedCompany = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedCompany+"--"+this.companyWithId.get(this.selectedCompany));
    this.companyReq.company_id=this.companyWithId.get(this.selectedCompany);
  }   

}
