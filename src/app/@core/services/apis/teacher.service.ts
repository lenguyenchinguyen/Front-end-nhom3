import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ITeacher {
  maGV: number;
  ten_GV: string;
  gioi_tinh: string;
  email: string;
  trinh_do: string;
  mat_khau: string;
  dien_thoai: string;
}

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  API_URL = 'http://127.0.0.1:3300/api/teachers';
  constructor(private http: HttpClient) {}

  getAllTeacher(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  addTeacher(add: ITeacher): Observable<any> {
    return this.http.post(this.API_URL, add);
  }

  postTeacher(teacher: ITeacher): Observable<any> {
    return this.http.post(this.API_URL, teacher);
  }

  getTeacherById(maGV: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${maGV}`);
  }

  putTeacher(maGV: number, teacher: ITeacher): Observable<any> {
    return this.http.put(`${this.API_URL}/${maGV}`, teacher);
  }

  deleteOneTeacher(maGV: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${maGV}`);
  }
}
