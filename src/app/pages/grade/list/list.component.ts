import { Component, OnInit} from '@angular/core';
import { ClassService } from 'app/@core/services/apis/class.service';
import { BlocksService } from 'app/@core/services/apis/blocks.service';
import { Iblocks } from 'app/@core/interfaces/blocks.interface';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  dataB: Iblocks[]
  constructor(
    private classes: ClassService,
    private blocks: BlocksService,
    private dialogService: NbDialogService,
    private nbToastrService: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.getAllBlocks()
  }

  getAllBlocks(){
    this.blocks.getAllBlocks().subscribe(res=>{
        this.dataB = res.data
        console.log(this.dataB);
    })
  }

  delete(id: number) {
    this.dialogService.open(DeleteComponent)
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.blocks.deleteBlocks(id).subscribe({
            next: res => {
              this.nbToastrService.show('Blocks successfully deleted!', 'Success', { status: 'success' });
              this.getAllBlocks();
            },
            error: err => {
              this.nbToastrService.show('Delete failed. Please try again.', 'Error', { status: 'danger' });
            }
          });
        }
      });
  }
}
