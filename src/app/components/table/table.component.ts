import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.model';
import { Scity } from 'src/app/models/scity.model';
import { ScityService } from 'src/app/services/scity.service';
import { SneighborhoodService } from 'src/app/services/sneighborhood.service';
import { Sneighborhood } from 'src/app/models/sneighborhood.model';
import { SdistrictService } from 'src/app/services/sdistrict.service';
import { Sdistrict } from 'src/app/models/sdistrict.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  public data$: Company[];
  public city$: Scity[];
  public neighborhood$: Sneighborhood[];
  public district$: Sdistrict[];
  private scity: Scity[];

  constructor( private router: Router,private service: CompanyService,private serviceCity:ScityService,private serviceNeighb:SneighborhoodService,private serviceDistrict:SdistrictService) { }

  ngOnInit() {
      this.getAll();
      this.getSCity();
      this.getSneighborhood();
      this.getSdistrict(); 

  //  this.getSCity() 
  }

  public getAll() {
   return this.service.get()
  .subscribe(data=>this.data$=data);
   }

  public getSCity() {
    return this.serviceCity.get()
    .subscribe(data=>this.city$=data);
    }

  public getSneighborhood() {
    return this.serviceNeighb.get()
    .subscribe(data=>this.neighborhood$=data);
    }

  public getSdistrict() {
    return this.serviceDistrict.get()
    .subscribe(data=>this.district$=data);
    } 
   
  public delete(id: number) {
      this.service.delete(id)
        .subscribe(
          data => {
            console.log(data);
           this.refresh();
          },
          error => console.log(error));
    }  
    refresh(): void {
      window.location.reload();
  }
  



} 
