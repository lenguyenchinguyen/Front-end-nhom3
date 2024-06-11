import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SemesterComponent } from './semester.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {
    path: '',
    component: SemesterComponent,
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
        path: 'update/:maHK',
        component: UpdateComponent,
      },
      {
        path: 'delete/:maHK',
        component: DeleteComponent,
      },
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
export class SemesterRoutingModule {
}