import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { GradeComponent } from './grade/grade.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {breadcrumb: 'Dashboard'},
    },
    {
      path: 'subject',
      loadChildren: () => import('./subject/subject.module')
      .then(m => m.SubjectModule),
    },
    {
      path: 'bd',
      loadChildren: () => import('./bd/bd.module')
      .then(m => m.BdModule),
    },
    {
      path: 'teacher',
      loadChildren: () => import('./teacher/teacher.module')
      .then(m => m.TeacherModule),
    },
    {
      path: 'assignment',
      loadChildren: () => import('./assignment/assignment.module')
      .then(m => m.AssignmentModule),
    },
    {
      path: 'student',
      loadChildren: () => import('./student/student.module')
      .then(m => m.StudentModule),
    },
    {
      path: 'parent',
      loadChildren: () => import('./parent/parent.module')
      .then(m => m.ParentModule),
    },
    {
      path: 'school-year',
      loadChildren: () => import('./school-year/school-year.module')
      .then(m => m.SchoolYearModule),
    },
    {
      path: 'semester',
      loadChildren: () => import('./semester/semester.module')
      .then(m => m.SemesterModule),
    },
    {
      path: 'bd',
      loadChildren: () => import('./bd/bd.module')
      .then(m => m.BdModule),
    },
    {
      path: 'dslop',
      loadChildren: () => import('./dslop/dslop.module')
      .then(m => m.DslopModule),
    },
    {
      path: 'grade',
      component: GradeComponent,
      data: {breadcrumb: 'Grade'},
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
