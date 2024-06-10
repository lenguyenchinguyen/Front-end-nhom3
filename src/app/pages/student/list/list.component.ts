import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { StudentService } from 'app/@core/services/apis/student.service';
import { IStudent } from 'app/@core/interfaces/student.interface';
import { DeleteComponent } from '../delete/delete.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private student: StudentService , private dele:DeleteComponent){ }
  List: IStudent;
  listClass: IStudent;
  ngOnInit(): void {
    this.getAll()
    this.getClass()
  }
  getAll(){
    this.student.getStudent().subscribe(p=>{
      console.log(p);
      this.List = p.data
    })
  }

  deleteStudent(maHS:number){
    if(confirm('Bạn có chắc chắn mún xóa không')) {
      this.dele.deleteStudent(maHS)
    }
  }

  getClass() {
    this.student.getClass().subscribe(res => {
      console.log(res);
      this.listClass = res.data;
    })
  }



  statuses: NbComponentStatus[] = ['info'];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
