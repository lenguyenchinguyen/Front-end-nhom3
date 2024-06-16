import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
})
export class DeleteComponent {
  constructor(protected ref: NbDialogRef<DeleteComponent>) { }

  confirm() {
    this.ref.close(true);
  }

  cancel() {
    this.ref.close(false);
  }
}