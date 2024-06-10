import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';


import { BdComponent } from './bd.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path: '',
    component: BdComponent,
    children: [
      {
        path: 'update/:maBD',
        component: UpdateComponent,
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'list',
        component: ListComponent,
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
export class BdRoutingModule {
}