import { Component, OnInit } from '@angular/core';

import { BlocksService } from 'app/@core/services/apis/blocks.service';

export interface Iblocks {
  maKhoi: number,
  ten_khoi: string
}

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit{
  
  listBlock! : Iblocks[]
  constructor(
    private blocks: BlocksService
  ){}
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
   
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      classname: {
        title: 'Class Name',
        type: 'string',
      }
    },
  };
  
  ngOnInit(): void { 
    this.getAll()
  }


  getAll(){
    this.blocks.getAllBlocks().subscribe(res=>{
      this.listBlock = res.data;
      console.log(res.data);
    }, error=>{
      console.log(error);
    })
  }

}
