import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISchoolYear } from 'app/@core/interfaces/school-year.interface';
import { SChoolYearService } from 'app/@core/services/apis/school-year.service';
import { SemesterService } from 'app/@core/services/apis/semester.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  addForm: FormGroup;
  listYear: ISchoolYear;
  constructor(private semester: SemesterService, private year: SChoolYearService, private router: Router){}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      hoc_ki: new FormControl('', Validators.required),
      maNH: new FormControl('', Validators.required)
    });

    this.getYear()
  }

  addSemester(){
    if (this.addForm.valid) {
      this.semester.postSemester(this.addForm.value).subscribe(res => {
        this.router.navigate(['/pages/semester/list'])
      })
    }
  }

  getYear(){
    this.year.getSchoolYear().subscribe(res => {
      this.listYear = res.data;
    })
  }
}
