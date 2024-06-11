import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { IStudent } from 'app/@core/interfaces/student.interface';



@Injectable({
  providedIn: 'root',
})
export class StudentService {
  API_URL = 'http://127.0.0.1:3300/api/students/';
  constructor(public http: HttpClient) { }
  getStudent(): Observable<any> {
    return this.http.get<any>(this.API_URL)
  }
  // getstudentById(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.API_URL}/${id}`)
  // }
  addStudent(student: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(this.API_URL, {
        ho_ten : student.ho_ten,
        gioi_tinh: student.gioi_tinh,
        ngay_sinh: student.ngay_sinh,
        dia_chi : student.dia_chi,
        email: student.email,
        maLop : student.maLop
    });
  }

  getUpdateById(id:number):Observable<any>{
    return this.http.get(this.API_URL +id)
  }

  getClass():Observable<any> {
    return this.http.get('http://127.0.0.1:3300/api/class')
  }

  updateStudent(maHS:number,student: IStudent): Observable<IStudent> {
    return this.http.put<IStudent>(this.API_URL + maHS, {
      ho_ten : student.ho_ten,
      gioi_tinh: student.gioi_tinh,
      ngay_sinh: student.ngay_sinh,
      dia_chi : student.dia_chi,
      email: student.email,
      maLop : student.maLop
    });
  }
  deleteStudent(maHS: number): Observable<any> {
    return this.http.delete<any>(this.API_URL+ maHS);
  }
}