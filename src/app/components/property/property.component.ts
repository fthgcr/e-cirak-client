import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  submitted = false;
  public data$: Property[];
  property: Property = new Property();

  constructor(public service : PropertyService) { }

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
    this.property = new Property();
  }

  public save() {
    this.service.create(this.property)//************************************* 
    .subscribe(data => console.log(data), error => console.log(error));
    this.property = new Property();
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
