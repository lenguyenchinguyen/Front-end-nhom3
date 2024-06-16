import { Component, OnInit } from '@angular/core';

import { Teaching_assignmentService } from 'app/@core/services/apis/teaching_assignment.service';
import { TeacherService } from 'app/@core/services/apis/teacher.service';
import { ITeacher } from 'app/@core/services/apis/teacher.service';

export interface ITeaching {
  maASM: number;
  maGV: number; 
  maMon: number;
  maLop: number;
  ca_day: number; 
  thu: string;
  maNH: number;
  maHK: number;
}

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  teaching: ITeaching[] = [];
  teachers: ITeacher[] = [];
  semesters: any[] = [];
  subjects: any[] = [];
  school_years: any[] = [];
  classes: any[] = [];
  private _listFilter: string = '';
  allTeaching: ITeaching[] = [];
  Listpage! : ITeaching[];
  lastPage: number = 0;
  currentPage : number = 0;
  apiurl2 = `http://127.0.0.1:3300/api/teachers-asm`;

  constructor(
    private teacherService: TeacherService,
    private teaching_assignmentService: Teaching_assignmentService
  ) {}

  ngOnInit(): void {
    this.getTeaching();
    this.getTeachers();
    this.getSemesters();
    this.getSubjects();
    this.getSchoolYears();
    this.getClass();
  }
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.teaching = this.listFilter ? this.performFilter(this.listFilter) : this.allTeaching;
  }
  performFilter(filterBy: string): ITeaching[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.teaching.filter((teaching: ITeaching) => {
      const teacher = this.teachers.find(t => t.maGV === teaching.maGV);
      return teacher && teacher.ten_GV.toLocaleLowerCase().includes(filterBy);
    });
  }

  getTeaching() {
    this.teaching_assignmentService.getTeaching().subscribe(
      (res) => {
        this.teaching = res.data;
        this.allTeaching = res.data;
        this.Listpage = res.data;
        this.currentPage = res.current_page;
        this.lastPage = res.last_page;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTeachers() {
    this.teacherService.getAllTeacher().subscribe(
      (res) => {
        this.teachers = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getSemesters() {
    this.teaching_assignmentService.getSemester().subscribe(
      (res) => {
        this.semesters = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getSubjects(){
    this.teaching_assignmentService.getSubject().subscribe(
      (res) => {
        this.subjects = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getSchoolYears() {
    this.teaching_assignmentService.getSchoolYear().subscribe(
      (res) => {
        this.school_years = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getClass() {
    this.teaching_assignmentService.getClasse().subscribe(
      (res) => {
        this.classes = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getPage(res:any) {
    console.log(res);
    this.Listpage = res
  }
}