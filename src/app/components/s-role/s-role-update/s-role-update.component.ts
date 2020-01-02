import { Component, OnInit, Input } from '@angular/core';
import { SRoleService } from 'src/app/services/s-role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-s-role-update',
  templateUrl: './s-role-update.component.html',
  styleUrls: ['./s-role-update.component.css']
})
export class SRoleUpdateComponent implements OnInit {

  @Input() srole:any = { name: ''};

  constructor(public service:SRoleService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getSrole(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.srole = data;
    });
  }

  // UPDATE  
  updateSrole() {
    this.service.update(this.route.snapshot.params['id'], this.srole).subscribe((result) => {
    }, (err) => {
      console.log(err);
    });
  }    

}
