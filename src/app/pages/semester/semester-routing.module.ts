import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SemesterComponent } from './semester.component';
import { UpdateComponent } from './update/update.component';


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
            path: 'update',
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
  export class SemesterRoutingModule {
  }