import { Component, OnInit } from '@angular/core';
import { SpecialCaseService } from 'src/app/services/special-case.service';
import { SpecialCase } from 'src/app/models/special-case.model';

@Component({
  selector: 'app-special-case',
  templateUrl: './special-case.component.html',
  styleUrls: ['./special-case.component.css']
})
export class SpecialCaseComponent implements OnInit {

  submitted = false;
  public data$: SpecialCase[];
  specialCase: SpecialCase = new SpecialCase();

  constructor(public service : SpecialCaseService) { }

  ngOnInit() {
    this.getAll();
  }

  //LIST
  public getAll() {
    return this.service.get()
   .subscribe(data=>this.data$=data);
  }

  //INSERT
  public newValue(): void {
    this.submitted = false;
    this.specialCase = new SpecialCase();
  }

  public save() {
    this.service.create(this.specialCase)//************************************* 
    .subscribe(data => console.log(data), error => console.log(error));
    this.specialCase = new SpecialCase();
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
