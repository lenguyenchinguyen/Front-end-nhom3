import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';



@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit{
  check:number = 0;

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
  
  ngOnInit(): void { }

  grade10(){
    this.check = 1
  }
  grade11(){
    this.check = 2
  }
  grade12(){
    this.check = 3
  }

  class12 = [
    { id: 1, class: '12A1' },
    { id: 2, class: '12A2'},
    { id: 3, class: '12A3'},
    { id: 4, class: '12A4'},
  ]

  class11 = [
    { id: 1, class: '11A1' },
    { id: 2, class: '11A2'},
    { id: 3, class: '11A3'},
    { id: 4, class: '11A4'},
  ]

  class10 = [
    { id: 1, class: '10A1' },
    { id: 2, class: '10A2'},
    { id: 3, class: '10A3'},
    { id: 4, class: '10A4'},
  ];

}
