import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

import { ITeaching } from '../list/list.component';
import { Teaching_assignmentService } from 'app/@core/services/apis/teaching_assignment.service';
import { TeacherService } from 'app/@core/services/apis/teacher.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  putTeaching: FormGroup;
  ListId: ITeaching;
  maASM: number;
  teachers: any[] = [];
  semesters: any[] = [];
  subjects: any[] = [];
  school_years: any[] = [];
  classes: any[] = [];

  constructor(
    private teachingService: Teaching_assignmentService,
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService,
  ) {
    this.maASM = this.route.snapshot.params['maASM'];

    this.putTeaching = new FormGroup({
      maGV: new FormControl(''),
      maMon: new FormControl(''),
      maLop: new FormControl(''),
      ca_day: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
      thu: new FormControl(''),
      maNH: new FormControl(''),
      maHK: new FormControl(''),
    });
  }

  ngOnInit() {
    this.editTeacher(this.maASM);
    this.getTeachers();
    this.getSemesters();
    this.getSubjects();
    this.getSchoolYears();
    this.getClasses();
  }

  editTeacher(maASM: number) {
    this.teachingService.getTeaching_ASMById(maASM).subscribe(res => {
      this.ListId = res.data;
      this.putTeaching.patchValue(this.ListId);
    });
  }

  saveTeaching() {
    if (this.putTeaching.valid) {
      this.teachingService.putTeaching(this.maASM, this.putTeaching.value).subscribe(res => {
        console.log(res);
        this.router.navigate(['/pages/assignment/list']);
      });
    }
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
    this.teachingService.getSemester().subscribe(
      (res) => {
        this.semesters = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getSubjects() {
    this.teachingService.getSubject().subscribe(
      (res) => {
        this.subjects = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getSchoolYears() {
    this.teachingService.getSchoolYear().subscribe(
      (res) => {
        this.school_years = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getClasses() {
    this.teachingService.getClasse().subscribe(
      (res) => {
        this.classes = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  statuses: NbComponentStatus[] = ['success'];
  shapes: NbComponentShape[] = ['rectangle', 'semi-round', 'round'];
  sizes: NbComponentSize[] = ['tiny', 'small', 'medium', 'large', 'giant'];
}