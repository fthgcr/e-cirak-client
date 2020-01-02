import { Component, OnInit, Input } from '@angular/core';
import { ScityService } from 'src/app/services/scity.service';
import {Router, ActivatedRoute} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Scity } from 'src/app/models/scity.model';
@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {
  scity: Scity = new Scity();
  submitted = false;
 
  @Input() city:any = { name: ''};
  constructor(private service: ScityService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.service.getCity(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.city = data;
    });
  }
// INSERT
  newValue(): void {
    this.submitted = false;
    this.scity = new Scity();
  }

  save() {
    this.service.create(this.scity)//************************************* 
      .subscribe(data => console.log(data), error => console.log(error));
    this.scity = new Scity();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

// UPDATE  
  updateProduct() {
    this.service.updateCity(this.route.snapshot.params['id'], this.city).subscribe((result) => {
      this.router.navigate(['/list/deneme/'+result.id]);
    }, (err) => {
      console.log(err);
    });
  }

  
}