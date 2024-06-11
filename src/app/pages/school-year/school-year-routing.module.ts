import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SchoolYearComponent } from './school-year.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {
    path: '',
    component: SchoolYearComponent,
    children: [
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'update/:maNH',
        component: UpdateComponent,
      },
      {
        path: 'delete/:maNH',
        component: DeleteComponent
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SchoolYearRoutingModule {
}