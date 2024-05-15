import { NgModule } from '@angular/core';
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
import { SubjectComponent } from './subject.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    SubjectRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    SubjectComponent,
    ListComponent,
    AddComponent,
    
  ],
})
export class SubjectModule { }