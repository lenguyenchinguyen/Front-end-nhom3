import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ISchoolYear } from 'app/@core/interfaces/school-year.interface';
import { SChoolYearService } from 'app/@core/services/apis/school-year.service';
import { SemesterService } from 'app/@core/services/apis/semester.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  listYear: ISchoolYear;
  constructor(private semester: SemesterService, private year: SChoolYearService, private router: Router, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      hoc_ki: new FormControl('', Validators.required),
      maNH: new FormControl('', Validators.required)
    });

    this.getYear()
  }

  addSemester() {
    if (this.addForm.valid) {
      this.semester.postSemester(this.addForm.value).subscribe(
        {
          next: this.handleLoginSuccess.bind(this),
          error: this.handleError.bind(this)
        })
    }
  }

  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Semester added successfully!',
      'Success',
      { status: 'success' }
    );
    this.router.navigate(['/pages/semester/list']).then();
    console.log(res);
  }

  protected handleError(error: any) {
    this.toastrService.show(
      'Failed to add semester. Please try again later.',
      'Error',
      { status: 'danger' }
    );
    console.error('Error adding semester:', error);
  }

  getYear() {
    this.year.getSchoolYear().subscribe(res => {
      this.listYear = res.data;
    })
  }
}
