import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { SubjectService } from 'app/@core/services/apis/subject.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm!: FormGroup
 

  constructor(private sub: SubjectService, private router: Router, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      ten_mon: new FormControl('', Validators.required),
    });
  }
  create() {
    if (this.addForm.valid) {
      this.sub.postSubject(this.addForm.value).pipe().subscribe( {
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this),
      })
    }
  }
  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Subject has been added successfully!',
      'Success',
      { status: 'success' }
    );
    this.router.navigate(['/pages/subject/list']).then();
    console.log(res);
  }

  protected handleError(error: any) {
    this.toastrService.show(
      'Failed to add subject. Please try again later.',
      'Error',
      { status: 'danger' }
    );
    console.error('Error adding subject:', error);
  }
}
