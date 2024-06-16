import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';

import { TeacherService } from 'app/@core/services/apis/teacher.service';
import { Teaching_assignmentService } from 'app/@core/services/apis/teaching_assignment.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  teachers: any[] = [];
  semesters: any[] = [];
  subjects: any[] = [];
  school_years: any[] = [];
  classes: any[] = [];

  constructor(
    private teacherService: TeacherService,
    private teaching_assignmentService: Teaching_assignmentService,
    private toastrService: NbToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      maGV: new FormControl(''),
      maMon: new FormControl(''),
      maLop: new FormControl(''),
      ca_day: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
      thu: new FormControl(''),
      maNH: new FormControl(''),
      maHK: new FormControl(''),
    });
    this.getTeachers();
    this.getSemesters();
    this.getSubjects();
    this.getSchoolYears();
    this.getClasses();
  }

  getTeachers() {
    this.teacherService.getAllTeacher().subscribe(
      (res) => {
        this.teachers = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getSemesters() {
    this.teaching_assignmentService.getSemester().subscribe(
      (res) => {
        this.semesters = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getSubjects() {
    this.teaching_assignmentService.getSubject().subscribe(
      (res) => {
        this.subjects = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getSchoolYears() {
    this.teaching_assignmentService.getSchoolYear().subscribe(
      (res) => {
        this.school_years = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getClasses() {
    this.teaching_assignmentService.getClasse().subscribe(
      (res) => {
        this.classes = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  create() {
    if (this.addForm.valid) {
      this.teaching_assignmentService.addTeachingAssignment(this.addForm.value).subscribe({
        next: this.handleLoginSuccess.bind(this),
        error: this.handleError.bind(this),
      });
    }
  }
  protected handleLoginSuccess(res: any) {
    this.toastrService.show(
      'Teacher added successfully!',
      'Success',
      { status: 'success' }
    );
    this.router.navigate(['/pages/assignment/list']).then();
    console.log(res);
  }
  protected handleError(error: any) {
    this.toastrService.show(
      'Failed to add teacher. Please try again later.',
      'Error',
      { status: 'danger' }
    );
    console.error('Error adding teacher:', error);
  }
}
