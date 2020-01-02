import { Component, OnInit, Input } from '@angular/core';
import { SUserRoleComponent } from '../s-user-role.component';
import { SUserRoleService } from 'src/app/services/s-user-role.service';
import { SuserService } from 'src/app/services/suser.service';
import { SRoleService } from 'src/app/services/s-role.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suser-role-update',
  templateUrl: './suser-role-update.component.html',
  styleUrls: ['./suser-role-update.component.css']
})
export class SuserRoleUpdateComponent extends SUserRoleComponent implements OnInit {

  @Input() sUserRole:any = { name: ''};
  showSelectedUser:string;
  showSelectedProperty:string;

  constructor(public service: SUserRoleService,public serviceSuser:SuserService,public serviceRole:SRoleService,
    public fb: FormBuilder,private route: ActivatedRoute) {
    super(service,serviceSuser,serviceRole,fb);
   }

  ngOnInit() {
    this.getAll();
    this.getSrole();
    this.getSuser();

    this.service.getSUserRole(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.sUserRole = data;
      this.showSelected();
    });
  }

  // UPDATE  
  updateSUserRole() {
    // this.studentProp.user_id=this.cityWithId.get(this.selectedCity);
     this.service.update(this.route.snapshot.params['id'], this.sUserRole).subscribe((result) => {
     }, (err) => {
       console.log(err);
     });
   } 

   public showSelected(){

    for(var i:number = 0; i<this.suser$.length; i++){
   // this.userWithId.set(this.suser$[i].nameSurname,this.suser$[i].id); 
      if(this.suser$[i].id==this.sUserRole.user_id){
        this.selectedUser=this.suser$[i].username;
      }
    }
  
    for(var i:number = 0; i<this.srole$.length; i++){
     // this.propertyWithId.set(this.property$[i].name,this.property$[i].id);
      if(this.srole$[i].id==this.sUserRole.role_id){
        this.selectedRole=this.srole$[i].roleName;
      }    
    }
       console.log(this.selectedRole+"**"+this.selectedUser);
    }   

}
