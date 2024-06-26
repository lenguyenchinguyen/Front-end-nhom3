import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ISchoolYear } from 'app/@core/interfaces/school-year.interface';
import { SChoolYearService } from 'app/@core/services/apis/school-year.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  listSY: ISchoolYear
  constructor(private schoolYear: SChoolYearService, private router: Router, private takeRouter: ActivatedRoute, private toastrService: NbToastrService){}

  maNH = this.takeRouter.snapshot.params['maNH']
  ngOnInit(): void {
    this.updateForm = new FormGroup({
      nam_hoc: new FormControl('', Validators.required)
    });

    this.getSchoolYearById(this.maNH)
  }

  getSchoolYearById(maNH: number){
    this.schoolYear.getSchoolYearById(maNH).subscribe(res => {
      this.listSY = res.data;
    })
  }

  saveUpdateSchoolYear(){
    if (this.updateForm.valid) {
      this.schoolYear.putSchoolYear(this.maNH, this.updateForm.value).subscribe(res => {
        this.handleSaveSuccess(res);
      })
    }
  }

  handleSaveSuccess(res: any) {
    this.toastrService.success('Successfully updated school year information!', 'Success');
    this.router.navigate(['/pages/school-year/list']).then();
    console.log(res);
  }

  cancle(){
    this.router.navigate(['/pages/school-year/list'])
  }
}
