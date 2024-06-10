import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITeaching } from 'app/pages/assignment/list/list.component';

export interface Teaching {
  maASM: number;
  maGV: number;
  maMon: number;
  maLop: number;
  ca_day: number;
  thu: string;
  maNH: number;
  maHK: number;
}

@Injectable({
  providedIn: 'root',
})
export class Teaching_assignmentService {
  API_URL = 'http://127.0.0.1:3300/api';

  constructor(private http: HttpClient) {}

  getTeaching(): Observable<any> {
    return this.http.get(`${this.API_URL}/teachers-asm`);
  }

  getAllTeacher(): Observable<any> {
    return this.http.get(`${this.API_URL}/teachers`);
  }

  getSemester(): Observable<any> {
    return this.http.get(`${this.API_URL}/semesters`);
  }

  getSubject(): Observable<any> {
    return this.http.get(`${this.API_URL}/subject`);
  }

  getSchoolYear(): Observable<any> {
    return this.http.get(`${this.API_URL}/school-years`);
  }

  getClasse(): Observable<any> {
    return this.http.get(`${this.API_URL}/class`);
  }

  getTeaching_ASMById(maASM: number): Observable<any> {
    return this.http.get(`${this.API_URL}/teachers-asm/${maASM}`);
  }

  addTeachingAssignment(teaching: ITeaching): Observable<any> {
    return this.http.post(`${this.API_URL}/teachers-asm`, teaching);
  }

  putTeaching(maASM: number, teaching: Teaching): Observable<any> {
    return this.http.put(`${this.API_URL}/teachers-asm/${maASM}`, teaching);
  }
}
