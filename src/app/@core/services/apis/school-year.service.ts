import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ISchoolYear } from 'app/@core/interfaces/school-year.interface';


@Injectable({
    providedIn: 'root'
})
export class SChoolYearService {
    API_URL='http://127.0.0.1:3300/api/'
    constructor(private http: HttpClient) {}
    
    getSchoolYear(): Observable<any> {
        return this.http.get(this.API_URL + 'school-years')
    }

    getSchoolYearById(maNH: number): Observable<any> {
        return this.http.get(this.API_URL + 'school-years/' + maNH)
    }

    postSchoolYear(object: ISchoolYear): Observable<ISchoolYear> {
        console.log(object.nam_hoc);
        return this.http.post<ISchoolYear>(this.API_URL + 'school-years', {
            nam_hoc: object.nam_hoc  
        })
    }

    putSchoolYear(maNH: number, object: ISchoolYear): Observable<ISchoolYear> {
        return this.http.put<ISchoolYear>(this.API_URL + 'school-years/' + maNH, {
            nam_hoc: object.nam_hoc
        })
    }
    deleteSchoolYear(maNH: number): Observable<any>{
        return this.http.delete(this.API_URL + 'school-years/' + maNH)
    }
}