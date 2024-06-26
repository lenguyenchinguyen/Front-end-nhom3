import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { NbToastrModule, NbDialogModule, NbDialogService} from '@nebular/theme';
import { PaginatorModule } from 'app/@theme/components/paginator/paginator.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { SemesterRoutingModule } from './semester-routing.module';
import { SemesterComponent } from './semester.component';
import { AddComponent } from './add/add.component';
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
    SemesterRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
    NbToastrModule,
    NbDialogModule.forChild(),
    PaginatorModule
  ],
  declarations: [
    SemesterComponent,
    AddComponent,
    ListComponent,
    UpdateComponent,
    DeleteComponent
  ],
  providers: [
    NbDialogService
  ]
})
export class SemesterModule { }
