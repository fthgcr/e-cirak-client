import { Component, OnInit, Input } from '@angular/core';
import { SrolePermissionComponent } from '../srole-permission.component';
import { FormBuilder } from '@angular/forms';
import { SrolePermissionService } from 'src/app/services/srole-permission.service';
import { SRoleService } from 'src/app/services/s-role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-srole-permission-update',
  templateUrl: './srole-permission-update.component.html',
  styleUrls: ['./srole-permission-update.component.css']
})
export class SrolePermissionUpdateComponent extends SrolePermissionComponent implements OnInit {

  @Input() sRolePrm:any = { name: ''};

  constructor(public service:SrolePermissionService ,public serviceRole :SRoleService,public fb: FormBuilder,
    private route: ActivatedRoute ) {
      super(service,serviceRole,fb);
  }

  ngOnInit() {
    this.getAll();
    this.getSrole();

    this.service.getSRolePrm(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);    
      this.sRolePrm = data;
      this.showSelected();
    });
  }

  // UPDATE  
  updateRolePrm() {
    // this.studentProp.user_id=this.cityWithId.get(this.selectedCity);
     this.service.update(this.route.snapshot.params['id'], this.sRolePrm).subscribe((result) => {
     }, (err) => {
       console.log(err);
     });
  }
   
  public showSelected(){
    for(var i:number = 0; i<this.sRole$.length; i++){
     // this.propertyWithId.set(this.property$[i].name,this.property$[i].id);
      if(this.sRole$[i].id==this.sRolePrm.role_id){
        this.selectedRolePrm=this.sRole$[i].roleName;
      }    
    }
       console.log(this.selectedRolePrm);
  }      

}
