import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ISemester } from 'app/@core/interfaces/semester.interface';


@Injectable({
    providedIn: 'root'
})
export class SemesterService {
    API_URL='http://127.0.0.1:3300/api/'
    constructor(private http: HttpClient) {}
    getSemester(): Observable<any> {
        return this.http.get(this.API_URL + 'semesters')
    }

    getSemesterById(maHK: number): Observable<any> {
        return this.http.get(this.API_URL + 'semesters/' + maHK)
    }

    postSemester(object: ISemester): Observable<ISemester> {
        return this.http.post<ISemester>(this.API_URL + 'semesters', {
            hoc_ki: object.hoc_ki,
            maNH: object.maNH
        })
    }

    putSemester(maHK: number, object: ISemester): Observable<ISemester> {
        return this.http.put<ISemester>(this.API_URL + 'semesters/' + maHK, {
            hoc_ki: object.hoc_ki,
            maNH: object.maNH
        })
    }
    deleteSemester(maHK: number): Observable<any>{
        return this.http.delete(this.API_URL + 'semesters/' + maHK)
    }
}