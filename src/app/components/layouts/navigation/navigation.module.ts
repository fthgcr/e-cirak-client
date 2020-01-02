import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { ScityComponent } from '../../scity/scity.component';
import { ScityUpdateComponent } from '../../scity/updateScity/scity-update/scity-update.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { DenemeComponent } from '../../deneme/deneme.component';

@NgModule({
  declarations: [
    NavigationComponent,
    ScityComponent,
    ScityUpdateComponent,
    DenemeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class NavigationModule { }
