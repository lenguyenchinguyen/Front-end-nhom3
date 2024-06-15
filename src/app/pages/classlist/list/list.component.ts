import { Component, OnInit} from '@angular/core';
import { ClassService } from 'app/@core/services/apis/class.service';
import { BlocksService } from 'app/@core/services/apis/blocks.service';
import { IClasses } from 'app/@core/interfaces/class.interface';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { DeleteComponent } from '../delete/delete.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  gv: IClasses[]
  data: IClasses[]
  bl: IClasses[]
  dataClass!:IClasses[]
  listClass!: IClasses[];
  last_page: number = 0;
  current_page:number =0;
  STT:number = 0
  apiurl = `http://127.0.0.1:3300/api/class`

  constructor(
    private classes: ClassService,
    private blocks: BlocksService,
    private dialogService: NbDialogService,
    private nbToastrService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.getAllClass()
    this.getGV()
    this.getBlocks()
  }

  getAllClass() {
    this.classes.getAllClass().subscribe(
      (res) => {
        this.listClass = res.data;
        this.current_page = res.current_page
        this.last_page = res.last_page
        console.log(res.data, this.last_page, this.current_page);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getGV(){
    this.classes.getAllGV().subscribe(res=>{
        this.gv = res.data
        console.log(res.data);
    })
  }

  getBlocks(){
    this.blocks.getAllBlocks().subscribe(res=>{
      this.bl = res.data 
      console.log(res.data);
      
    })
  }

  delete(id: number) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.classes.deleteClass(id).subscribe({
            next: res => {
              this.nbToastrService.show('Class successfully deleted!', 'Success', { status: 'success' });
              this.getAllClass();
            },
            error: err => {
              this.nbToastrService.show('Delete failed. Please try again.', 'Error', { status: 'danger' });
            }
          });
        }
      });
  }
  getPage(value:any) {
    this.listClass = value;
  }
  getStt(stt:any){
    this.STT = stt
    console.log(this.STT);
    
  }
}
