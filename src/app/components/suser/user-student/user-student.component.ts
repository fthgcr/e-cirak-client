import { Component, OnInit } from '@angular/core';
import { UserSchoolComponent } from '../user-school/user-school.component';
import { FormBuilder } from '@angular/forms';
import { ScityService } from 'src/app/services/scity.service';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { SuserService } from 'src/app/services/suser.service';

@Component({
  selector: 'app-user-student',
  templateUrl: './user-student.component.html',
  styleUrls: ['./user-student.component.css']
})
export class UserStudentComponent extends UserSchoolComponent implements OnInit {

  constructor(public service:SuserService,public serviceCity:ScityService,public serviceDistrict:SdistrictService,public serviceNeighborhood:SneighborhoodService,
    public fb: FormBuilder) {
      super(service,serviceCity,serviceDistrict,serviceNeighborhood,fb);
     }

  ngOnInit() {
    this.type="student";
    this.getAll(this.type);
    this.getSCity();
    this.getSDistrict();
    this.getSNeighborhood();
  }

}
