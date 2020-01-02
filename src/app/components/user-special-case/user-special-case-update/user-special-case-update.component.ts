import { Component, OnInit, Input } from '@angular/core';
import { UserSpecialCaseComponent } from '../user-special-case.component';
import { FormBuilder } from '@angular/forms';
import { SpecialCaseService } from 'src/app/services/special-case.service';
import { SuserService } from 'src/app/services/suser.service';
import { UserSpecialCaseService } from 'src/app/services/user-special-case.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-special-case-update',
  templateUrl: './user-special-case-update.component.html',
  styleUrls: ['./user-special-case-update.component.css']
})
export class UserSpecialCaseUpdateComponent extends UserSpecialCaseComponent implements OnInit {

  @Input() userSpCase:any = { name: ''};
  public selectedUser:string;
  public selectedSpCase:string;

  
  constructor(public service: UserSpecialCaseService,public serviceSpCase :SpecialCaseService,public serviceUser :SuserService,
      public fb: FormBuilder,public route: ActivatedRoute) {
      super(service,serviceSpCase,serviceUser,fb);
  }

  ngOnInit() {
    this.getAll();
    this.getUser();
    this.getSpecialCase();

    this.service.getUserSpCase(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.userSpCase = data;
      this.showSelected();
    });
  }

    // UPDATE  
    updateUserSpCase() {
      // this.studentProp.user_id=this.cityWithId.get(this.selectedCity);
       this.service.update(this.route.snapshot.params['id'], this.userSpCase).subscribe((result) => {
       }, (err) => {
         console.log(err);
       });
     }
  
     public showSelected(){

      for(var i:number = 0; i<this.suser$.length; i++){
     // this.userWithId.set(this.suser$[i].nameSurname,this.suser$[i].id); 
        if(this.suser$[i].id==this.userSpCase.user_id){
          this.selectedUser=this.suser$[i].username;
        }
      }
    
      for(var i:number = 0; i<this.specialCase$.length; i++){
       // this.propertyWithId.set(this.property$[i].name,this.property$[i].id);
        if(this.specialCase$[i].id==this.userSpCase.case_id){
          this.selectedSpCase=this.specialCase$[i].value;
        }    
      }
         console.log(this.selectedUser+"**"+this.selectedSpCase);
      }     

}
