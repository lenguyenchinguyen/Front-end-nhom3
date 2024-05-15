import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { StudentComponent } from './student.component';


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
  export class StudentRoutingModule {
  }