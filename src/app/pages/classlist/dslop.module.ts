import { NgModule } from '@angular/core';
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


import { ThemeModule } from '../../@theme/theme.module';
import { DsRoutingModule } from './dslop-routing.module';
import { DslopComponent } from './dslop.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule, FormsModule as ngFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'app/@theme/components/paginator/paginator.module';

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
    DsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    Ng2SmartTableModule,
    FormsModule, 
    ReactiveFormsModule,
    PaginatorModule
  ],
  declarations: [
    DslopComponent,
    AddComponent,
    ListComponent,
    UpdateComponent,
    DeleteComponent,
  ],
})
export class DslopModule { }