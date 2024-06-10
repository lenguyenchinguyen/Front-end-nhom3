import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { StudentComponent } from './student.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
    {
      path: '',
      component: StudentComponent,
      children: [
        {
          path: 'add',
          component: AddComponent,
        },
        {
          path: 'update/:maHS',
          component: UpdateComponent,
        },
        {
          path: 'delete/:maHS',
          component: ListComponent,
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
  export class StudentRoutingModule {
  }