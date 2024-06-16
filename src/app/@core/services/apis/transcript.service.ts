import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ITranscript } from 'app/@core/interfaces/transcript.interface';


@Injectable({
    providedIn: 'root'
})
export class TranscriptService {
    API_URL='http://127.0.0.1:3300/api/'
    constructor(private http: HttpClient) {}
    getTranscript(): Observable<any> {
        return this.http.get(this.API_URL + 'transcripts')
    }

    getTranscriptById(maBD: number): Observable<any> {
        return this.http.get(this.API_URL + 'transcripts/' + maBD)
    }

    postTranscript(obj: ITranscript): Observable<ITranscript> {
        return this.http.post<ITranscript>(this.API_URL + 'transcripts', {
            maHS: obj.maHS,
            maMon: obj.maMon,
            maNH: obj.maNH,
            maHK: obj.maHK,
            diem: Number(obj.diem)
        })
    }

    putTranscript(maBD: number, obj: ITranscript): Observable<ITranscript> {
        return this.http.put<ITranscript>(this.API_URL + 'transcripts/' + maBD, {
            maHS: obj.maHS,
            maMon: obj.maMon,
            maNH: obj.maNH,
            maHK: obj.maHK,
            diem: Number(obj.diem)
        })
    }

    deleteTranscript(maBD: number): Observable<any>{
      return this.http.delete(this.API_URL + 'transcripts/' + maBD)
    }

    getStudent(): Observable<any> {
        return this.http.get(this.API_URL + 'students')
    }

    getSubject(): Observable<any> {
        return this.http.get(this.API_URL + 'subject')
    }

    getYear(): Observable<any> {
        return this.http.get(this.API_URL + 'school-years')
    }

    getSemester(): Observable<any> {
        return this.http.get(this.API_URL + 'semesters')
    }

    // getSemesterById(maHK: number): Observable<any> {
    //     return this.http.get(this.API_URL + 'semesters/' + maHK)
    // }

    // postSemester(object: ISemester): Observable<ISemester> {
    //     return this.http.post<ISemester>(this.API_URL + 'semesters', {
    //         hoc_ki: object.hoc_ki,
    //         maNH: object.maNH
    //     })
    // }

    // putSemester(maHK: number, object: ISemester): Observable<ISemester> {
    //     return this.http.put<ISemester>(this.API_URL + 'semesters/' + maHK, {
    //         hoc_ki: object.hoc_ki,
    //         maNH: object.maNH
    //     })
    // }
    // deleteSemester(maHK: number): Observable<any>{
    //     return this.http.delete(this.API_URL + 'semesters/' + maHK)
    // }
}
