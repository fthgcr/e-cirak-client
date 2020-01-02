import { Component, OnInit, Input } from '@angular/core';
import { CompanyReqComponent } from '../company-req.component';
import { CompanyReqService } from 'src/app/services/company-req.service';
import { CompanyService } from 'src/app/services/company.service';
import { FormBuilder } from '@angular/forms';
import { PropertyService } from 'src/app/services/property.service';
import { SuserService } from 'src/app/services/suser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-req-update',
  templateUrl: './company-req-update.component.html',
  styleUrls: ['./company-req-update.component.css']
})
export class CompanyReqUpdateComponent extends CompanyReqComponent implements OnInit {

  @Input() companyReq:any = { name: ''};
  showSelectedUser:string;
  showSelectedProperty:string;
  showSelectedCompany:string;

  constructor(public service:CompanyReqService,public serviceSuser:SuserService,public serviceProperty:PropertyService,
    public serviceCompany:CompanyService,public fb: FormBuilder,public route: ActivatedRoute) {
      super(service,serviceSuser,serviceProperty,serviceCompany,fb);
  }

  ngOnInit() {
    this.getAll();
    this.getSuser();
    this.getProperty();
    this.getCompany(); 

    this.service.getCompanyReq(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.companyReq = data;
      this.showSelected();
    });    
  }

  // UPDATE  
  updateCompanyReq() {
    this.service.update(this.route.snapshot.params['id'], this.companyReq).subscribe((result) => {
    }, (err) => {
      console.log(err);
    });
  }    

  public showSelected(){
    this.getMapping(this.property$,this.propertyWithId);
    this.getMapping(this.company$,this.companyWithId);

    for(var i:number = 0; i<this.suser$.length; i++){
      if(this.suser$[i].id==this.companyReq.userId){
        this.showSelectedUser=this.suser$[i].username;
      }
    }

    this.showSelectedProperty=this.getSelectedItems(this.property$,this.companyReq.property_id,this.showSelectedProperty);
    this.showSelectedCompany=this.getSelectedItems(this.company$,this.companyReq.company_id,this.showSelectedCompany);
    console.log(this.showSelectedProperty+"-"+this.showSelectedCompany);
  }

  public getSelectedItems(data:any[],id:number,selected:string){
    for(var i:number=0; i<data.length; i++){
      if(data[i].id==id){
        selected=data[i].name;
        console.log(selected+"---");
      }
    }
    return selected; 
  }  

}
