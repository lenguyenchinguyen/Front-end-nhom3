import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbToastrModule } from '@nebular/theme';
import { PaginatorModule } from 'app/@theme/components/paginator/paginator.module';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, 
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AssignmentRoutingModule } from './assignment-routing.module';
import { AssignmentComponent } from './assignment.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    ReactiveFormsModule,
    Ng2SmartTableModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    AssignmentRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbToastrModule,
    PaginatorModule
  ],
  declarations: [
    AssignmentComponent,
    AddComponent,
    UpdateComponent,
    ListComponent,
  ],
})
export class AssignmentModule { }