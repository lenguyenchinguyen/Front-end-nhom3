import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  subjecttable = [
    { id: 1, name: 'Ngữ văn', teacher: "cô Lê Kim Thoa" },
    { id: 2, name: 'Toán', teacher: "thầy Cao Văn Xuyên"},
    { id: 3, name: 'Anh văn',teacher: "cô Hồ Thanh Dung" },
    { id: 4, name: 'Vật lý',teacher: "cô Nguyễn Trần Thanh Quang" },
    { id: 5, name: 'Hóa học',teacher: "cô Dương Văn Tuấn" },
    { id: 6, name: 'Sinh học',teacher: "cô Ngô Thị Mỹ Linh" },
    { id: 7, name: 'Lịch sử',teacher: "cô Nguyễn Thanh Liêm" },
    { id: 8, name: 'Địa Lý',teacher: "cô Trần Văn Thái" },

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
      teacher: {
        title: 'teacher',
        type: 'string',
      },
     
    },
  };
}
