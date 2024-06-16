import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iblocks } from 'app/@core/interfaces/blocks.interface';

@Injectable({
  providedIn: 'root',
})
export class BlocksService {
  constructor(private http: HttpClient) {}

  API_URL = `http://127.0.0.1:3300/api/blocks/`;

  getAllBlocks(): Observable<any> {
    return this.http.get(this.API_URL)
  }

  getOneBlocks(id: number): Observable<any> {
    return this.http.get(
      this.API_URL + id
    );
  }

  postBlocks(data: Iblocks): Observable<any> {
    return this.http.post(this.API_URL,
      {
        ten_khoi: data.ten_khoi,
      }
    );
  }

  deleteBlocks(id:number){
    return this.http.delete(this.API_URL+id)
  }

  updateBlocks(id: number, data: Iblocks){
    return this.http.put(this.API_URL+id, data);
  }
}
