import { Component, OnInit } from '@angular/core';

import { TeacherService } from 'app/@core/services/apis/teacher.service';
import { DeleteComponent } from '../delete/delete.component';

export interface ITeacher {
  maGV: number;
  ten_GV: string;
  gioi_tinh: string;
  email: string;
  trinh_do: string;
  password: string;
  dien_thoai: string;
}

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  teachers: ITeacher []= [];
  private _listFilter: string = '';
  allTeachers: ITeacher[] = [];

  constructor(private teacherService: TeacherService, private deleteTeacher: DeleteComponent) {}

  ngOnInit(): void {
    this.getTeacher();
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.teachers = this.listFilter ? this.performFilter(this.listFilter) : this.allTeachers;
  }

  performFilter(filterBy: string): ITeacher[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.teachers.filter((teacher: ITeacher) =>
      teacher.ten_GV.toLocaleLowerCase().includes(filterBy)
    );
  }

  getTeacher(){
    this.teacherService.getAllTeacher().subscribe(res =>{
      this.teachers = res.data;
      this.allTeachers = res.data;
      console.log(res);
    },error => {
      console.log(error);
  });
  }

  delete(maGV: number){
    if(confirm('Có muốn xóa')){
      this.deleteTeacher.deleteTeacher(maGV);
      
    }
  }
}
