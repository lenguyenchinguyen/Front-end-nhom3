import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { TeacherService } from 'app/@core/services/apis/teacher.service';
import { DeleteComponent } from '../delete/delete.component';
// import { Router } from '@angular/router';

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
  teachers: ITeacher[] = [];
  private _listFilter: string = '';
  allTeachers: ITeacher[] = [];
  Listpage! : ITeacher[];
  lastPage: number = 0;
  currentPage : number = 0;
  apiurl = `http://127.0.0.1:3300/api/teachers`;

  constructor(
    private teacherService: TeacherService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
    // private router: Router
  ) { }

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

  getTeacher() {
    this.teacherService.getAllTeacher().subscribe(res => {
      this.teachers = res.data;
      this.allTeachers = res.data;
      this.Listpage = res.data;
      this.currentPage = res.current_page;
      this.lastPage = res.last_page;
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  delete(maGV: number) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.teacherService.deleteOneTeacher(maGV).subscribe({
            next: res => {
              this.toastrService.show('Teacher successfully deleted!', 'Success', { status: 'success' });
              this.getTeacher(); 
            },
            error: err => {
              this.toastrService.show('Delete failed. Please try again.', 'Error', { status: 'danger' });
            }
          });
        }
      });
    } 
    getPage(res:any) {
      console.log(res);
      this.Listpage = res
    }
}
