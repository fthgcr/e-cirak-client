import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { DenemeComponent } from './components/deneme/deneme.component';
import { ScityComponent } from './components/scity/scity.component';
import { ScityUpdateComponent } from './components/scity/updateScity/scity-update/scity-update.component';
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
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { TopbarComponent } from './components/navigation/topbar/topbar.component';
import { CompanyReqComponent } from './components/company-req/company-req.component';
import { CompanyReqUpdateComponent } from './components/company-req/company-req-update/company-req-update.component';
import { SpecialCaseComponent } from './components/special-case/special-case.component';
import { SpecialCaseUpdateComponent } from './components/special-case/special-case-update/special-case-update.component';
import { UserSpecialCaseComponent } from './components/user-special-case/user-special-case.component';
import { UserSpecialCaseUpdateComponent } from './components/user-special-case/user-special-case-update/user-special-case-update.component';
import { SRoleComponent } from './components/s-role/s-role.component';
import { SRoleUpdateComponent } from './components/s-role/s-role-update/s-role-update.component';
import { SUserRoleComponent } from './components/suser-role/s-user-role.component';
import { SuserRoleUpdateComponent } from './components/suser-role/suser-role-update/suser-role-update.component';
import { SrolePermissionComponent } from './components/srole-permission/srole-permission.component';
import { SrolePermissionUpdateComponent } from './components/srole-permission/srole-permission-update/srole-permission-update.component';
import { UserExperienceComponent } from './components/user-experience/user-experience.component';
import { UserExperienceUpdateComponent } from './components/user-experience/user-experience-update/user-experience-update.component';
import { UserSchoolComponent } from './components/suser/user-school/user-school.component';
import { UserSchoolUpdateComponent } from './components/suser/user-school/user-school-update/user-school-update.component';
import { UserStudentComponent } from './components/suser/user-student/user-student.component';
import { UserStudentUpdateComponent } from './components/suser/user-student/user-student-update/user-student-update.component';
import { UserCompanyComponent } from './components/suser/user-company/user-company.component';
import { UserCompanyUpdateComponent } from './components/suser/user-company/user-company-update/user-company-update.component';
import { NavigationComponent } from './components/layouts/navigation/navigation.component';


const routes: Routes = [
  { path: 'not-found'               , component: NotFoundComponent } , 
  { path: ''                        , component: HomePageComponent },
  { path: 'list'                    , component: TableComponent    },
  { path: 'login'                   , component: LoginComponent    },
  { path: 'forgot-password'         , component: ForgotPasswordComponent},
  { path: 'register'                , component: RegisterComponent},
  { path: 'district'                , component: SdistrictComponent} ,
  { path: 'district/update/:id'     , component: SdistrictUpdateComponent,   },
  { path: 'neighborhood'            , component: SneighborhoodComponent,   },
  { path: 'neighborhood/update/:id' , component: SneighborhoodUpdateComponent,   },
  { path: 'school'                  , component: SchoolComponent,   },
  { path: 'school/update/:id'       , component: SchoolUpdateComponent,   },
  { path: 'company'                 , component: CompanyComponent,   },
  { path: 'company/update/:id'      , component: CompanyUpdateComponent,   },
  { path: 'user'                    , component: SuserComponent,   },
  { path: 'user/update/:id'         , component: SuserUpdateComponent,   },
  { path: 'property'                , component: PropertyComponent,   },
  { path: 'property/update/:id'     , component: PropertyUpdateComponent,   },
  { path: 'student-property'        , component: StudentPropComponent,   },
  { path: 'student-property/update/:id', component:StudentPropUpdateComponent,   },
  { path: 'sidebar'                 , component: SidebarComponent,   },
  { path: 'topbar'                  , component: TopbarComponent,   },
  { path: 'company-req'             , component: CompanyReqComponent,   },
  { path: 'company-req/update/:id'  , component: CompanyReqUpdateComponent,   },
  { path: 'special-case'            , component: SpecialCaseComponent,   },
  { path: 'special-case/update/:id' , component: SpecialCaseUpdateComponent,   },
  { path: 'user-special-case'       , component: UserSpecialCaseComponent,   },
  { path: 'user-special-case/update/:id', component: UserSpecialCaseUpdateComponent,   },
  { path: 'user-experience'         , component: UserExperienceComponent,   },
  { path: 'user-experience/update/:id', component: UserExperienceUpdateComponent,   },
  { path: 'role'                    , component: SRoleComponent,   },
  { path: 'role/update/:id'         , component: SRoleUpdateComponent,   },
  { path: 'user-role'               , component: SUserRoleComponent,   },
  { path: 'user-role/update/:id'    , component: SuserRoleUpdateComponent,   },
  { path: 'role-permission'         , component: SrolePermissionComponent,   },
  { path: 'role-permission/update/:id', component: SrolePermissionUpdateComponent,   },
  { path: 'user-school'             , component: UserSchoolComponent,   },
  { path: 'user-school/update/:id'  , component: UserSchoolUpdateComponent,   },
  { path: 'user-student'            , component: UserStudentComponent,   },
  { path: 'user-student/update/:id'  , component:UserStudentUpdateComponent,   },
  { path: 'user-company'            , component: UserCompanyComponent,   },
  { path: 'user-company/update/:id'  , component:UserCompanyUpdateComponent,   },
  { path:'',
    component: NavigationComponent,
    children: [{
    path : '',
    component: DenemeComponent
  },{
    path: 'city/update/:id',
    component: ScityUpdateComponent
  },{
    path : 'city',
    component: ScityComponent
  }
  
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
