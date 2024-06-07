import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import {
  NbComponentShape,
  NbComponentSize,
  NbComponentStatus,
} from '@nebular/theme';
import { ClassService } from 'app/@core/services/apis/class.service';
import { BlocksService } from 'app/@core/services/apis/blocks.service';

export interface IClasses {
  maLop: number;
  maKhoi: number;
  ten_lop: string;
  maGV: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  gv: IClasses[]
  data: IClasses[]
  bl: IClasses[]

  constructor(
    private classes: ClassService,
    private blocks: BlocksService
  ) {}

  ngOnInit(): void {
    this.getAllClass()
    this.getGV()
    this.getBlocks()
  }

  getAllClass() {
    this.classes.getAllClass().subscribe(
      (res) => {
        this.data = res.data;
        console.log(res.data);
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

}
