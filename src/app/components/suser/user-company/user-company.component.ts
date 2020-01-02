import { Component, OnInit } from '@angular/core';
import { AddressInfo } from '../../address-info';
import { SuserService } from 'src/app/services/suser.service';
import { ScityService } from 'src/app/services/scity.service';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserSchoolComponent } from '../user-school/user-school.component';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.css']
})
export class UserCompanyComponent extends UserSchoolComponent implements OnInit {

  public company$: Company[];
  public selectedCompany:string; 

  constructor(public service:SuserService,public serviceCompany:CompanyService,public serviceCity:ScityService,public serviceDistrict:SdistrictService,public serviceNeighborhood:SneighborhoodService,
    public fb: FormBuilder) {
      super(service,serviceCity,serviceDistrict,serviceNeighborhood,fb);
      this. sampleform = fb.group({  
        'suser': [null]   // will use the property in html page     
      })
  }

  ngOnInit() {
    this.type="company";
    this.getAll(this.type);
    this.getCompany();
    this.getSCity();
    this.getSDistrict();
    this.getSNeighborhood();
  }

  public getCompany() {
    return this.serviceCompany.get()
    .subscribe(data=>this.company$=data);
  }
  
  selectChangeCompany ($event: any) {
    this.getMapping(this.company$,this.companyWithId);
    this.selectedCompany = ($event.target.options[$event.target.options.selectedIndex].text);     
    this.suser.company_id=this.companyWithId.get(this.selectedCompany);
    console.log( this.selectedCompany+"--"+this.companyWithId.get(this.selectedCompany));
  }    
  
  

}
