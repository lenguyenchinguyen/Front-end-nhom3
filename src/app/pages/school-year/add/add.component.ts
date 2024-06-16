import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { SChoolYearService } from 'app/@core/services/apis/school-year.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup
  constructor(private schoolYear: SChoolYearService, private router: Router, private toastrService: NbToastrService) { }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      nam_hoc: new FormControl('', Validators.required)
    })
  }

  addSchoolYear() {
    if (this.addForm.valid) {
      this.schoolYear.postSchoolYear(this.addForm.value).subscribe(
        {
          next: this.handleLoginSuccess.bind(this),
          error: this.handleError.bind(this)
        }
      )
    }
  }

  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'School Year added successfully!',
      'Success',
      { status: 'success' }
    );
    this.router.navigate(['/pages/school-year/list']).then();
    console.log(res);
  }

  protected handleError(error: any) {
    this.toastrService.show(
      'Failed to add school year. Please try again later.',
      'Error',
      { status: 'danger' }
    );
    console.error('Error adding school year:', error);
  }
}
