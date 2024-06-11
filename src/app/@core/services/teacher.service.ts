import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

export interface ITeacher {
  id: number;
  name: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  class: string;
  address: string;
  phone: string;
  educationLevel: string;
  subject: string;
}

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  API_URL = 'http://127.0.0.1:2000/api/teachers';
  constructor(public http: HttpClient) { }
  getTeachers(): Observable<ITeacher[]> {
    return this.http.get<{ teacher: ITeacher[] }>(`${this.API_URL}`).pipe(
      map((response) => response.teacher)
    );
  }
  // getTeacherById(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.API_URL}/${id}`)
  // }
  addTeacher(teacher: ITeacher): Observable<ITeacher> {
    return this.http.post<ITeacher>(`${this.API_URL}`, teacher);
  }
  deleteTeacher(id: ITeacher): Observable<ITeacher> {
    return this.http.delete<ITeacher>(`${this.API_URL}/${id}`);
  }
}