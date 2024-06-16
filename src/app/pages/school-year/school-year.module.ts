import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbToastrModule, NbDialogModule, NbDialogService} from '@nebular/theme'; // Import NbDialogModule
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
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { SchoolYearRoutingModule } from './school-year-routing.module';
import { SchoolYearComponent } from './school-year.component';
import { AddComponent } from './add/add.component';
import { FormsModule, FormsModule as ngFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  imports: [
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
    SchoolYearRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NbToastrModule,
    NbDialogModule.forChild(), // Add NbDialogModule here
    PaginatorModule
  ],
  declarations: [
    SchoolYearComponent,
    AddComponent,
    ListComponent,
    UpdateComponent,
    DeleteComponent
  ],
  providers: [
    NbDialogService
  ]
})
export class SchoolYearModule { }