import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SChoolYearService } from 'app/@core/services/apis/school-year.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup
  constructor(private schoolYear: SChoolYearService, private router: Router){}
  ngOnInit(): void {
    this.addForm = new FormGroup({
      nam_hoc: new FormControl('', Validators.required)
    })
  }

  addSchoolYear(){
    if (this.addForm.valid) {
      this.schoolYear.postSchoolYear(this.addForm.value).subscribe(res => {
        this.router.navigate(['/pages', 'school-year', 'list'])
      })
    }
  }
}
