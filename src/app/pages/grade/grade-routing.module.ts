import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GradeComponent } from './grade.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: GradeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'delete/:id',
        component: DeleteComponent,
      },
      {
        path: 'update/:id',
        component: UpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GradeRoutingModule {}
