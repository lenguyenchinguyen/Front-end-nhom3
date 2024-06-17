import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ITranscript } from 'app/@core/interfaces/transcript.interface';
import { TranscriptService } from 'app/@core/services/apis/transcript.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  lastPage: number = 0;
  currentPage: number = 0
  //nextPage: number =0;
  //previousPage: number =0;
  apiUrl = "http://127.0.0.1:3300/api/transcripts"
  constructor(private transcript: TranscriptService, private dialogService: NbDialogService,
    private toastrService: NbToastrService,) { }
  listBd: ITranscript[]
  student: ITranscript
  year: ITranscript
  subject: ITranscript
  semester: ITranscript
  selectmaHS: number;
  filteredListBd: ITranscript[];


  ngOnInit(): void {
    this.getAllBD()
    this.getAllSemester()
    this.getAllStudent()
    this.getAllSubject()
    this.getAllYear()
  }

  getAllBD() {
    this.transcript.getTranscript().subscribe(res => {

      this.currentPage = res.current_page;
      this.lastPage = res.last_page;
      console.log(res.data);
      this.filteredListBd = res.data

    })
  }
  getPage(res: any) {
    console.log(res);
    this.filteredListBd = res
  }
  getAllSubject() {
    this.transcript.getSubject().subscribe(res => {
      this.subject = res.data
    })
  }

  getAllYear() {
    this.transcript.getYear().subscribe(res => {
      this.year = res.data
    })
  }

  getAllSemester() {
    this.transcript.getSemester().subscribe(res => {
      this.semester = res.data
    })
  }

  getAllStudent() {
    this.transcript.getStudent().subscribe(res => {
      this.student = res.data
    })
  }

  onFilterChange(maHS: number) {
    this.selectmaHS = maHS;
    if (maHS === null) {
      this.filteredListBd = this.listBd;
    } else {
      this.filteredListBd = this.listBd.filter(bd => bd.maHS === maHS);
    }
  }

  // 
  deleteTranscript(maMon: number) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.transcript.deleteTranscript(maMon).subscribe({
            next: res => {
              this.toastrService.show('Transcript has been deleted successfully !', 'Success', { status: 'success' });
              this.getAllBD();
            },
            error: err => {
              this.toastrService.show('Delete failed. Please try again.', 'Error', { status: 'danger' });
            }
          });
        }
      });
  }
}
