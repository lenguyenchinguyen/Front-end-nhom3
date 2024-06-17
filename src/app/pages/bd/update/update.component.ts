import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ITranscript } from 'app/@core/interfaces/transcript.interface';
import { TranscriptService } from 'app/@core/services/apis/transcript.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  constructor(private update: TranscriptService, private takeRouter: ActivatedRoute, private router: Router,  private toastrService: NbToastrService ){}
  updateForm: FormGroup;
  student: ITranscript
  year: ITranscript
  subject: ITranscript
  semester: ITranscript
  ListById: ITranscript

  maBD = this.takeRouter.snapshot.params['maBD'];
  ngOnInit(): void {
    this.updateForm = new FormGroup({
      maHS: new FormControl('', Validators.required),
      maMon: new FormControl('', Validators.required),
      maNH: new FormControl('', Validators.required),
      maHK: new FormControl('', Validators.required),
      diem: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.max(10)]),
    });
    this.getAllSemester()
    this.getAllStudent()
    this.getAllSubject()
    this.getAllYear()

    this.getUpdate(this.maBD)
  }

  getUpdate(maBD: number){
    this.update.getTranscriptById(maBD).subscribe(res => {
      console.log(res.data);

      this.ListById = res.data
    })
  }

  saveUpdateTranscript(){
    if(this.updateForm.valid){
      this.update.putTranscript(this.maBD,this.updateForm.value).pipe().subscribe( {
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this),
      })
    }
  }
  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Point has been updated successfully!',
      'Success',
      { status: 'success' }
    );
    this.router.navigate(['/pages/bd/list']).then();
    console.log(res);
  }

  protected handleError(error: any) {
    this.toastrService.show(
      'Failed to update transcript. Please try again later.',
      'Error',
      { status: 'danger' }
    );
    console.error('Error adding transcript:', error);
  }

  cancle(){
    this.router.navigate(['/pages', 'bd', 'list'])
  }

  getAllSubject(){
    this.update.getSubject().subscribe(res => {
      this.subject = res.data
    })
  }

  getAllYear(){
    this.update.getYear().subscribe(res => {
      this.year = res.data
    })
  }

  getAllSemester(){
    this.update.getSemester().subscribe(res => {
      this.semester = res.data
    })
  }

  getAllStudent(){
    this.update.getStudent().subscribe(res => {
      this.student = res.data
    })
  }
}
