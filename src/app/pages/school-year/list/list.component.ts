import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { SChoolYearService } from 'app/@core/services/apis/school-year.service';
import { ISchoolYear } from 'app/@core/interfaces/school-year.interface';
import { DeleteComponent } from '../delete/delete.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listSY: ISchoolYear;
  Listpage!: ISchoolYear[];
  lastPage: number = 0;
  currentPage: number = 0;
  apiurl = `http://127.0.0.1:3300/api/school-years`;
  constructor(private schoolYear: SChoolYearService, private dialogService: NbDialogService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.getAllSchoolYear()
  }

  getAllSchoolYear() {
    this.schoolYear.getSchoolYear().subscribe(res => {
      console.log(res.data);
      this.listSY = res.data;
      this.Listpage = res.data;
      this.currentPage = res.current_page;
      this.lastPage = res.last_page;
    })
  }

  delete(maNH: number) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.schoolYear.deleteSchoolYear(maNH).subscribe({
            next: res => {
              this.toastrService.show('School year successfully deleted!', 'Success', { status: 'success' });
              this.getAllSchoolYear();
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
