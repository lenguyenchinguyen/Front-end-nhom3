import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ISubject } from 'app/@core/interfaces/subject.interface';
import { SubjectService } from 'app/@core/services/apis/subject.service';
import { DeleteComponent } from '../delete/delete.component';

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
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
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

  // deleteSubject(maMon: number) {
  //   const confirmDelete = confirm("Do you want delete this subject?");
  //   if (confirmDelete) {
  //     this.sub.deleteSubject(maMon).subscribe(res => {
  //       console.log(res);
  //       this.getSubject();
  //     });
  //   }
  // }
  deleteSubject(maMon: number) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.sub.deleteSubject(maMon).subscribe({
            next: res => {
              this.toastrService.show('Subject has been deleted successfully!', 'Success', { status: 'success' });
              this.getSubject(); 
            },
            error: err => {
              this.toastrService.show('Delete failed. Please try again.', 'Error', { status: 'danger' });
            }
          });
        }
      });
    }
}
