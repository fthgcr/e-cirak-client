import { Component, OnInit, Input } from '@angular/core';
import { PropertyComponent } from '../property.component';
import { PropertyService } from 'src/app/services/property.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-update',
  templateUrl: './property-update.component.html',
  styleUrls: ['./property-update.component.css']
})
export class PropertyUpdateComponent implements OnInit {

  @Input() property:any = { name: ''};

  constructor(public service:PropertyService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getProperty(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.property = data;
    });
  }

  // UPDATE  
  updateProperty() {
    this.service.update(this.route.snapshot.params['id'], this.property).subscribe((result) => {
    }, (err) => {
      console.log(err);
    });
  }  

}
