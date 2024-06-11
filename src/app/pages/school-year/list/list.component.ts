import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { SChoolYearService } from 'app/@core/services/apis/school-year.service';
import { ISchoolYear } from 'app/@core/interfaces/school-year.interface';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listSY: ISchoolYear;
  constructor(private schoolYear: SChoolYearService, private del: DeleteComponent){}

  ngOnInit(): void {
    this.getAllSchoolYear()
  }

  getAllSchoolYear(){
    this.schoolYear.getSchoolYear().subscribe(res => {
      console.log(res.data);
      
        this.listSY = res.data
    })
  }

  delete(maNH: number){
    if (confirm('Bạn có chắc chắn muốn xóa !')) {
      this.del.deleteSchoolYear(maNH)
    }
  }
}
