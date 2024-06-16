import { Component, OnInit } from '@angular/core';

import { SemesterService } from 'app/@core/services/apis/semester.service';
import { Router } from '@angular/router';
import { ISemester } from 'app/@core/interfaces/semester.interface';
import { ISchoolYear } from 'app/@core/interfaces/school-year.interface';
import { SChoolYearService } from 'app/@core/services/apis/school-year.service';
import { DeleteComponent } from 'app/pages/semester/delete/delete.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listSeme: ISemester;
  listYear: ISchoolYear;
  Listpage!: ISemester[];
  lastPage: number = 0;
  currentPage: number = 0;
  apiurl = `http://127.0.0.1:3300/api/semesters`;
  constructor(private semester: SemesterService, private year: SChoolYearService, private router: Router, private dialogService: NbDialogService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.getAllSemester();
    this.getYear();
  }

  getAllSemester() {
    this.semester.getSemester().subscribe(res => {
      this.listSeme = res.data;
      this.Listpage = res.data;
      this.currentPage = res.current_page;
      this.lastPage = res.last_page;
    })
  }

  getYear() {
    this.year.getSchoolYear().subscribe(res => {
      this.listYear = res.data;
    })
  }

  delete(maHK: number) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.semester.deleteSemester(maHK).subscribe({
            next: res => {
              this.toastrService.show('Semester successfully deleted!', 'Success', { status: 'success' });
              this.getAllSemester();
            },
            error: err => {
              this.toastrService.show('Delete failed. Please try again.', 'Error', { status: 'danger' });
            }
          });
        }
      });
  }
  getPage(res: any) {
    console.log(res);
    this.Listpage = res
  }
}
