import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DslopComponent } from './dslop.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path: '',
    component: DslopComponent,
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
export class DsRoutingModule {}
