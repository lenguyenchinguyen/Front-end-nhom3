import { Component } from '@angular/core';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  pointstable = [
    { id: 1, name: 'Lê Nguyễn Chí Nguyên', nguvan: 8, toan: 10, anhvan: 8, vatly: 10, hoa: 10, sinh: 10, su: 7, dia: 8 },
    { id: 2, name: 'Lê Hoàng Phước', nguvan: 8, toan: 9, anhvan: 8, vatly: 10, hoa: 10, sinh: 9, su: 7, dia: 10 },
    { id: 3, name: 'Võ Hiền Lương', nguvan: 8, toan: 9, anhvan: 8, vatly: 9, hoa: 10, sinh: 10, su: 10, dia: 8 },

  ];

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
      name: {
        title: 'Name',
        type: 'string',
      },
      nguvan: {
        title: 'Nguvan',
        type: 'number',
      },
      toan: {
        title: 'Toan',
        type: 'number',
      },
      anhvan: {
        title: 'Anhvan',
        type: 'number',
      },
      vatly: {
        title: 'Vatly',
        type: 'number',
      },
      hoa: {
        title: 'Hoa',
        type: 'number',
      },
      sinh: {
        title: 'Sinh',
        type: 'number',
      },
      su: {
        title: 'Su',
        type: 'number',
      },
      dia: {
        title: 'Dia',
        type: 'number',
      },
    },
  };
}