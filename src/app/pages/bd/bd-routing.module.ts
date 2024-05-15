import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';


import { BdComponent } from './bd.component';


const routes: Routes = [
    {
      path: '',
      component: BdComponent,
      children: [
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
  export class BdRoutingModule {
  }