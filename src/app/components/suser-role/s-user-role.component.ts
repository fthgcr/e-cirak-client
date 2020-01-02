import { Component, OnInit } from '@angular/core';
import { SUserRoleService } from 'src/app/services/s-user-role.service';
import { SuserService } from 'src/app/services/suser.service';
import { SRoleService } from 'src/app/services/s-role.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SUserRole } from 'src/app/models/s-user-role.model';
import { SUser } from 'src/app/models/suser.model';
import { SRole } from 'src/app/models/s-role.model';

@Component({
  selector: 'app-s-user-role',
  templateUrl: './s-user-role.component.html',
  styleUrls: ['./s-user-role.component.css']
})
export class SUserRoleComponent implements OnInit {

  public data$: SUserRole[];
  public suser$: SUser[];
  public srole$: SRole[];
  sampleform: FormGroup;
  submitted = false;
  sUserRole: SUserRole = new SUserRole();
  public userWithId = new Map();
  public roleWithId = new Map();
  public selectedUser:string;
  public selectedRole:string;

  constructor(public service : SUserRoleService,public serviceUser: SuserService ,public serviceRole:SRoleService,public fb: FormBuilder) {
    this. sampleform = fb.group({  
      'srole': [null]     
      }) 
  }

  ngOnInit() {
    this.getAll();
    this.getSuser();
    this.getSrole();
  }

  //LIST
  public getAll() {
    return this.service.get()
    .subscribe(data=>this.data$=data);
  }
  public getSuser() {
    return this.serviceUser.get()
    .subscribe(data=>this.suser$=data);
  }
  public getSrole() {
    return this.serviceRole.get()
    .subscribe(data=>this.srole$=data);
  } 
  
  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.sUserRole = new SUserRole();
  }

  public save() {
    this.service.create(this.sUserRole)
    .subscribe(data => console.log(data), error => console.log(error));
    this.sUserRole = new SUserRole();
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
    this.sUserRole.user_id=this.userWithId.get(this.selectedUser);
  }
  
  selectChangeRole ($event: any) {
    for(var i:number = 0; i<this.srole$.length; i++){
      this.roleWithId.set(this.srole$[i].roleName,this.srole$[i].id);    
    }

    this.selectedRole = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedRole+"--"+this.roleWithId.get(this.selectedRole));
    this.sUserRole.role_id=this.roleWithId.get(this.selectedRole);
  }  

}
