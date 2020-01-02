import { Component, OnInit, Input } from '@angular/core';
import { UserExperienceService } from 'src/app/services/user-experience.service';
import { SuserService } from 'src/app/services/suser.service';
import { CompanyService } from 'src/app/services/company.service';
import { FormBuilder } from '@angular/forms';
import { UserExperienceComponent } from '../user-experience.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-experience-update',
  templateUrl: './user-experience-update.component.html',
  styleUrls: ['./user-experience-update.component.css']
})
export class UserExperienceUpdateComponent extends UserExperienceComponent implements OnInit {

  @Input() userExp:any = { name: ''};
  @Input() cmp:any = { name: ''};
  selectedUser:string;
  selectedCompany:string;

  constructor(public service:UserExperienceService ,public serviceUser:SuserService,public serviceCompany: CompanyService,
    public fb: FormBuilder,private route: ActivatedRoute) { 
    super(service,serviceUser,serviceCompany,fb);
  }

  ngOnInit() {
    this.getAll();
    this.getUser();
    this.getCompany();

      this.service.getUserExperience(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.userExp = data;
      this.getSelectedUser(); 
    //  this.showSelected();
    });
   
  }

  // UPDATE  
  updateUserExp() {
    this.userExp.user_id=this.userExp.user_id;
    this.userExp.related_user_id=this.userExp.related_user_id;
    console.log(this.userExp.user_id);
    this.service.update(this.route.snapshot.params['id'], this.userExp).subscribe((result) => {
    }, (err) => {
      console.log(err);
    });
  }

//GET cOMPANY BY ID
getCompById(id:number){
  console.log(id+"!!"); 
  this.serviceCompany.getById(id).subscribe((data: {}) => {
    console.log(data);    
    this.cmp = data;
    this.selectedCompany=this.cmp.name;
  });
}

  getSelectedUser(){
    var tmp:number;
 // this.getUser();
 //   console.log("*****"+this.userExp.user_id+"**"+this.company$.length);
    for(var i:number=0; i<this.suser$.length; i++){
        if(this.userExp.user_id==this.suser$[i].id){
          this.selectedUser=this.suser$[i].username;  
        }
        if(this.userExp.related_user_id==this.suser$[i].id){
          this.selectedCompanyId=this.suser$[i].company_id;
          this.getCompById(this.selectedCompanyId);
          console.log("**"+this.selectedCompanyId);
        }


  } 


  }    



}
