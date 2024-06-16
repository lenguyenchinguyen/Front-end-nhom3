import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbToastrModule, NbDialogModule, NbDialogService } from '@nebular/theme';

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
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { AddComponent } from './add/add.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { PaginatorModule } from 'app/@theme/components/paginator/paginator.module';


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
    StudentRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
    NbToastrModule,
    NbDialogModule.forChild(),
    PaginatorModule
    
  ],
  declarations: [
    StudentComponent,
    AddComponent,
    UpdateComponent,
    ListComponent,
    DeleteComponent,
  ],
  providers: [
    NbDialogService,
  ],
})
export class StudentModule { }
