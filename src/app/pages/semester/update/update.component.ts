import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISchoolYear } from 'app/@core/interfaces/school-year.interface';
import { ISemester } from 'app/@core/interfaces/semester.interface';
import { SChoolYearService } from 'app/@core/services/apis/school-year.service';
import { SemesterService } from 'app/@core/services/apis/semester.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  semeById: ISemester;
  listYear: ISchoolYear;
  constructor(private semester: SemesterService, private year: SChoolYearService, private router: Router, private takeRouter: ActivatedRoute) { }
  maHK = this.takeRouter.snapshot.params['maHK'];
  ngOnInit(): void {
    this.updateForm = new FormGroup({
      hoc_ki: new FormControl('', Validators.required),
      maNH: new FormControl('', Validators.required)
    });
    this.getSemesterById(this.maHK);
    this.getYear()
  }

  getSemesterById(maHK: number){
    this.semester.getSemesterById(maHK).subscribe(res => {
      this.semeById = res.data;
    })
  }

  saveUpdateSemester(){
    if (this.updateForm.valid) {
      this.semester.putSemester(this.maHK, this.updateForm.value).subscribe(res => {
        this.router.navigate(['/pages/semester/list'])
      })
    }
  }

  cancle(){
    this.router.navigate(['/pages/semester/list'])
  }

  getYear() {
    this.year.getSchoolYear().subscribe(res => {
      this.listYear = res.data;
    })
  }
}
