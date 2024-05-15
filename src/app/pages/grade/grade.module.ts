import { NgModule } from '@angular/core';
import { GradeComponent } from './grade.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
    Ng2SmartTableModule
  ],
  declarations: [
    GradeComponent
  ],
})
export class GradeModule { }
