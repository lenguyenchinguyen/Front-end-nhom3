import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent.component';


const routes: Routes = [
    {
      path: '',
      component: ParentComponent,
      children: [
        {
          path: 'add',
          component: AddComponent,
        },
        {
          path: 'update/:maPH',
          component: UpdateComponent,
        },
        {
          path: 'delete/:maPH',
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
  export class ParentRoutingModule {
  }