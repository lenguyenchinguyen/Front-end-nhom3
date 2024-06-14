import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { SubjectComponent } from './subject.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
    {
      path: '',
      component: SubjectComponent,
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
          path: 'delete/:maMon',
          component: ListComponent,
        },
        {
          path: 'update/:maMon',
          component: UpdateComponent,
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
  export class SubjectRoutingModule {
  }