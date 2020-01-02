import { Scity } from '../models/scity.model';
import { Sdistrict } from '../models/sdistrict.model';
import { Sneighborhood } from '../models/sneighborhood.model';
import { ScityService } from '../services/scity.service';
import { SdistrictService } from '../services/sdistrict.service';
import { SneighborhoodService } from '../services/sneighborhood.service';

export class AddressInfo {
    public city$: Scity[]=[];
    public district$: Sdistrict[]=[];
    public neighborhood$: Sneighborhood[]=[];  

    constructor(public serviceCity:ScityService,public serviceDistrict:SdistrictService,public serviceNeighborhood:SneighborhoodService){  }

  //LIST
  public getSCity() {
    return this.serviceCity.get()
    .subscribe(data=>this.city$=data);
  }
  public getSDistrict() {
    return this.serviceDistrict.get()
    .subscribe(data=>this.district$=data);
  }
  public getSNeighborhood() {
    return this.serviceNeighborhood.get()
    .subscribe(data=>this.neighborhood$=data);
  }
  

}
