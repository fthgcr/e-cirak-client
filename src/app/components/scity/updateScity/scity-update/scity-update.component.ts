import { Component, OnInit, Input } from '@angular/core';
import { ScityService } from 'src/app/services/scity.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scity-update',
  templateUrl: './scity-update.component.html',
  styleUrls: ['./scity-update.component.css']
})
export class ScityUpdateComponent implements OnInit {

  @Input() city:any = { name: ''};
  constructor(private service: ScityService ,private route: ActivatedRoute ,private router: Router) { }

  ngOnInit() {
    this.service.getCity(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.city = data;
    });
  }

  // UPDATE  
  updateProduct() {
    this.service.updateCity(this.route.snapshot.params['id'], this.city).subscribe((result) => {
      this.router.navigate(['/city']);
    }, (err) => {
      console.log(err);
    });
  }


}
