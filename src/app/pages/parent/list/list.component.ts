import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
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
      Name: {
        title: 'Name',
        type: 'string',
      },
      Date_of_birth: {
        title: 'Date_of_birth',
        type: 'number',
      },
      Adrress: {
        title: 'Adrress',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      gender: {
        title: 'Gender',
        type: 'string',
      },
      SDT: {
        title: 'SDT',
        type: 'number',
      },
    },
  };

  data = [
    { id: 1,Name: 'Võ Hiền Lương',Date_of_birth: 2622004,Adrress: 'Bạc Liêu', email: 'luongvhpc05477@fpt.edu.vn',gender:'NAM',SDT:949338472},
    { id: 2,Name: 'Võ Hiền Lương',Date_of_birth: 2622004,Adrress: 'Bạc Liêu', email: 'luongvhpc05477@fpt.edu.vn',gender: 'NAM',SDT:359235876 },
  ];


  statuses: NbComponentStatus[] = ['info'];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
