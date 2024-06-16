import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { NbComponentShape, NbComponentSize, NbComponentStatus,NbDialogService,NbToastrService } from '@nebular/theme';
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
  Listpage! : IParent[];

  lastPage: number = 0;
  currentPage : number = 0;
  apiurl = `http://127.0.0.1:3300/api/parents`;
  constructor(
    private parent: ParentService,
     private student:StudentService,
     private dialogService: NbDialogService,
     private nbToastrService: NbToastrService,
  ){ }
  List: IParent;
  listStudent: IStudent;
  ngOnInit(): void {
    this.getAll()
    this.getStudent()
  }
  getAll(){
    this.parent.getParent().subscribe(res=>{
      this.Listpage = res.data;
      this.currentPage = res.current_page;
      this.lastPage = res.last_page;
      console.log(res);
      this.List = res.data
    })
  }

  getStudent() {
    this.student.getStudent().subscribe(res =>{
      console.log(res);
      this.listStudent = res.data
    })
  }

  delete(maPH: number) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.parent.deleteParent(maPH).subscribe({
            next: res => {
              this.nbToastrService.show('Parent successfully deleted!', 'Success', { status: 'success' });
              this.getAll();
            },
            error: err => {
              this.nbToastrService.show('Delete failed. Please try again.', 'Error', { status: 'danger' });
            }
          });
        }
      });
  }

  getPage(res:any) {
    console.log(res);
    this.Listpage = res
  }



  // deleteParent(maPH:number){
  //   if(confirm('Bạn có chắc chắn mún xóa không')) {
  //     this.dele.deleteParent(maPH)
  //   }
  // }



  // deleteParent(maHS:number){
  //   if(confirm('Bạn có chắc chắn mún xóa không')) {
  //     this.dele.deleteParent(maHS)
  //   }
  // }

  
  statuses: NbComponentStatus[] = ['info'];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
