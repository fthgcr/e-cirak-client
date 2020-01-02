import { Component, OnInit, Input } from '@angular/core';
import { SpecialCaseService } from 'src/app/services/special-case.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-special-case-update',
  templateUrl: './special-case-update.component.html',
  styleUrls: ['./special-case-update.component.css']
})
export class SpecialCaseUpdateComponent implements OnInit {

  @Input() specialCase:any = { name: ''};

  constructor(public service:SpecialCaseService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getSpecialCase(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.specialCase = data;
    });
  }

  // UPDATE  
  updateSpecialCase() {
    this.service.update(this.route.snapshot.params['id'], this.specialCase).subscribe((result) => {
    }, (err) => {
      console.log(err);
    });
  }   

}
