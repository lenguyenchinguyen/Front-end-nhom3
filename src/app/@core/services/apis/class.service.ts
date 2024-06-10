import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IClasses {
  maLop: number,
  maKhoi: number,
  ten_lop: string,
  maGV: number
}

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor(private http: HttpClient) {}

  API_URL = `http://127.0.0.1:3300/api/class/`;

  getAllClass(): Observable<any> {
    return this.http.get(this.API_URL)
  }

  postClass(data: IClasses): Observable<any> {
    return this.http.post(this.API_URL,
      {
        maKhoi: data.maKhoi,
        ten_lop: data.ten_lop,
        maGV: data.maGV
      }
    );
  }

  deleteClass(id:number){
    return this.http.delete(this.API_URL+id)
  }

  getClassById(id: number): Observable<any> {
    return this.http.get(
      this.API_URL + id
    );
  }

  updateClass(id: number, data: IClasses){
    return this.http.put(this.API_URL+id, data);
  }

  getAllGV(): Observable<any> {
    return this.http.get('http://127.0.0.1:3300/api/teachers/')
  }



}
