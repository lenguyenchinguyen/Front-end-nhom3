import { Component } from '@angular/core';
import { TeacherService, ITeacher } from 'app/@core/services/apis/teacher.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  teachers!: ITeacher[]
  constructor(
    private teacherService: TeacherService) {
    this.teacherService.getTeachers().subscribe({
      next: (data) => {
        this.teachers = data;
      },
      error: () => {

      }
    });
  }
  delete(id: ITeacher) {
    this.teacherService.deleteTeacher(id).subscribe({
      next: () => {
        console.log('xoa thanh cong');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      gender: {
        title: 'Gender',
        type: 'string',
      },
      dateOfBirth: {
        title: 'Date of Birth',
        type: 'string',
      },
      class: {
        title: 'Class',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      phone: {
        title: 'Phone',
        type: 'string',
      },
      educationLevel: {
        title: 'Education Level',
        type: 'string',
      },
      subject: {
        title: 'Subject',
        type: 'string',
      },
    },
  };
}