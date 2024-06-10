import { Component, OnInit } from '@angular/core';
import { ISubect } from 'app/@core/interfaces/subject.interface';
import { SubjectService } from 'app/@core/services/apis/subject.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private sub: SubjectService,

  ) { }
  LitsSub!: ISubect

  ngOnInit(): void {
    this.getSubject();
  }

  getSubject() {
    this.sub.getAllSubject().subscribe(res => {
      this.LitsSub = res.data
      console.log(res);
    }, error => {
      console.error(error);
    });
  }

  deleteSubject(maMon: number) {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa môn học này?");
    if (confirmDelete) {
      this.sub.deleteSubject(maMon).subscribe(res => {
        console.log(res);
        this.getSubject();
      });
    }
  }
}
