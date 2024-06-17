import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ITranscript } from 'app/@core/interfaces/transcript.interface';
import { TranscriptService } from 'app/@core/services/apis/transcript.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
  constructor(private add: TranscriptService, private router: Router, private toastrService: NbToastrService){}
  addForm: FormGroup;
  student: ITranscript
  year: ITranscript
  subject: ITranscript
  semester: ITranscript

  ngOnInit(): void {
    this.addForm = new FormGroup({
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
  }

  addTranscript(){
    if (this.addForm.valid) {
      this.add.postTranscript(this.addForm.value).pipe().subscribe( {
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this),
      })
    }
  }
  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Transcript has been added successfully!',
      'Success',
      { status: 'success' }
    );
    this.router.navigate(['/pages/bd/list']).then();
    console.log(res);
  }

  protected handleError(error: any) {
    this.toastrService.show(
      'Failed to add transcript. Please try again later.',
      'Error',
      { status: 'danger' }
    );
    console.error('Error adding transcript:', error);
  }

  getAllSubject(){
    this.add.getSubject().subscribe(res => {
      this.subject = res.data
    })
  }

  getAllYear(){
    this.add.getYear().subscribe(res => {
      this.year = res.data
    })
  }

  getAllSemester(){
    this.add.getSemester().subscribe(res => {
      this.semester = res.data
    })
  }

  getAllStudent(){
    this.add.getStudent().subscribe(res => {
      this.student = res.data
    })
  }
}
