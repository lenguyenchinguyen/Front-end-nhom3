import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

import { SubjectComponent } from './subject.component';


const routes: Routes = [
    {
      path: '',
      component: SubjectComponent,
      children: [
        {
          path: 'add',
          component: AddComponent,
        },
    //     {
    //       path: 'update',
    //       component: UpdateComponent,
    //     },
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
  export class SubjectRoutingModule {
  }