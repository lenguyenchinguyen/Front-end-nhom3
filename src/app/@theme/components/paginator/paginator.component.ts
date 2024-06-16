import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() apiUrl!:string;
  @Input() current_page!:number;
  @Input() last_page!:number;

  @Output() dataList: EventEmitter<any> = new EventEmitter();
  @Output() STT: EventEmitter<any> = new EventEmitter();


  indexPage= 1;

  hasPreviousPage: boolean= true;
  hasNextPage: boolean = false;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }


  nexPages(){
    this.indexPage += 1
    this.current_page = this.indexPage
    if(this.current_page > this.last_page){
      this.indexPage = 1;
      this.current_page = this.indexPage
    }
    this.getData() 
  }

  previousPages(){
    this.indexPage -= 1
    this.current_page = this.indexPage
    if(this.current_page < 1){
      this.indexPage = this.last_page;
      this.current_page = this.last_page
    }
    this.getData() 
  }

  goFirtPage(){
    this.indexPage = 1;
    this.current_page = this.indexPage
    this.hasPreviousPage = true;
    this.hasNextPage = false;
    this.getData();
  }

  goLastPage(){
    this.indexPage = this.last_page;
    this.current_page = this.indexPage
    this.hasPreviousPage = false;
    this.hasNextPage = true;
    this.getData();
  }

  getPaginator(): Observable<any>{
    return this.http.get(`${this.apiUrl}?page=${this.indexPage}`)
  }

  getData(){
    this.getPaginator().subscribe(res=>{
      this.dataList.emit(res.data)
      this.STT.emit((res.current_page-1)*5)
    })
  }

}
