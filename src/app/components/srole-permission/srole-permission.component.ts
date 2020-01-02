import { Component, OnInit } from '@angular/core';
import { SrolePermissionService } from 'src/app/services/srole-permission.service';
import { SRoleService } from 'src/app/services/s-role.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SrolePermission } from 'src/app/models/srole-permission.model';
import { SUserRole } from 'src/app/models/s-user-role.model';
import { SRole } from 'src/app/models/s-role.model';

@Component({
  selector: 'app-srole-permission',
  templateUrl: './srole-permission.component.html',
  styleUrls: ['./srole-permission.component.css']
})
export class SrolePermissionComponent implements OnInit {

  public data$: SrolePermission[];
  public sRole$: SRole[];
  sRolePrm: SrolePermission = new SrolePermission();
  sampleform: FormGroup;
  submitted = false;
  public roleWithId = new Map();
  public selectedRolePrm:string;

  constructor(public service:SrolePermissionService ,public serviceRole :SRoleService,public fb: FormBuilder ) {
    this. sampleform = fb.group({  
      'srolePrm': [null]     
      }) 
  }

  ngOnInit() {
    this.getAll();
    this.getSrole();
  }

  //LIST
  public getAll() {
    return this.service.get()
    .subscribe(data=>this.data$=data);
  } 

  public getSrole() {
    return this.serviceRole.get()
    .subscribe(data=>this.sRole$=data);
  }
  
  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.sRolePrm = new SrolePermission();
  }

  public save() {
    this.service.create(this.sRolePrm)
    .subscribe(data => console.log(data), error => console.log(error));
    this.sRolePrm = new SrolePermission();
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

  selectChangeRole ($event: any) {
    for(var i:number = 0; i<this.sRole$.length; i++){
      this.roleWithId.set(this.sRole$[i].roleName,this.sRole$[i].id);    
    }

    this.selectedRolePrm = ($event.target.options[$event.target.options.selectedIndex].text);  
    console.log( this.selectedRolePrm+"--"+this.roleWithId.get(this.selectedRolePrm));
    this.sRolePrm.role_id=this.roleWithId.get(this.selectedRolePrm);
  } 

}
