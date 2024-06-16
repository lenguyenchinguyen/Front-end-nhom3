// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { StudentService } from 'app/@core/services/apis/student.service';
// import { NbDialogRef } from '@nebular/theme';
// @Component({
//   selector: 'app-delete',
//   template: `<router-outlet></router-outlet>`,
// })
// export class DeleteComponent implements OnInit {

//   title: string;
//   message: string;

//   constructor(private dele: StudentService, private router:Router,protected ref: NbDialogRef<DeleteComponent>,){}
//   confirm() {
//     this.ref.close(true);
//   }

//   cancel() {
//     this.ref.close(false);
//   }
//   ngOnInit(): void {
    
//   }
  

//   deleteStudent(maHS:number) {
//     this.dele.deleteStudent(maHS).subscribe(res =>{
//       console.log(res.data);
//       this.router.navigate(['/pages', 'student', 'list'])
//     })
//   }
// }

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