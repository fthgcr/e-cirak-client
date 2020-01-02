import { Component, OnInit } from '@angular/core';
import { SRole } from 'src/app/models/s-role.model';
import { SRoleService } from 'src/app/services/s-role.service';

@Component({
  selector: 'app-s-role',
  templateUrl: './s-role.component.html',
  styleUrls: ['./s-role.component.css']
})
export class SRoleComponent implements OnInit {

  submitted = false;
  public data$: SRole[];
  srole: SRole = new SRole();

  constructor(public service : SRoleService) { }

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
    return this.service.get()
   .subscribe(data=>this.data$=data);
  }

  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.srole = new SRole();
  }

  public save() {
    this.service.create(this.srole)//************************************* 
    .subscribe(data => console.log(data), error => console.log(error));
    this.srole = new SRole();
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

}
