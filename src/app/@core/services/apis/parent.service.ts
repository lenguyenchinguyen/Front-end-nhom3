import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { IParent } from 'app/@core/interfaces/parent.interface';


@Injectable({
  providedIn: 'root',
})
export class ParentService {
  API_URL = 'http://127.0.0.1:3300/api/parents/';
  constructor(public http: HttpClient) { }
  getParent(): Observable<any> {
    return this.http.get<any>(this.API_URL)
  }
  // getstudentById(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.API_URL}/${id}`)
  // }
  addParent(parent: IParent): Observable<IParent> {
    return this.http.post<IParent>(this.API_URL, {
        ho_ten : parent.ho_ten,
        gioi_tinh: parent.gioi_tinh,
        ngay_sinh: parent.ngay_sinh,
        dia_chi : parent.dia_chi,
        email: parent.email,
        maHS : parent.maHS,
        dien_thoai: parent.dien_thoai

    });
  }

  getUpdateById(id:number):Observable<any>{
    return this.http.get(this.API_URL + id)
  }

  updateParent(maPH:number,parent: IParent): Observable<IParent> {
    return this.http.put<IParent>(this.API_URL + maPH, {
        ho_ten : parent.ho_ten,
        gioi_tinh: parent.gioi_tinh,
        ngay_sinh: parent.ngay_sinh,
        dia_chi : parent.dia_chi,
        emailParent: parent.email,
        maHS : parent.maHS,
        dien_thoai: parent.dien_thoai

    });
  }
  deleteParent(maPH: number): Observable<any> {
    return this.http.delete<any>(this.API_URL+ maPH);
  }
}