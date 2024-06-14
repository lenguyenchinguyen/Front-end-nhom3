import { NgModule } from '@angular/core';
import { GradeComponent } from './grade.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterModule, Routes } from '@angular/router';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule
} from '@nebular/theme';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { GradeRoutingModule } from './grade-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    BreadcrumbModule,
    Ng2SmartTableModule,
    RouterModule,
    GradeRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    GradeComponent,
    ListComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent
  ],
})
export class GradeModule { }
