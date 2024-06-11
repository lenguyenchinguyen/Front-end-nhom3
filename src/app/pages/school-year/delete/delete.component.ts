import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SChoolYearService } from 'app/@core/services/apis/school-year.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  constructor(private del: SChoolYearService, private router: Router){}

  ngOnInit(): void {

  }

  deleteSchoolYear(maNH: number){
    this.del.deleteSchoolYear(maNH).subscribe(res => {
      this.router.navigate(['/pages/school-year/list'])
    })
  }
}
