import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { TeacherComponent } from './teacher.component';
import { AssignmentComponent } from '../assignment/assignment.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
    {
      path: '',
      component: TeacherComponent,
      children: [
        {
          path: 'add',
          component: AddComponent,
        },
        {
          path: 'update/:maGV',
          component: UpdateComponent,
        },
        {
          path: 'list',
          component: ListComponent,
        },
        {
          path: 'delete/:maGV',
          component: DeleteComponent,
        }
      ],
    },
    {
      path: '',
      component: AssignmentComponent,
      children: [
        {
          path: 'add',
          component: AddComponent,
        },
        {
          path: 'update',
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
  export class TeacherRoutingModule {
  }