import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentComponent } from './assignment.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
    {
      path: '',
      component: AssignmentComponent,
      children: [
        {
          path: 'add',
          component: AddComponent,
        },
        {
          path: 'update/:maASM',
          component: UpdateComponent,
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
  export class AssignmentRoutingModule {
  }