import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { NbComponentShape, NbComponentSize, NbComponentStatus,NbToastrService } from '@nebular/theme';
import { StudentService } from 'app/@core/services/apis/student.service';
import { IStudent } from 'app/@core/interfaces/student.interface';
import { DeleteComponent } from '../delete/delete.component';
import { NbDialogService } from '@nebular/theme';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  Listpage! : IStudent[];

  lastPage: number = 0;
  currentPage : number = 0;
  stt : number = 0;
  apiurl = `http://127.0.0.1:3300/api/students`;
 
  constructor(
    private student: StudentService ,
    private dialogService: NbDialogService,
    private nbToastrService: NbToastrService,
    
  ){ }

  List: IStudent;
  listClass: IStudent;
  ngOnInit(): void {
    this.getAll()
    this.getClass()
  }
  getAll(){
    this.student.getStudent().subscribe(res=>{
      this.Listpage = res.data;
      this.currentPage = res.current_page;
      this.lastPage = res.last_page;
      console.log(res);
      this.List = res.data
    })
  }



  getClass() {
    this.student.getClass().subscribe(res => {
      console.log(res);
      this.listClass = res.data;
    })
  }

  delete(maHS: number) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.student.deleteStudent(maHS).subscribe({
            next: res => {
              this.nbToastrService.show('Student successfully deleted!', 'Success', { status: 'success' });
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

  getStt(res:any) {
    this.stt = res
  }


  statuses: NbComponentStatus[] = ['info'];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
