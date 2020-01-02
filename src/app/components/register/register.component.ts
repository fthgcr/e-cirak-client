import { Component, OnInit } from '@angular/core';
import { SUser } from 'src/app/models/suser.model';
import { SuserService } from 'src/app/services/suser.service';
import { FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  apiUrl='/SUser/';
  public postData;
  public suserForm: any; 
  dataSaved = false;  

  constructor(/*private formbulider: FormBuilder, */ private service: SuserService) { }

  ngOnInit() {
  //  this.addCustomer();
  }
  onFormSubmit() {  
    this.dataSaved = false;  
    const suser = this.suserForm.value;  
   // this.Create(suser);  
    this.suserForm.reset();  
  }  

 /* Create(suser : SUser) {  
    
      this.service.post(suser).subscribe(  
        () => {  
          this.dataSaved = true;  
      //    this.massage = 'Record saved Successfully';          
        }  
      );  
    }
  public addCustomer(){
    //Simple customer object is used for post the data using RestFul API Post Call.
    var suser = { id:6,address:"string",identityNumber:223333,
      mail:"string",
      nameSurname:"string",
      phone:2222,
      username:"string",
      neighborhood_id:1,
      city_id:1,
      district_id:1,
      school_id:1,
      company_id:1}

      this.service.post(suser).subscribe((res)=>{
        console.log("Created a customer");
  });
    }*/

}
