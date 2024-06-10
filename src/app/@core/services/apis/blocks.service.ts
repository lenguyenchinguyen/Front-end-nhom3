import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Iblocks {
    maKhoi: number,
    ten_khoi: string
}

@Injectable({
  providedIn: 'root',
})
export class BlocksService {
  constructor(private http: HttpClient) {}

  API_URL = `http://127.0.0.1:4500/api/blocks/`;

  getAllBlocks(): Observable<any> {
    return this.http.get(this.API_URL)
  }

  getOneBlocks(id: number): Observable<any> {
    return this.http.get(
      this.API_URL + id
    );
  }

  // postBlocks(data: Iblocks): Observable<any> {
  //   return this.http.post('https://knowledgehub.demopolyct.online/api/unit',
  //     {
  //       ten_khoi: data.ten_khoi,
  //     }
  //   );
  // }

  // deleteBlocks(id:number){
  //   return this.http.delete('https://knowledgehub.demopolyct.online/api/unit/'+id)
  // }

  // updateUnit(id: number, data: Iblocks){
  //   return this.http.put('https://knowledgehub.demopolyct.online/api/unit/'+id, data);
  // }
}
