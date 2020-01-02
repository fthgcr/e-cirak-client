import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import { SdistrictComponent } from './components/sdistrict/sdistrict.component';
import { SdistrictUpdateComponent } from './components/sdistrict/updateSdistrict/sdistrict-update/sdistrict-update.component';
import { SneighborhoodComponent } from './components/sneighborhood/sneighborhood.component';
import { SneighborhoodUpdateComponent } from './components/sneighborhood/updateSneighborhood/sneighborhood-update/sneighborhood-update.component';
import { SchoolComponent } from './components/school/school.component';
import { SchoolUpdateComponent } from './components/school/updateSchool/school-update/school-update.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyUpdateComponent } from './components/company/company-update/company-update.component';
import { SuserComponent } from './components/suser/suser.component';
import { SuserUpdateComponent } from './components/suser/suser-update/suser-update.component';
import { PropertyComponent } from './components/property/property.component';
import { PropertyUpdateComponent } from './components/property/property-update/property-update.component';
import { StudentPropComponent } from './components/student-prop/student-prop.component';
import { StudentPropUpdateComponent } from './components/student-prop/student-prop-update/student-prop-update.component';
import { CompanyReqComponent } from './components/company-req/company-req.component';
import { TopbarComponent } from './components/navigation/topbar/topbar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { CompanyReqUpdateComponent } from './components/company-req/company-req-update/company-req-update.component';
import { SpecialCaseComponent } from './components/special-case/special-case.component';
import { SpecialCaseUpdateComponent } from './components/special-case/special-case-update/special-case-update.component';
import { UserSpecialCaseComponent } from './components/user-special-case/user-special-case.component';
import { UserSpecialCaseUpdateComponent } from './components/user-special-case/user-special-case-update/user-special-case-update.component';
import { UserExperienceComponent } from './components/user-experience/user-experience.component';
import { SRoleComponent } from './components/s-role/s-role.component';
import { SRoleUpdateComponent } from './components/s-role/s-role-update/s-role-update.component';
import { SUserRoleComponent } from './components/suser-role/s-user-role.component';
import { SuserRoleUpdateComponent } from './components/suser-role/suser-role-update/suser-role-update.component';
import { SrolePermissionComponent } from './components/srole-permission/srole-permission.component';
import { SrolePermissionUpdateComponent } from './components/srole-permission/srole-permission-update/srole-permission-update.component';
import { UserExperienceUpdateComponent } from './components/user-experience/user-experience-update/user-experience-update.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { UserSchoolComponent } from './components/suser/user-school/user-school.component';
import { UserSchoolUpdateComponent } from './components/suser/user-school/user-school-update/user-school-update.component';
import { UserStudentComponent } from './components/suser/user-student/user-student.component';
import { UserStudentUpdateComponent } from './components/suser/user-student/user-student-update/user-student-update.component';
import { UserCompanyComponent } from './components/suser/user-company/user-company.component';
import { UserCompanyUpdateComponent } from './components/suser/user-company/user-company-update/user-company-update.component';
import { GrdFilterPipe } from './grd-filter.pipe';
import { NavigationModule } from './components/layouts/navigation/navigation.module';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    TableComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    SdistrictComponent,
    SdistrictUpdateComponent,
    SneighborhoodComponent,
    SneighborhoodUpdateComponent,
    SchoolComponent,
    SchoolUpdateComponent,
    CompanyComponent,
    CompanyUpdateComponent,
    SuserComponent,
    SuserUpdateComponent,
    PropertyComponent,
    PropertyUpdateComponent,
    StudentPropComponent,
    StudentPropUpdateComponent,
    CompanyReqComponent,
    TopbarComponent,
    CompanyReqUpdateComponent,
    SpecialCaseComponent,
    SpecialCaseUpdateComponent,
    UserSpecialCaseComponent,
    UserSpecialCaseUpdateComponent,
    UserExperienceComponent,
    SRoleComponent,
    SRoleUpdateComponent,
    SUserRoleComponent,
    SuserRoleUpdateComponent,
    SrolePermissionComponent,
    SrolePermissionUpdateComponent,
    UserExperienceUpdateComponent,
    UserSchoolComponent,
    UserSchoolUpdateComponent,
    UserStudentComponent,
    UserStudentUpdateComponent,
    UserCompanyComponent,
    UserCompanyUpdateComponent,
    GrdFilterPipe,
    SidebarComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule, 
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NavigationModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
