import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TeacherService } from 'app/@core/services/apis/teacher.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  constructor(
    private teacherService: TeacherService,
    private router: Router,) { }

  deleteTeacher(maGV: number) {
    this.teacherService.deleteOneTeacher(maGV).subscribe(res => {
      console.log(res);
      this.router.navigate(['/pages', 'teacher', 'list'])
    });
  }
}