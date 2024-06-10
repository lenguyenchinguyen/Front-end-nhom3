import { Component, OnInit } from '@angular/core';

import { SemesterService } from 'app/@core/services/apis/semester.service';
import { Router } from '@angular/router';
import { ISemester } from 'app/@core/interfaces/semester.interface';
import { ISchoolYear } from 'app/@core/interfaces/school-year.interface';
import { SChoolYearService } from 'app/@core/services/apis/school-year.service';
import { DeleteComponent } from 'app/pages/semester/delete/delete.component';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit{
  listSeme: ISemester;
  listYear: ISchoolYear
  constructor(private semester: SemesterService,private year: SChoolYearService, private router: Router, private del: DeleteComponent){}

  ngOnInit(): void {
    this.getAllSemester();
    this.getYear();
  }

  getAllSemester(){
    this.semester.getSemester().subscribe(res => {
      this.listSeme = res.data;
    })
  }

  getYear(){
    this.year.getSchoolYear().subscribe(res => {
      this.listYear = res.data;
    })
  }

  delete(maHK: number){
    if (confirm('Bạn có chắc chắn muốn xóa !')) {
      this.del.deleteSemester(maHK)
    }
  }
}
