import { Component, OnInit } from '@angular/core';
import { ISubject } from 'app/@core/interfaces/subject.interface';
import { SubjectService } from 'app/@core/services/apis/subject.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listData: any;
  lastPage: number = 0;
  currentPage: number = 0
  //nextPage: number =0;
  //previousPage: number =0;
  apiUrl = "http://127.0.0.1:3300/api/subject"
  constructor(
    private sub: SubjectService,

  ) { }
  LitsSub!: ISubject

  ngOnInit(): void {
    this.getSubject();
  }

  getSubject() {
    this.sub.getAllSubject().subscribe(res => {
      this.LitsSub = res.data
      this.currentPage = res.current_page;
      this.lastPage = res.last_page;
      console.log(res);
    }, error => {
      console.error(error);
    });
  }
  getPage(res: any){
    console.log(res);
    this.LitsSub = res
  }

  deleteSubject(maMon: number) {
    const confirmDelete = confirm("Do you want delete this subject?");
    if (confirmDelete) {
      this.sub.deleteSubject(maMon).subscribe(res => {
        console.log(res);
        this.getSubject();
      });
    }
  }
}
