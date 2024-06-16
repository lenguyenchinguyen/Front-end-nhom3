import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISubject } from 'app/@core/interfaces/subject.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {

    constructor(
        private http: HttpClient,
    ) { }

    API_URL = 'http://127.0.0.1:3300/api/subject/'

    getAllSubject(): Observable<any> {
        return this.http.get(this.API_URL);
    }

    postSubject(sub: ISubject): Observable<any> {
        return this.http.post(this.API_URL, {
            ten_mon: sub.ten_mon,
        });
    }
    deleteSubject(maMon: number): Observable<any> {
        return this.http.delete(this.API_URL + maMon);
    }
    getSubjectBymaMon(maMon: number): Observable<any> {
        return this.http.get(this.API_URL + maMon);
    }
    putSubject(maMon: number, sub: ISubject): Observable<any> {
        return this.http.put(this.API_URL + maMon, {
            ten_mon: sub.ten_mon,
        });
    }
}


