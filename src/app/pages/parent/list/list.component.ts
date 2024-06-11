import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { IParent } from 'app/@core/interfaces/parent.interface';
import { ParentService } from 'app/@core/services/apis/parent.service';
import { StudentService } from 'app/@core/services/apis/student.service';
import { IStudent } from 'app/@core/interfaces/student.interface';
import { DeleteComponent } from '../delete/delete.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor(private parent: ParentService, private student:StudentService,private dele:DeleteComponent ){ }
  List: IParent;
  listStudent: IStudent;
  ngOnInit(): void {
    this.getAll()
    this.getStudent()
  }
  getAll(){
    this.parent.getParent().subscribe(p=>{
      console.log(p);
      this.List = p.data
    })
  }

  getStudent() {
    this.student.getStudent().subscribe(res =>{
      console.log(res);
      this.listStudent = res.data
    })
  }

  deleteParent(maPH:number){
    if(confirm('Bạn có chắc chắn mún xóa không')) {
      this.dele.deleteParent(maPH)
    }
  }



  // deleteParent(maHS:number){
  //   if(confirm('Bạn có chắc chắn mún xóa không')) {
  //     this.dele.deleteParent(maHS)
  //   }
  // }

  statuses: NbComponentStatus[] = ['info'];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
